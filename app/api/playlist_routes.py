from copyreg import constructor
from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import db
from app.models import Playlist
from app.models import Song
from app.models import Playlist_Songs
from app.forms.playlistForm import AddPlaylist
from app.forms.add_song_to_playlist import AddSongToPlaylist

playlist_routes = Blueprint('playlists', __name__)


@playlist_routes.route('/')
# @login_required
def playlists():
    playlists = Playlist.query.all()
    # print(playlists,'---------------------------------')
    return {'playlists': [playlist.to_dict() for playlist in playlists]}
@playlist_routes.route('/songs/<int:playlist_id>')
# @login_required
def playlists_songs(playlist_id):
    songs = Song.query.join(Playlist_Songs).join(Playlist).filter(Playlist.id == playlist_id).all()
    db.session.commit()
    # print(playlists,'---------------------------------')
    return {'songs': [song.to_dict() for song in songs]}

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

@playlist_routes.route('/add-song/<int:playlist_id>/<int:song_id>')
@login_required
def add_song(playlist_id,song_id):
    playlist = Playlist.query.get(playlist_id)
    song = Song.query.get(song_id)
    print('-')
    print('-')
    print('-')
    print('-')
    print('-')
    # print('-')
    if song in playlist.songs:
        print('already has song')
    else:
        playlist.songs.append(song)
    print('-')
    print('-')
    print('-')
    print('-')
    print('-')
    db.session.commit()
    return('Song Added')


@playlist_routes.route('/delete-song/<int:playlist_id>/<int:song_id>')
@login_required
def delete_song(playlist_id,song_id):
    playlist = Playlist.query.get(playlist_id)
    song = Song.query.get(song_id)
    print('-')
    print('-')
    print('-')
    print('-')
    print('-')
    # print('-')
    if song in playlist.songs:
        playlist.songs.remove(song)
    else:
        print('already removed song')
    print('-')
    print('-')
    print('-')
    print('-')
    print('-')
    db.session.commit()
    return('Song Removed')


@playlist_routes.route('/<int:playlist_id>', methods=['DELETE'])
@login_required
def delete_playlist(playlist_id):
    playlist = Playlist.query.get(playlist_id)
    # print(playlist)
    # if playlist.user_Id != current_user.id:
    #     return jsonify({'error': 'You do not have permission to delete this playlist'})
    db.session.delete(playlist)
    db.session.commit()

@playlist_routes.route('/<int:playlist_id>', methods=['PUT'])
@login_required
def update_playlist(playlist_id):
    # print('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', playlist_id)
    playlist = Playlist.query.get(playlist_id)
    # print('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', playlist.to_dict())
    form = AddPlaylist()
    # print('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', form.data)
    playlist.name = form.data['name']
    playlist.description = form.data['description']
    playlist.cover_img_url = form.data['cover_img_url']
    db.session.commit()
    return playlist.to_dict()
