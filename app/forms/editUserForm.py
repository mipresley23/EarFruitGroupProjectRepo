from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired

class EditUserForm(FlaskForm):
  id = IntegerField('id')
  username = StringField('username')
  email = StringField('email')
  password = StringField('password')
  photo_url = StringField('photo_url')
