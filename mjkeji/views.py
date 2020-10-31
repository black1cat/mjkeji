from mjkeji.model import Message,User
from mjkeji import app,db,login_manager
from flask import render_template, request, url_for, redirect, flash
from flask_login import login_user
@app.route('/login',methods=['GET','POST'])
@app.route('/',methods=['GET','POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']

        if not username or not password:
            flash('请输入用户名和密码')
            return redirect(url_for('login'))

        user = User.query.first()
        # 验证用户名和密码是否一致
        if username == user.username and user.validate_password(password):
            login_user(user)  # 登入用户
            flash('登陆成功')
            return render_template('index.html')  # 重定向到主页

        flash('账号或密码错误')  # 如果验证失败，显示错误消息
        return redirect(url_for('login'))  # 重定向回登录页面
    return render_template('login.html')

@app.route('/index',methods=['GET','POST'])
def index():
    return render_template('index.html')

@app.route('/simple_page',methods=['GET','POST'])
def simple_page():
    if request.method == 'POST':
        name = request.form.get('name')
        email = request.form.get('email')
        message = request.form.get('message')
        temp = Message(name=name,email=email,message=message)
        db.session.add(temp)
        db.session.commit()
    return render_template("simple_page.html")
@app.route('/shortcodes',methods=['GET','POST'])
def shortcodes():
    return render_template('shortcodes.html')
@app.route('/temperature',methods=['GET','POST'])
def temperature():
    return render_template('temperature.html')
@app.route('/noise',methods=['GET','POST'])
def noise():
    return render_template('noise.html')