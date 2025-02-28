from flask import Flask, request, flash, redirect, send_file, send_from_directory, render_template
from flask_mail import Mail, Message

app = Flask(__name__, template_folder='.')

# Secret key for flash messages
app.secret_key = "your_secret_key"

# Configure Flask-Mail
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False
app.config['MAIL_USERNAME'] = 'patches.acronym.3d@icloud.com'  # Replace with your email
app.config['MAIL_PASSWORD'] = 'upte aewy otup klxh'  # Replace with your app password
app.config['MAIL_DEFAULT_SENDER'] = 'patches.acronym.3d@icloud.com'

mail = Mail(app)

# Serve the index.html
@app.route('/')
def home():
    return render_template('index.html')

# Handle the email form submission
@app.route("/send_email", methods=["POST"])
def send_email():
    name = request.form.get("name")
    email = request.form.get("email")
    message_body = request.form.get("message")

    # Create the email message
    msg = Message("New Contact Form Submission", recipients=["patches.acronym.3d@icloud.com"])
    msg.body = f"""
    Name: {name}
    Email: {email}
    Message: {message_body}
    """
    try:
        mail.send(msg)
        flash("Message sent successfully!", "success")
    except Exception as e:
        flash(f"Failed to send message: {e}", "error")
    return redirect("/")

# Serve the CSS file
@app.route('/style.css')
def serve_css():
    return send_from_directory('.', 'style.css')  # Ensure style.css is in the root directory

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

if __name__ == "__main__":
    app.run(debug=True)
