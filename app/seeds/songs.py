from app.models import db, Song



def seedSongs():
  crabrave= Song(
    name='Crab Rave', album='Crab Rave', genre='Electronic', artist='Noisestorm', source='http://ear-fruit-bucket.s3.amazonaws.com/2bc0ebf0c91a4ec1910f386195bead21.mp3', user_Id=6
  )
  lastmanstanding= Song(
    name='Last One Standing', album='Venom 2 Soundtrack', genre='Rap', artist='Skylar Grey', source='http://ear-fruit-bucket.s3.amazonaws.com/6e1f1241a578436fafba679031d26c4c.mp3', user_Id=6
  )
  anervoustick= Song(
    name='A Nervous Tick Motion of the Head to the Left', album='The Mysterious Production of Eggs', genre='Rock', artist='Andrew Bird', source='http://ear-fruit-bucket.s3.amazonaws.com/23a0abfff0f34781bfc24be2970db80f.mp3', user_Id=6
  )
  blink182= Song(
    name='Blink 182', album='Blink 182', genre='Electronic', artist='Half an Orange', source='http://ear-fruit-bucket.s3.amazonaws.com/6af3cc1de80e4008bf06cf4c81633ed3.mp3', user_Id=6
  )

  db.session.add(crabrave)
  db.session.add(lastmanstanding)
  db.session.add(anervoustick)
  db.session.add(blink182)

  db.session.commit()


def undo_songs():
    db.session.execute('TRUNCATE songs RESTART IDENTITY CASCADE;')
    db.session.commit()
