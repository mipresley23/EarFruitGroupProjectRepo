from app.models import db, Playlist

# name = Playlist(
#         name='', description='', cover_img_url='', user_Id=)
# Adds a demo playlist, you can add other playlists here if you want
def seed_playlists():
    hiphophits = Playlist(
        name='Hip Hop Hits', description='Best Hip Hop Hits', cover_img_url='https://i.scdn.co/image/ab67706f00000003e30928da232fef3e6c82dc71', user_Id=1)
    ninties = Playlist(
        name="90's Hits", description='Best of the 90s', cover_img_url='https://i.scdn.co/image/ab67706c0000bebbd910bfd076b00aeede1c1ea7', user_Id=1)
    rockClassics = Playlist(
        name="Rock Classics", description='All the fundemental rock hits', cover_img_url='https://cdn.djcity.com.au/wp-content/uploads/2020/06/20174607/MAX-GigKit-Red-Stratocaster-Electric-Guitar-Pack-2.jpg', user_Id=1)
    toppop = Playlist(
        name="Top Pop Hits", description='Popular Hits', cover_img_url='https://www.liveabout.com/thmb/pwO4o_iDrZRTmmhs7eOfD25Qoqw=/1500x1125/smart/filters:no_upscale()/pop-music-57bce3863df78c87634ea806.jpg', user_Id=1)
    demofaves = Playlist(
        name='My Favorites', description='My favorite songs', cover_img_url='https://i1.sndcdn.com/artworks-000162563387-njdpta-t500x500.jpg', user_Id=2)
    demorock = Playlist(
        name="Let's Rock!", description='The best rock jams', cover_img_url='https://media.pitchfork.com/photos/60c39a3e9ee433b42e20fbd8/4:3/w_1064,h_798,c_limit/electric%20guitar%20header%20copy.png', user_Id=2)
    demorap = Playlist(
        name='My Favorite Rap Hits', description='All of my current favorte rap beats', cover_img_url='https://i1.sndcdn.com/avatars-ZjQ0zyL6w1NhpYfs-JuM1dQ-t240x240.jpg', user_Id=2)
    democountry = Playlist(
        name='Country Hits', description='Yee Haw', cover_img_url='https://www.cmuse.org/wp-content/uploads/2020/06/Characteristics-of-Country-Music.jpg', user_Id=2)
    marniehits = Playlist(
        name="Marnie's Faves", description='OMG The best songs EVA!!!', cover_img_url='https://612brew.com/wp-content/uploads/2021/04/genericmusic.jpeg', user_Id=3)
    marniechill = Playlist(
        name='Chill Out', description='Songs to chill to', cover_img_url='https://m.media-amazon.com/images/I/61c9KfaZ7qS._SS500_.jpg', user_Id=3)
    marnieelec = Playlist(
        name="Marnie's Favorite Electronic", description='My current favorite electronic vibes', cover_img_url='https://musictech.com/wp-content/uploads/2019/10/tutorial-create-edm-free-header@1400x1050.jpg', user_Id=3)
    bobbiesmetal = Playlist(
        name="Bobbie's Metal Hits", description='My favorite metal hits', cover_img_url='https://i.pinimg.com/474x/66/5f/db/665fdb15a54fff2c7e57b0d03cd96982--facebook-emoticons-emoji-emoticons.jpg', user_Id=4)
    bobbieclassical = Playlist(
        name="Bobbie's Classical Hits", description='Bach Rocks!!!', cover_img_url='https://wpr-public.s3.amazonaws.com/wprorg/field/image/fl_brandon_giesbrecht_-_sheet_music.jpg', user_Id=4)
    bobbiesworld = Playlist(
        name="Bobbie's World", description='All my favorite songs', cover_img_url='https://static.episodate.com/images/tv-show/full/2809.png', user_Id=4)
    jesse = Playlist(
        name="Jesse's Playlist", description='Vibes curated by Jesse', cover_img_url='https://cdn.iconscout.com/icon/free/png-256/j-characters-character-alphabet-letter-36045.png', user_Id=5)
    anthony = Playlist(
        name="Anthony's Playlist", description='Vibes curated by Anthony', cover_img_url='https://cdn.iconscout.com/icon/free/png-256/a-characters-character-alphabet-letter-36040.png', user_Id=6)
    michael = Playlist(
        name="Michael's Playlist", description='Vibes curated by Michael', cover_img_url='https://cdn.iconscout.com/icon/free/png-256/m-characters-character-alphabet-letter-36047.png', user_Id=7)
    krishna = Playlist(
        name="Krishna's Playlist", description='Vibes curated by Krishna', cover_img_url='https://cdn.iconscout.com/icon/free/png-256/k-characters-character-alphabet-letter-36028.png', user_Id=8)


    db.session.add(hiphophits)
    db.session.add(ninties)
    db.session.add(rockClassics)
    db.session.add(toppop)
    db.session.add(demofaves)
    db.session.add(demorock)
    db.session.add(demorap)
    db.session.add(democountry)
    db.session.add(marniehits)
    db.session.add(marniechill)
    db.session.add(marnieelec)
    db.session.add(bobbiesmetal)
    db.session.add(bobbieclassical)
    db.session.add(bobbiesworld)
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
