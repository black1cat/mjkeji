

from mjkeji.model import Device, Factory_area, Message,User,Product_line,Factory_area,Device
from mjkeji import app,db,login_manager
from flask import render_template, request, url_for, redirect, flash,jsonify
from flask_login import login_user
from random import choice
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
        print(user)
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
@app.route('/strap',methods=['GET','POST'])
def strap():
    return render_template('strap.html')
@app.route('/chain',methods=['GET','POST'])
def chain():
    return render_template('chain.html')
@app.route('/database',methods=['GET','POST'])
def dtatbase():
    return render_template('database.html')
@app.route('/plant_settings',methods=['GET','POST'])
def plant_settings():
    return render_template('plant_settings.html')
@app.route('/device_settings',methods=['GET','POST'])
def device_settings():
    return render_template('device_settings.html')
@app.route('/production_line_settings',methods=['GET','POST'])
def production_line_settings():
    return render_template('production_line_settings.html')
@app.route('/product_line',methods=['GET','POST'])
def product_line():
    data = []
    names  = Product_line.query.all()
    for i in names:
        d = {}
        d['id'] = i.id
        d['name'] = i.name # 随机选取汉字并拼接
        data.append(d)
    
    print(data)
    if request.method == 'POST':
        print('post')
    if request.method == 'GET':
        info = request.values
        limit = info.get('limit', 10)  # 每页显示的条数
        offset = info.get('offset', 0)  # 分片数，(页码-1)*limit，它表示一段数据的起点
        print('get', limit)
        print('get  offset', offset)
        return jsonify({'total': len(data), 'rows': data[int(offset):(int(offset) + int(limit))]})
@app.route('/factory_area',methods=['GET','POST'])
def factory_area():
    data = []
    names  = Factory_area.query.all()
    for i in names:
        d = {}
        d['id'] = i.id
        d['name'] = i.name # 随机选取汉字并拼接
        data.append(d)
    
    print(data)
    if request.method == 'POST':
        print('post')
    if request.method == 'GET':
        info = request.values
        limit = info.get('limit', 10)  # 每页显示的条数
        offset = info.get('offset', 0)  # 分片数，(页码-1)*limit，它表示一段数据的起点
        print('get', limit)
        print('get  offset', offset)
        return jsonify({'total': len(data), 'rows': data[int(offset):(int(offset) + int(limit))]})
@app.route('/device',methods=['GET','POST'])
def device():
    data = []
    names  = Device.query.all()
    for i in names:
        d = {}
        d['id'] = i.id
        d['name'] = i.name # 随机选取汉字并拼接
        d['status'] = i.status
        data.append(d)
    
    print(data)
    if request.method == 'POST':
        print('post')
    if request.method == 'GET':
        info = request.values
        limit = info.get('limit', 10)  # 每页显示的条数
        offset = info.get('offset', 0)  # 分片数，(页码-1)*limit，它表示一段数据的起点
        print('get', limit)
        print('get  offset', offset)
        return jsonify({'total': len(data), 'rows': data[int(offset):(int(offset) + int(limit))]})
