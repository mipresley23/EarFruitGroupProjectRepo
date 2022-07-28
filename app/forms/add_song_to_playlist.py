from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired

class AddSongToPlaylist(FlaskForm):

    songId = IntegerField('Song', validators=[DataRequired()])
    playlistId = IntegerField('Playlist', validators=[DataRequired()])
