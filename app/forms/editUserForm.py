from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired

class EditUserForm(FlaskForm):

  photo_url = StringField('photo_url')
