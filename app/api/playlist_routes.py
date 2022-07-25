from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import db
from app.models import Playlist
from app.forms.playlistForm import AddPlaylist

playlist_routes = Blueprint('playlists', __name__)


@playlist_routes.route('/')
# @login_required
def playlists():
    playlists = Playlist.query.all()
    # print(playlists,'---------------------------------')
    return {'playlists': [playlist.to_dict() for playlist in playlists]}

@playlist_routes.route('/<string:search_value>')
# @login_required
def playlist(search_value):
    # print(search_value)
    playlist_search_results = Playlist.query.filter(Playlist.name.ilike(f'%{search_value}%')).all()
    # print('---------------------------------',playlist_search_results,'---------------------------------')
    return {'playlists': [playlist.to_dict() for playlist in playlist_search_results]}

@playlist_routes.route('/', methods=['POST'])
@login_required
def add_playlist():
    form = AddPlaylist()

    playlist = Playlist(
        name=form.data['name'],
        description=form.data['description'],
        cover_img_url=form.data['cover_img_url'],
        user_Id=current_user.id
    )
    db.session.add(playlist)
    db.session.commit()
    # print('PLAY LIST!!!!!!!!!!!!!!!!!!', playlist.to_dict())
    return playlist.to_dict()
