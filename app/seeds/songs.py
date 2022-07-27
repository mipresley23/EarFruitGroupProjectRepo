from app.models import db, Song



def seedSongs():
  crabrave= Song(
    name='Crab Rave', album='Crab Rave', genre='Electronic', artist='Noisestorm', source='Last', userId=6
  )
  lastmanstanding= Song(
    name='Last One Standing', album='Venom 2 Soundtrack', genre='Rap', artist='Skylar Grey', source='http://ear-fruit-bucket.s3.amazonaws.com/6e1f1241a578436fafba679031d26c4c.mp3', userId=6
  )

  db.session.add(crabrave)
  db.session.add(lastmanstanding)

  db.session.commit()


def undo_songs():
    db.session.execute('TRUNCATE songs RESTART IDENTITY CASCADE;')
    db.session.commit()
