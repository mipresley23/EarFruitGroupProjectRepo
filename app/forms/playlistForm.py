from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, TextAreaField
from wtforms.validators import DataRequired

class AddPlaylist(FlaskForm):

    name = StringField('Name', validators=[DataRequired()])
    description = TextAreaField('Description', validators=[DataRequired()])
    cover_img_url = StringField('Playlist Cover', validators=[DataRequired()])
    submit = SubmitField('Submit')
