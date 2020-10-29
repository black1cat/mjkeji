from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask.templating import render_template
app = Flask(__name__)
<<<<<<< HEAD
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:123456@8.131.64.67:3306/mjkj?charset=utf8'
=======
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:971106@localhost:3306/beer?charset=utf8'
>>>>>>> 19a832fed709be28a2dfea441f0cdc5e0db67a05
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

from mjkeji import views,commands