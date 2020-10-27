from mjkeji import app, db
from flask import render_template, request, url_for, redirect, flash


@app.route('/',methods=['GET','POST'])
def indd():
    if request.method == 'POST':
        return render_template('index.html')
    return render_template('login.html')
