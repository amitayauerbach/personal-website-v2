# from flask import Flask, request, render_template
# from flask_mail import Mail, Message

# app = Flask(__name__)

# # Configure Flask-Mail
# app.config['MAIL_SERVER'] = 'smtp.gmail.com'
# app.config['MAIL_PORT'] = 587
# app.config['MAIL_USE_TLS'] = True
# app.config['MAIL_USE_SSL'] = False
# app.config['MAIL_USERNAME'] = 'amitayab@gmail.com'  # Replace with your email
# app.config['MAIL_PASSWORD'] = 'upte aewy otup klxh'         # Replace with your email password
# app.config['MAIL_DEFAULT_SENDER'] = 'amitayab@gmail.com'

# mail = Mail(app)

# @app.route("/")
# def index():
#     return send_file("index.html")  # This will serve index.html from the main folder

# @app.route("/send_email", methods=["POST"])
# def send_email():
#     name = request.form["name"]
#     email = request.form["email"]
#     message_body = request.form["message"]

#     # Create email message
#     msg = Message("New Contact Form Submission", recipients=["amitayab@gmail.com"])
#     msg.body = f"""
#     Name: {name}
#     Email: {email}
#     Message: {message_body}
#     """
#     try:
#         mail.send(msg)
#         return "Message sent successfully!"
#     except Exception as e:
#         return f"Failed to send message: {e}", 500

# if __name__ == "__main__":
#     app.run(debug=True)
