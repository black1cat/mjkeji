
from mjkeji.model import Device,User,Product_line,Factory_area,Device,Warning
from mjkeji import app,db,login_manager
from flask import render_template, request, url_for, redirect, flash,jsonify
from flask_login import login_user
from random import choice
# 测试页面
@app.route('/test',methods=['GET','POST'])
def test():
    if request.method == 'POST':
        user = request.values['username'] 
        print("成功")
    return render_template('test.html')
# 登录页面
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
# 
@app.route('/index',methods=['GET','POST'])
def index():
    return render_template('index.html')

@app.route('/simple_page',methods=['GET','POST'])
def simple_page():
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
def database():
    return render_template('database.html')
@app.route('/plant_settings',methods=['GET','POST'])
def plant_settings():
    if request.method == 'POST':
        name = request.form.get('factory_name')
        factory = Factory_area(name=name)
        db.session.add(factory)
        db.session.commit()
        db.session.close()
    factory_area = Factory_area.query.all()
    return render_template('plant_settings.html',fac=factory_area)
@app.route('/device_settings',methods=['GET','POST'])
def device_settings():
    if request.method == 'POST':
        name = request.form.get('device_name')
        status = request.form.get('status')
        line = request.form.get('line')
        device_select = Product_line.query.filter(Product_line.name == line).first()
        dev = Device(name = name,l_id=device_select.id,status=status)
        db.session.add(dev)
        db.session.commit()
        db.session.close()
    pro = Product_line.query.all()
    return render_template('device_settings.html',pro=pro)
@app.route('/production_line_settings',methods=['GET','POST'])
def production_line_settings():
    if request.method == 'POST':
        name = request.form.get('line_name')
        factory = request.form.get('factory')
        line_select = Factory_area.query.filter(Factory_area.name == factory).first()
        pro_line = Product_line(name=name,f_id=line_select.id)
        db.session.add(pro_line)
        db.session.commit()
        db.session.close()
    factory_area = Factory_area.query.all()
    return render_template('production_line_settings.html',factory_area=factory_area)
@app.route('/product_line',methods=['GET','POST'])
def product_line():
    data = []
    names  = Product_line.query.all()
    for i in names:
        d = {}
        d['id'] = i.id
        d['name'] = i.name # 随机选取汉字并拼接
        data.append(d)
    if request.method == 'POST':
        print('post')
    if request.method == 'GET':
        info = request.values
        limit = info.get('limit', 10)  # 每页显示的条数
        offset = info.get('offset', 0)  # 分片数，(页码-1)*limit，它表示一段数据的起点
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
    if request.method == 'POST':
        pass
    if request.method == 'GET':
        info = request.values
        limit = info.get('limit', 10)  # 每页显示的条数
        offset = info.get('offset', 0)  # 分片数，(页码-1)*limit，它表示一段数据的起点
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
# 警告信息
@app.route('/t_warning',methods=['GET','POST'])
def t_warning():
    data = []
    names  = Warning.query.all()
    for i in names:
        d = {}
        d['id'] = i.id
        d['time'] = i.time # 随机选取汉字并拼接
        d['device'] = i.device
        d['type'] = i.type
        d['warn_data'] = i.warn_data
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
@app.route('/h_warning',methods=['GET','POST'])
def h_warning():
    data = []
    for i in range(11):
        d = {}
        d['id'] = i
        d['time'] = "2020.10.1"  # 随机选取汉字并拼接
        d['device'] = "温度计"
        d['type'] = "温度异常"
        d['warn_data'] = "温度过高"
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

    data = []
    for i in range(11):
        d = {}
        d['id'] = i
        d['time'] = "2020.10.1"  # 随机选取汉字并拼接
        d['device'] = "温度计"
        d['type'] = "温度异常"
        d['warn_data'] = "温度过高"
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
@app.route('/n_warning',methods=['GET','POST'])
def n_warning():
    data = []
    for i in range(11):
        d = {}
        d['id'] = i
        d['time'] = "2020.10.1"  # 随机选取汉字并拼接
        d['device'] = "噪声传感器"
        d['type'] = "频率"
        d['warn_data'] = "频率过高"
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
@app.route('/s_warning',methods=['GET','POST'])
def s_warning():
    data = []
    for i in range(11):
        d = {}
        d['id'] = i
        d['time'] = "2020.10.1"  # 随机选取汉字并拼接
        d['device'] = "皮带传感器"
        d['type'] = "皮带异常"
        d['warn_data'] = "温度过高"
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
@app.route('/c_warning',methods=['GET','POST'])
def c_warning():
    data = []
    for i in range(11):
        d = {}
        d['id'] = i
        d['time'] = "2020.10.1"  # 随机选取汉字并拼接
        d['device'] = "链条传感器"
        d['type'] = "温度异常"
        d['warn_data'] = "温度过高"
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
#  表格删除
@app.route('/factory_delete', methods=['GET','POST'])  # 限定只接受 POST 请求
def fac_delete():
    id = request.values['ID']  
    movie = Factory_area.query.get_or_404(id)  # 获取电影记录
    db.session.delete(movie)  # 删除对应的记录
    db.session.commit()  # 提交数据库会话
    return redirect(url_for('plant_settings'))  # 重定向回主页
@app.route('/line_delete', methods=['GET','POST'])  # 限定只接受 POST 请求
def line_delete():
    id = request.values['ID']  
    movie = Product_line.query.get_or_404(id)  # 获取电影记录
    db.session.delete(movie)  # 删除对应的记录
    db.session.commit()  # 提交数据库会话
    return redirect(url_for('production_line_settings'))  # 重定向回主页
@app.route('/dev_delete', methods=['GET','POST'])  # 限定只接受 POST 请求
def dev_delete():
    id = request.values['ID']  
    movie = Device.query.get_or_404(id)  # 获取电影记录
    db.session.delete(movie)  # 删除对应的记录
    db.session.commit()  # 提交数据库会话
    return redirect(url_for('device_settings'))  # 重定向回主页
# 修改表格中的数据
@app.route('/dev_set', methods=['GET','POST'])  # 限定只接受 POST 请求
def dev_set():
    id = request.values['ID']
    name = request.values['dev_n']
    zt = request.values['dev_z']
    for_line = request.values['for_line']
    device_select = Product_line.query.filter(Product_line.name == for_line).first()
    num = device_select.id
    movie = Device.query.get_or_404(id)  # 获取电影记录
    movie.name = name
    movie.status = zt
    movie.l_id = num
    db.session.commit()  # 提交数据库会话
    return redirect(url_for('device_settings'))  # 重定向回主页
@app.route('/plant_set', methods=['GET','POST'])  # 限定只接受 POST 请求
def plant_set():
    id = request.values['ID']
    name = request.values['dev_n']
    plant = Factory_area.query.get_or_404(id)  # 获取电影记录
    plant.name = name
    db.session.commit()  # 提交数据库会话
    return redirect(url_for('plant_settings'))  # 重定向回主页
@app.route('/line_set', methods=['GET','POST'])  # 限定只接受 POST 请求
def line_set():
    print("成功")
    id = request.values['ID']
    name = request.values['dev_n']
    for_factory = request.values['for_factory']
    line_select = Factory_area.query.filter(Factory_area.name == for_factory).first()
    num = line_select.id
    line = Product_line.query.get_or_404(id)  # 获取电影记录
    line.name = name
    line.f_id = num
    db.session.commit()  # 提交数据库会话
    return redirect(url_for('device_settings'))  # 