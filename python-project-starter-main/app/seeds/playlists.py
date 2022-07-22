from app.models import db, Playlist


# Adds a demo playlist, you can add other playlists here if you want
def seed_playlists():
    lowkey = Playlist(
        name='Lowkey', description='just chill', cover_img_url='https://i.scdn.co/image/ab67706f00000003e30928da232fef3e6c82dc71', user_Id=1)
    ninties = Playlist(
        name="90's Hits", description='Best of the 90s', cover_img_url='https://i.scdn.co/image/ab67706c0000bebbd910bfd076b00aeede1c1ea7', user_Id=2)
    rockClassics = Playlist(
        name="Rock Classics", description='All the fundemental rock hits', cover_img_url='https://i.scdn.co/image/ab67706c0000bebb69ec8b5b03df1a6dfe45abf3', user_Id=7)
    tikTok = Playlist(
        name="TikTok Songs 2022", description='the biggest viral hits from TikTok', cover_img_url='https://i.scdn.co/image/ab67706c0000bebbec4b4b59e21d6190148b3247', user_Id=3)
    jesse = Playlist(
        name="Jesse's Playlist", description='Vibes curated by Jesse', cover_img_url='https://cdn.iconscout.com/icon/free/png-256/j-characters-character-alphabet-letter-36045.png', user_Id=4)
    anthony = Playlist(
        name="Anthony's Playlist", description='Vibes curated by Anthony', cover_img_url='https://cdn.iconscout.com/icon/free/png-256/a-characters-character-alphabet-letter-36040.png', user_Id=5)
    michael = Playlist(
        name="Michael's Playlist", description='Vibes curated by Michael', cover_img_url='https://cdn.iconscout.com/icon/free/png-256/m-characters-character-alphabet-letter-36047.png', user_Id=6)
    krishna = Playlist(
        name="Krishna's Playlist", description='Vibes curated by Krishna', cover_img_url='https://cdn.iconscout.com/icon/free/png-256/k-characters-character-alphabet-letter-36028.png', user_Id=7)


    db.session.add(lowkey)
    db.session.add(ninties)
    db.session.add(rockClassics)
    db.session.add(tikTok)
    db.session.add(jesse)
    db.session.add(anthony)
    db.session.add(michael)
    db.session.add(krishna)


    db.session.commit()


# Uses a raw SQL query to TRUNCATE the playlists table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_playlists():
    db.session.execute('TRUNCATE playlists RESTART IDENTITY CASCADE;')
    db.session.commit()
