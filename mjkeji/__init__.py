from logging import DEBUG
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask.templating import render_template
from flask_login import LoginManager


app = Flask(__name__)
<<<<<<< HEAD

=======
app.secret_key='zzj' 
app.config[DEBUG] = True
>>>>>>> 720bf55f56bea7b0f269d9dbe9c8a97e1b9d3847
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:123456@8.131.64.67:3306/mjkj?charset=utf8'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
login_manager = LoginManager(app)  # 实例化扩展类

@login_manager.user_loader
def load_user(user_id):  # 创建用户加载回调函数，接受用户 ID 作为参数
    from mjkeji.model import User
    user = User.query.get(int(user_id))  # 用 ID 作为 User 模型的主键查询对应的用户
    return user  # 返回用户对象

login_manager.login_view = 'login'
from mjkeji import views,commands