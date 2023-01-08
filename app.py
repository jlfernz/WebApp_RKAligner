# from re import template
from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

ENV = 'dev'

if ENV == 'dev':
    app.debug = True
                                                        #username:password@localhost/databasename
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:123@localhost/RKAligner'
else:
    app.debug = False
    app.config['SQLALCHEMY_DATABASE_URI'] = ''

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class RKAligner(db.Model):
    __tablename__ = 'register'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(200), unique=True)
    email = db.Column(db.String(200))
    password = db.Column(db.String(200))

    def __init__(self, username, email, password):
        self.username = username
        self.email = email
        self.password = password

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/register', methods=['POST'])
def register():
     # Check if "username", "password" and "email" POST requests exist (user submitted form)
     if request.method == 'POST':
         # Create variables for easy access
        username = request.form['username']
        email = request.form['email']
        password = request.form['password']
        print(username, email, password, "notsure")
        return render_template('align.html')
   
   

if __name__ == "__main__":
    app.run()