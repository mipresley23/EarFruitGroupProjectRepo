
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.dialects.postgresql import JSON
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

db = SQLAlchemy()


Playlist_Songs = db.Table(
  'playlist_songs',
  db.Model.metadata,
  db.Column('songs', db.Integer, db.ForeignKey('songs.id'), primary_key=True),
  db.Column('playlists', db.Integer, db.ForeignKey('playlists.id'), primary_key=True)
)


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    photo_url = db.Column(db.String(255), nullable=True, default="https://as1.ftcdn.net/jpg/03/46/83/96/240_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg")

    songs = db.relationship("Song", back_populates='user')
    playlists = db.relationship('Playlist', back_populates='user')

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'photo_url': self.photo_url
        }


class Song(db.Model):
  __tablename__ = 'songs'
  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(50), nullable=False)
  album = db.Column(db.String(50), nullable=False)
  genre = db.Column(db.String(25), nullable=False)
  artist = db.Column(db.String(50), nullable=False)
  source = db.Column(db.String(250), nullable=False)
  userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

  user = db.relationship("User", back_populates='songs')
  song_playlists = db.relationship("Playlist",
      secondary=Playlist_Songs,
      back_populates="playlist_songs",
      cascade="all, delete"
    )

  def to_dict(self):
    return {
      "id": self.id,
      "name": self.name,
      "album": self.album,
      "genre": self.genre,
      "artist": self.artist,
      "userId": self.user.to_dict(),
      "playlists": len(self.song_playlists)
    }



class Playlist(db.Model):
  __tablename__ = 'playlists'
  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(255), nullable=False)
  description = db.Column(db.String(255), nullable=True)
  cover_img_url = db.Column(db.String(255), nullable=True)
  user_Id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

  user = db.relationship('User', back_populates='playlists')
  playlist_songs = db.relationship("Song",
    secondary=Playlist_Songs,
    back_populates="song_playlists",
    cascade="all, delete"
  )


  def to_dict(self):
    return{
      "id": self.id,
      "name": self.name,
      "description": self.description,
      "cover_img_url": self.cover_img_url,
      "user": self.user.to_dict(),
      "songs": len(self.playlist_songs)
    }
