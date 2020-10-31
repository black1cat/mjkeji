from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask.templating import render_template
app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:123456@8.131.64.67:3306/mjkj?charset=utf8'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

from mjkeji import views,commands