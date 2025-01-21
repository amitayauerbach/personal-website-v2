
from flask import Flask, request, render_template, jsonify
from flask_mail import Mail, Message
import os
from firebase_config import db
import datetime

app = Flask(__name__, static_folder='.')
app.secret_key = os.urandom(24)

# Mail settings
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.getenv('GMAIL_USER')
app.config['MAIL_PASSWORD'] = os.getenv('GMAIL_PASSWORD')
mail = Mail(app)

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/send_email', methods=['POST'])
def send_email():
    try:
        name = request.form['name']
        email = request.form['email']
        message = request.form['message']
        
        msg = Message(
            subject='New Contact Form Message',
            sender=email,
            recipients=['amitayab@gmail.com']
        )
        msg.body = f"""
From: {name}
Email: {email}
Message:
{message}
"""
        
        mail.send(msg)
        # Store message in Firebase
        db.collection('messages').add({
            'name': name,
            'email': email,
            'message': message,
            'timestamp': datetime.datetime.now()
        })
        return 'Message sent successfully!'
    except Exception as e:
        return f'Error sending message: {str(e)}', 500

@app.route('/api/stats', methods=['GET'])
def get_stats():
    try:
        messages = db.collection('messages').stream()
        return jsonify({
            'total_messages': len(list(messages))
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
