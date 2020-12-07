
from werkzeug.security import check_password_hash, generate_password_hash
from flask_login import UserMixin
from flask_migrate import Migrate
from mjkeji import app,db
# 用户
migrate = Migrate(app, db)

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20))
    username = db.Column(db.String(20))
    password_hash = db.Column(db.String(128))

    def set_password(self, password):  # 用来设置密码的方法，接受密码作为参数
        self.password_hash = generate_password_hash(password)  # 将生成的密码保持到对应字段

    def validate_password(self, password):  # 用于验证密码的方法，接受密码作为参数
        return check_password_hash(self.password_hash, password)  # 返回布尔值

# 生产线


class Product_line(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(128))
    f_id = db.Column(db.Integer)
#


class Abient(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    temperature = db.Column(db.Float)
    humidity = db.Column(db.Float)
    time = db.Column(db.DateTime)
    p_id = db.Column(db.Integer)
    # data = db.Column(db.Date)
# 机器温度


class Machine_temperature(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    time = db.Column(db.DateTime)
    p_id = db.Column(db.Integer)
    temperature = db.Column(db.Float)
# 噪声


class Noise(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    time = db.Column(db.DateTime)
    p_id = db.Column(db.Integer)
    amplitude = db.Column(db.Integer)
    frequency = db.Column(db.Integer)

# 皮带


class Belt(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    time = db.Column(db.DateTime)
    p_id = db.Column(db.Integer)
    tension = db.Column(db.Integer)

# 链条


class Chain(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    time = db.Column(db.DateTime)
    p_id = db.Column(db.Integer)
    tension = db.Column(db.Integer)
# 电机电流
class Motor_current(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    time = db.Column(db.DateTime)
    p_id = db.Column(db.Integer)
    A = db.Column(db.Integer)
# 厂区


class Factory_area(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(128))

# 设备


class Device(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(128))
    status = db.Column(db.String(128))  # 设备状态
    l_id = db.Column(db.Integer)
# simple_page 表格


class Warning(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    time = db.Column(db.DateTime)
    device = db.Column(db.String(128))
    type = db.Column(db.String(128))
    warn_data = db.Column(db.String(900))

class Twarning(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    time = db.Column(db.DateTime)
    device = db.Column(db.String(128))
    type = db.Column(db.String(128))
    warn_data = db.Column(db.String(900))

class Hwarning(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    time = db.Column(db.DateTime)
    device = db.Column(db.String(128))
    type = db.Column(db.String(128))
    warn_data = db.Column(db.String(900))


class Nwarning(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    time = db.Column(db.DateTime)
    device = db.Column(db.String(128))
    type = db.Column(db.String(128))
    warn_data = db.Column(db.String(900))


class Swarning(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    time = db.Column(db.DateTime)
    device = db.Column(db.String(128))
    type = db.Column(db.String(128))
    warn_data = db.Column(db.String(900))


class Cwarning(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    time = db.Column(db.DateTime)
    device = db.Column(db.String(128))
    type = db.Column(db.String(128))
    warn_data = db.Column(db.String(900))
