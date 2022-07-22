from flask import Blueprint, jsonify
# from flask_login import login_required
from app.models import Playlist

playlist_routes = Blueprint('playlists', __name__)


@playlist_routes.route('/')
# @login_required
def playlists():
    playlists = Playlist.query.all()
    print(playlists,'---------------------------------')
    return {'playlists': [playlist.to_dict() for playlist in playlists]}

@playlist_routes.route('/<string:search_value>')
# @login_required
def playlist(search_value):
    print(search_value)
    playlist_search_results = Playlist.query.filter(Playlist.name.ilike(f'%{search_value}%')).all()
    print('---------------------------------',playlist_search_results,'---------------------------------')
    return {'playlists': [playlist.to_dict() for playlist in playlist_search_results]}
