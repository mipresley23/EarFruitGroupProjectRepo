# from app.models import db, Playlist_Songs
from app.models.db import db, Playlist_Songs
from app.seeds import playlists, songs

  # EXAMPLE JOIN TABLE SEED FORMAT:
  # statement = Playlist_Songs.insert().values(songs=6, playlists=2)
  # db.session.execute(statement)
  # db.session.commit()

def seed_playlist_songs():

  ninetiesSong1= Playlist_Songs.insert().values(songs=1, playlists=2)
  ninetiesSong2= Playlist_Songs.insert().values(songs=2, playlists=2)
  ninetiesSong3= Playlist_Songs.insert().values(songs=5, playlists=2)
  ninetiesSong4= Playlist_Songs.insert().values(songs=6, playlists=2)
  ninetiesSong5= Playlist_Songs.insert().values(songs=9, playlists=2)
  ninetiesSong6= Playlist_Songs.insert().values(songs=10, playlists=2)
  ninetiesSong7= Playlist_Songs.insert().values(songs=11, playlists=2)
  ninetiesSong8= Playlist_Songs.insert().values(songs=12, playlists=2)
  ninetiesSong9= Playlist_Songs.insert().values(songs=13, playlists=2)
  ninetiesSong10= Playlist_Songs.insert().values(songs=14, playlists=2)
  ninetiesSong11= Playlist_Songs.insert().values(songs=15, playlists=2)


  db.session.execute(ninetiesSong1)
  db.session.execute(ninetiesSong2)
  db.session.execute(ninetiesSong3)
  db.session.execute(ninetiesSong4)
  db.session.execute(ninetiesSong5)
  db.session.execute(ninetiesSong6)
  db.session.execute(ninetiesSong7)
  db.session.execute(ninetiesSong8)
  db.session.execute(ninetiesSong9)
  db.session.execute(ninetiesSong10)
  db.session.execute(ninetiesSong11)

  db.session.commit()


def undo_playlist_songs():
  db.session.execute('TRUNCATE playlist_songs RESTART IDENTITY CASCADE;')
  db.session.commit()
