from app.models import db, Playlist


# Adds a demo playlist, you can add other playlists here if you want
def seed_playlists():
    lowkey = Playlist(
        name='Lowkey', description='just chill', cover_img_url='https://i.scdn.co/image/ab67706f00000003e30928da232fef3e6c82dc71', user_Id=1)

    db.session.add(lowkey)


    db.session.commit()


# Uses a raw SQL query to TRUNCATE the playlists table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_playlists():
    db.session.execute('TRUNCATE playlists RESTART IDENTITY CASCADE;')
    db.session.commit()
