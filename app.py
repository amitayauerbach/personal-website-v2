from flask import Flask, request, flash, redirect, send_file
from flask_mail import Mail, Message
import os

app = Flask(__name__)

# Secret key for flash messages
app.secret_key = "your_secret_key"

# Configure Flask-Mail
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False
app.config['MAIL_USERNAME'] = 'amitayab@gmail.com'  # Replace with your email
app.config['MAIL_PASSWORD'] = 'upte aewy otup klxh'   # Replace with your email app password
app.config['MAIL_DEFAULT_SENDER'] = 'amitayab@gmail.com'

mail = Mail(app)

@app.route("/")
def index():
    # Serve the index.html file from the root directory
    return send_file("index.html")

@app.route("/send_email", methods=["POST"])
def send_email():
    name = request.form.get("name")
    email = request.form.get("email")
    message_body = request.form.get("message")

    # Create email message
    msg = Message("New Contact Form Submission", recipients=["amitayab@gmail.com"])
    msg.body = f"""
    Name: {name}
    Email: {email}
    Message: {message_body}
    """
    try:
        mail.send(msg)
        flash("Message sent successfully!", "success")
        return redirect("/")
    except Exception as e:
        flash(f"Failed to send message: {e}", "error")
        return redirect("/")

if __name__ == "__main__":
    app.run(debug=True)
