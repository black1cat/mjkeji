
from werkzeug.security import check_password_hash, generate_password_hash
from flask_login import UserMixin

from mjkeji import db
class User(db.Model, UserMixin):
  id = db.Column(db.Integer,primary_key=True)
  name = db.Column(db.String(20))
  username = db.Column(db.String(20))
  password_hash = db.Column(db.String(128))

  def set_password(self, password):  # 用来设置密码的方法，接受密码作为参数
    self.password_hash = generate_password_hash(password)  # 将生成的密码保持到对应字段

  def validate_password(self, password):  # 用于验证密码的方法，接受密码作为参数
    return check_password_hash(self.password_hash, password)  # 返回布尔值
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
class Factory_area(db.Model):
  id = db.Column(db.Integer,primary_key=True)
  name = db.Column(db.String(128))
class Device(db.Model):
  id = db.Column(db.Integer,primary_key=True)
  name = db.Column(db.String(128))
  status = db.Column(db.String(128)) # 设备状态