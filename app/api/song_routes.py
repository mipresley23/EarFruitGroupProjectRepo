from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db
from app.models.db import User, Song
from app.forms.add_song import AddSong

song_routes = Blueprint('songs', __name__, url_prefix='/songs')

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

@song_routes.route('/')
def songs():
    return '<h1>Songs</h1>'

@song_routes.route('/', methods=['POST'])
@login_required
def add_song():
    form = AddSong()

    song = Song(
        name=form.data['name'],
        artist=form.data['artist'],
        album=form.data['album'],
        genre=form.data['genre'],
        source=form.data['source'],
        userId=current_user.id
    )
    db.session.add(song)
    db.session.commit()
    return song.to_dict()
