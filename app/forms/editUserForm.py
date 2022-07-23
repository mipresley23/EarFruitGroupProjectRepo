from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired

class EditUserForm(FlaskForm):
  name = StringField('name', validators=[DataRequired()])
  photo_url = StringField('photo_url')
