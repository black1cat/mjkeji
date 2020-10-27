from mjkeji import db
from werkzeug.security import check_password_hash, generate_password_hash
class User(db.Model):
  id = db.Column(db.Integer,primary_key=True)
  name = db.Column(db.String(20))
  username = db.Column(db.String(20))
  password_hash = db.Column(db.String(128))
  print("test")
