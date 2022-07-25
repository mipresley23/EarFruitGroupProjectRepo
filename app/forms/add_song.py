from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired

class AddSong(FlaskForm):

    name = StringField('Name', validators=[DataRequired()])
    album = StringField('Album', validators=[DataRequired()])
    genre = StringField('Genre', validators=[DataRequired()])
    artist = StringField('Artist', validators=[DataRequired()])
    source = StringField('Source')
    submit = SubmitField('Add')
