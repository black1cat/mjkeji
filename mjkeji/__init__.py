from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask.templating import render_template
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:123456@localhost:3306/mckj?charset=utf8'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

print("hello...")
from mjkeji import views