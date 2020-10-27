from mjkeji.model import Message
from mjkeji import app, db
from flask import render_template, request, url_for, redirect, flash


@app.route('/',methods=['GET','POST'])
def login():
    if request.method == 'POST':
        return render_template('index.html')
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