from mjkeji import db
from werkzeug.security import check_password_hash, generate_password_hash
class User(db.Model):
  id = db.Column(db.Integer,primary_key=True)
  name = db.Column(db.String(20))
  username = db.Column(db.String(20))
  password_hash = db.Column(db.String(128))
class Message(db.Model):
  id = db.Column(db.Integer,primary_key=True)
  name = db.Column(db.String(20))
  email = db.Column(db.String(128))
  message = db.Column(db.String(428))
class Product_line(db.Model):
  id = db.Column(db.Integer,primary_key=True)
  name =db.Column(db.String(128))
class Abient(db.Model):
  id = db.Column(db.Integer,primary_key=True)
  temperature = db.Column(db.Float)
  humidity = db.Column(db.Float)
  time = db.Column(db.DateTime)
  p_id = db.Column(db.Integer)
class Machine_temperature(db.Model):
  id = db.Column(db.Integer,primary_key=True)
  time = db.Column(db.DateTime)
  p_id = db.Column(db.Integer)
  temperature = db.Column(db.Float)
class Noise(db.Model):
  id = db.Column(db.Integer,primary_key=True)
  time = db.Column(db.DateTime)
  p_id = db.Column(db.Integer)
  amplitude = db.Column(db.Integer)
  frequency = db.Column(db.Integer)
class Belt(db.Model):
  id = db.Column(db.Integer,primary_key=True)
  time = db.Column(db.DateTime)
  p_id = db.Column(db.Integer)
  tension = db.Column(db.Boolean)
class Chain(db.Model):
  id = db.Column(db.Integer,primary_key=True)
  time = db.Column(db.DateTime)
  p_id = db.Column(db.Integer)
  tension = db.Column(db.Boolean)