from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db
from app.models.db import User, Song
from app.forms.add_song import AddSong
from app.s3_funcs import (
    upload_file_to_s3, is_mp3, get_unique_filename)

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

@song_routes.route('/')
def get_songs():
    songs = Song.query.all()
    return jsonify([song.to_dict() for song in songs])

@song_routes.route('/<int:song_id>')
def get_song(song_id):
    song = Song.query.get(song_id)
    return jsonify(song.to_dict())

@song_routes.route('/<int:song_id>', methods=['DELETE'])
@login_required
def delete_song(song_id):
    song = Song.query.get(song_id)
    
    db.session.delete(song)
    db.session.commit()


@song_routes.route('/<int:song_id>', methods=['PUT'])
@login_required
def update_song(song_id):
    song = Song.query.get(song_id)
    if song.userId != current_user.id:
        return jsonify({'error': 'You do not have permission to update this song'})
    form = AddSong()
    song.name = form.data['name']
    song.artist = form.data['artist']
    song.album = form.data['album']
    song.genre = form.data['genre']
    song.source = form.data['source']
    db.session.commit()
    return song.to_dict()


@song_routes.route("/mp3", methods=["POST"])
@login_required
def upload_mp3():
    if "mp3" not in request.files:
        print('----------error #1-----------', request.files.mp3)
        return {"errors": "mp3 required"}, 400

    mp3 = request.files["mp3"]
    
    print(mp3)
    
    if not is_mp3(mp3.filename):
        print('----------error #2-----------')
        return {"errors": "file type not permitted"}, 400

    mp3.filename = get_unique_filename(mp3.filename)

    upload = upload_file_to_s3(mp3)

    if "url" not in upload:
        # if the dictionary doesn't have a filename key
        # it means that there was an error when we tried to upload
        # so we send back that error message
        print('----------error #3-----------')
        return upload, 400

    url = upload["url"]

    return {"source": url}