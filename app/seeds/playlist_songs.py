# from app.models import db, Playlist_Songs
from app.models.db import db, Playlist_Songs
from app.seeds import playlists, songs

  # EXAMPLE JOIN TABLE SEED FORMAT:
  # statement = Playlist_Songs.insert().values(songs=6, playlists=2)
  # db.session.execute(statement)
  # db.session.commit()

def seed_playlist_songs():

  hiphopHits1=Playlist_Songs.insert().values(songs=17, playlists=1)
  hiphopHits2=Playlist_Songs.insert().values(songs=20, playlists=1)
  hiphopHits3=Playlist_Songs.insert().values(songs=22, playlists=1)
  hiphopHits4=Playlist_Songs.insert().values(songs=23, playlists=1)
  hiphopHits5=Playlist_Songs.insert().values(songs=24, playlists=1)
  hiphopHits6=Playlist_Songs.insert().values(songs=25, playlists=1)
  hiphopHits7=Playlist_Songs.insert().values(songs=26, playlists=1)
  hiphopHits8=Playlist_Songs.insert().values(songs=27, playlists=1)
  hiphopHits9=Playlist_Songs.insert().values(songs=29, playlists=1)
  hiphopHits10=Playlist_Songs.insert().values(songs=31, playlists=1)
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
  classicRockHits1= Playlist_Songs.insert().values(songs=7, playlists=3)
  classicRockHits2= Playlist_Songs.insert().values(songs=10, playlists=3)
  classicRockHits3= Playlist_Songs.insert().values(songs=13, playlists=3)
  classicRockHits4= Playlist_Songs.insert().values(songs=6, playlists=3)
  classicRockHits5= Playlist_Songs.insert().values(songs=70, playlists=3)
  classicRockHits6= Playlist_Songs.insert().values(songs=69, playlists=3)
  toppophits1= Playlist_Songs.insert().values(songs=33, playlists=4)
  toppophits2= Playlist_Songs.insert().values(songs=34, playlists=4)
  toppophits3= Playlist_Songs.insert().values(songs=35, playlists=4)
  toppophits4= Playlist_Songs.insert().values(songs=36, playlists=4)
  toppophits5= Playlist_Songs.insert().values(songs=37, playlists=4)
  toppophits6= Playlist_Songs.insert().values(songs=38, playlists=4)
  toppophits7= Playlist_Songs.insert().values(songs=39, playlists=4)
  demofaves1= Playlist_Songs.insert().values(songs=28, playlists=5)
  demofaves2= Playlist_Songs.insert().values(songs=61, playlists=5)
  demofaves3= Playlist_Songs.insert().values(songs=41, playlists=5)
  demofaves4= Playlist_Songs.insert().values(songs=37, playlists=5)
  demofaves5= Playlist_Songs.insert().values(songs=10, playlists=5)
  demofaves6= Playlist_Songs.insert().values(songs=16, playlists=5)
  demorock1= Playlist_Songs.insert().values(songs=6, playlists=6)
  demorock2= Playlist_Songs.insert().values(songs=5, playlists=6)
  demorock3= Playlist_Songs.insert().values(songs=2, playlists=6)
  demorock4= Playlist_Songs.insert().values(songs=8, playlists=6)
  demorock5= Playlist_Songs.insert().values(songs=12, playlists=6)
  demorock6= Playlist_Songs.insert().values(songs=13, playlists=6)
  demorap1= Playlist_Songs.insert().values(songs=24, playlists=7)
  demorap2= Playlist_Songs.insert().values(songs=25, playlists=7)
  demorap3= Playlist_Songs.insert().values(songs=26, playlists=7)
  demorap4= Playlist_Songs.insert().values(songs=27, playlists=7)
  demorap5= Playlist_Songs.insert().values(songs=30, playlists=7)
  demorap6= Playlist_Songs.insert().values(songs=31, playlists=7)
  democountry1= Playlist_Songs.insert().values(songs=46, playlists=8)
  democountry2= Playlist_Songs.insert().values(songs=47, playlists=8)
  democountry3= Playlist_Songs.insert().values(songs=48, playlists=8)
  democountry4= Playlist_Songs.insert().values(songs=49, playlists=8)
  democountry5= Playlist_Songs.insert().values(songs=50, playlists=8)
  democountry6= Playlist_Songs.insert().values(songs=51, playlists=8)
  marniehits1= Playlist_Songs.insert().values(songs=45, playlists=9)
  marniehits2= Playlist_Songs.insert().values(songs=23, playlists=9)
  marniehits3= Playlist_Songs.insert().values(songs=1, playlists=9)
  marniehits4= Playlist_Songs.insert().values(songs=64, playlists=9)
  marniechill1= Playlist_Songs.insert().values(songs=52, playlists=10)
  marniechill2= Playlist_Songs.insert().values(songs=53, playlists=10)
  marniechill3= Playlist_Songs.insert().values(songs=54, playlists=10)
  marniechill4= Playlist_Songs.insert().values(songs=55, playlists=10)
  marnieelec1= Playlist_Songs.insert().values(songs=40, playlists=11)
  marnieelec2= Playlist_Songs.insert().values(songs=41, playlists=11)
  marnieelec3= Playlist_Songs.insert().values(songs=42, playlists=11)
  marnieelec4= Playlist_Songs.insert().values(songs=43, playlists=11)
  bobbiesmetal1= Playlist_Songs.insert().values(songs=66, playlists=12)
  bobbiesmetal2= Playlist_Songs.insert().values(songs=67, playlists=12)
  bobbiesmetal3= Playlist_Songs.insert().values(songs=68, playlists=12)
  bobbiesmetal4= Playlist_Songs.insert().values(songs=69, playlists=12)
  bobbiesclassical1= Playlist_Songs.insert().values(songs=52, playlists=13)
  bobbiesclassical2= Playlist_Songs.insert().values(songs=53, playlists=13)
  bobbiesclassical3= Playlist_Songs.insert().values(songs=54, playlists=13)
  bobbiesclassical4= Playlist_Songs.insert().values(songs=55, playlists=13)
  bobbiesworld1= Playlist_Songs.insert().values(songs=61, playlists=14)
  bobbiesworld2= Playlist_Songs.insert().values(songs=62, playlists=14)
  bobbiesworld3= Playlist_Songs.insert().values(songs=39, playlists=14)
  bobbiesworld4= Playlist_Songs.insert().values(songs=45, playlists=14)
  jesse1= Playlist_Songs.insert().values(songs=21, playlists=15)
  jesse2= Playlist_Songs.insert().values(songs=22, playlists=15)
  jesse3= Playlist_Songs.insert().values(songs=23, playlists=15)
  jesse4= Playlist_Songs.insert().values(songs=20, playlists=15)
  anthony1=Playlist_Songs.insert().values(songs=28, playlists=16)
  anthony2=Playlist_Songs.insert().values(songs=30, playlists=16)
  anthony3=Playlist_Songs.insert().values(songs=17, playlists=16)
  anthony4=Playlist_Songs.insert().values(songs=11, playlists=16)
  michael1=Playlist_Songs.insert().values(songs=14, playlists=17)
  michael2=Playlist_Songs.insert().values(songs=15, playlists=17)
  michael3=Playlist_Songs.insert().values(songs=24, playlists=17)
  michael4=Playlist_Songs.insert().values(songs=18, playlists=17)
  krishna1=Playlist_Songs.insert().values(songs=9, playlists=18)
  krishna2=Playlist_Songs.insert().values(songs=13, playlists=18)
  krishna3=Playlist_Songs.insert().values(songs=12, playlists=18)
  krishna4=Playlist_Songs.insert().values(songs=64, playlists=18)

  db.session.execute(hiphopHits1)
  db.session.execute(hiphopHits2)
  db.session.execute(hiphopHits3)
  db.session.execute(hiphopHits4)
  db.session.execute(hiphopHits5)
  db.session.execute(hiphopHits6)
  db.session.execute(hiphopHits7)
  db.session.execute(hiphopHits8)
  db.session.execute(hiphopHits9)
  db.session.execute(hiphopHits10)
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
  db.session.execute(classicRockHits1)
  db.session.execute(classicRockHits2)
  db.session.execute(classicRockHits3)
  db.session.execute(classicRockHits4)
  db.session.execute(classicRockHits5)
  db.session.execute(classicRockHits6)
  db.session.execute(toppophits1)
  db.session.execute(toppophits2)
  db.session.execute(toppophits3)
  db.session.execute(toppophits4)
  db.session.execute(toppophits5)
  db.session.execute(toppophits6)
  db.session.execute(toppophits7)
  db.session.execute(demofaves1)
  db.session.execute(demofaves2)
  db.session.execute(demofaves3)
  db.session.execute(demofaves4)
  db.session.execute(demofaves5)
  db.session.execute(demofaves6)
  db.session.execute(demorock1)
  db.session.execute(demorock2)
  db.session.execute(demorock3)
  db.session.execute(demorock4)
  db.session.execute(demorock5)
  db.session.execute(demorock6)
  db.session.execute(demorap1)
  db.session.execute(demorap2)
  db.session.execute(demorap3)
  db.session.execute(demorap4)
  db.session.execute(demorap5)
  db.session.execute(demorap6)
  db.session.execute(democountry1)
  db.session.execute(democountry2)
  db.session.execute(democountry3)
  db.session.execute(democountry4)
  db.session.execute(democountry5)
  db.session.execute(democountry6)
  db.session.execute(marniehits1)
  db.session.execute(marniehits2)
  db.session.execute(marniehits3)
  db.session.execute(marniehits4)
  db.session.execute(marniechill1)
  db.session.execute(marniechill2)
  db.session.execute(marniechill3)
  db.session.execute(marniechill4)
  db.session.execute(marnieelec1)
  db.session.execute(marnieelec2)
  db.session.execute(marnieelec3)
  db.session.execute(marnieelec4)
  db.session.execute(bobbiesmetal1)
  db.session.execute(bobbiesmetal2)
  db.session.execute(bobbiesmetal3)
  db.session.execute(bobbiesmetal4)
  db.session.execute(bobbiesclassical1)
  db.session.execute(bobbiesclassical2)
  db.session.execute(bobbiesclassical3)
  db.session.execute(bobbiesclassical4)
  db.session.execute(bobbiesworld1)
  db.session.execute(bobbiesworld2)
  db.session.execute(bobbiesworld3)
  db.session.execute(bobbiesworld4)
  db.session.execute(jesse1)
  db.session.execute(jesse2)
  db.session.execute(jesse3)
  db.session.execute(jesse4)
  db.session.execute(anthony1)
  db.session.execute(anthony2)
  db.session.execute(anthony3)
  db.session.execute(anthony4)
  db.session.execute(michael1)
  db.session.execute(michael2)
  db.session.execute(michael3)
  db.session.execute(michael4)
  db.session.execute(krishna1)
  db.session.execute(krishna2)
  db.session.execute(krishna3)
  db.session.execute(krishna4)

  db.session.commit()


def undo_playlist_songs():
  db.session.execute('TRUNCATE playlist_songs RESTART IDENTITY CASCADE;')
  db.session.commit()
