from flask.cli import AppGroup

from app.seeds.playlist_songs import seed_playlist_songs, undo_playlist_songs
from .users import seed_users, undo_users
from .playlists import seed_playlists, undo_playlists
from .songs import seedSongs, undo_songs

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    # Add other seed functions here
    seed_playlists()
    seedSongs()
    seed_playlist_songs()


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    # Add other undo functions here
    undo_playlists()
    undo_songs()
    undo_playlist_songs()
