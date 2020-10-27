from mjkeji import app, db
from flask import render_template, request, url_for, redirect, flash


@app.route('/')
def indd():
    return render_template('login.html')
