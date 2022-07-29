from app.models import db, Song

# emtpy seed file template: name= Song(
#   name='', album='', albumImgUrl='', genre='', artist='', source='', user_Id=)
def seedSongs():
  crabrave= Song(
    name='Crab Rave', album='Crab Rave', albumImgUrl='https://i.ytimg.com/vi/cE0wfjsybIQ/maxresdefault.jpg', genre='Electronic', artist='Noisestorm', source='http://ear-fruit-bucket.s3.amazonaws.com/2bc0ebf0c91a4ec1910f386195bead21.mp3', user_Id=7)
  lastonestanding= Song(
    name='Last One Standing', album='Venom 2 Soundtrack', albumImgUrl='https://www.universalmusic.it/dbcommon/file/cover/35117387685.jpg', genre='Rap', artist='Skylar Grey', source='http://ear-fruit-bucket.s3.amazonaws.com/6e1f1241a578436fafba679031d26c4c.mp3', user_Id=7)
  anervoustick= Song(
    name='A Nervous Tick Motion Of The Head To The Left', album='The Mysterious Production of Eggs', albumImgUrl='https://upload.wikimedia.org/wikipedia/en/a/a2/MysteriousProductionOfEggs.jpg', genre='Rock', artist='Andrew Bird', source='http://ear-fruit-bucket.s3.amazonaws.com/23a0abfff0f34781bfc24be2970db80f.mp3', user_Id=7)
  blink182= Song(
    name='Blink 182', album='Blink 182', albumImgUrl='https://i1.sndcdn.com/artworks-000592164017-xjrbq7-t500x500.jpg', genre='Electronic', artist='Half an Orange', source='http://ear-fruit-bucket.s3.amazonaws.com/6af3cc1de80e4008bf06cf4c81633ed3.mp3', user_Id=7)
  grace= Song(
    name='Grace', album='Grace', albumImgUrl='https://upload.wikimedia.org/wikipedia/en/e/e4/Jeff_Buckley_grace.jpg', genre='Rock', artist='Jeff Buckley', source='http://ear-fruit-bucket.s3.amazonaws.com/2dc402e6e00c42f6a38508850af2b789.mp3', user_Id=7)
  lastgoodbye= Song(
    name='Last Goodbye', album='Grace', albumImgUrl='https://upload.wikimedia.org/wikipedia/en/e/e4/Jeff_Buckley_grace.jpg', genre='Rock', artist='Jeff Buckley', source='http://ear-fruit-bucket.s3.amazonaws.com/1030bee21c5a4bd8930448916b5b4d40.mp3', user_Id=7)
  sevennationarmy= Song(
    name='Seven Nation Army', album='Elephant', albumImgUrl='https://americansongwriter.com/wp-content/uploads/2019/10/71e1DBAzgpL._SL1425_.jpg', genre='Rock', artist='The White Stripes', source='http://ear-fruit-bucket.s3.amazonaws.com/476226979180437b9f0b901a6cbd34ec.mp3', user_Id=8)
  threeam= Song(
    name='3am Live Acoustic Version', album='3am Acoustic', albumImgUrl='https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/Matchbox_Twenty_-_Yourself_or_Someone_Like_You.jpg/220px-Matchbox_Twenty_-_Yourself_or_Someone_Like_You.jpg', genre='Rock', artist='Rob Thomas', source='http://ear-fruit-bucket.s3.amazonaws.com/32910614aaff474f94f2b7d21c49aec5.mp3', user_Id=8)
  mrjones= Song(
    name='Mr. Jones', album='August And Everything After', albumImgUrl='https://m.media-amazon.com/images/I/81EUi7BZNvL._SS500_.jpg', genre='Rock', artist='Counting Crows', source='http://ear-fruit-bucket.s3.amazonaws.com/1076706707e3427092a52d8c0dd2f0ea.mp3', user_Id=8)
  smells= Song(
    name='Smells Like Teen Spirit', album='Nevermind', albumImgUrl='https://upload.wikimedia.org/wikipedia/en/thumb/b/b7/NirvanaNevermindalbumcover.jpg/220px-NirvanaNevermindalbumcover.jpg', genre='Rock', artist='Nirvana', source='http://ear-fruit-bucket.s3.amazonaws.com/2f8174871dcd4cc48a3e53ad196bf017.mp3', user_Id=8)
  californ= Song(
    name='Californication', album='Californication', albumImgUrl='https://upload.wikimedia.org/wikipedia/en/d/df/RedHotChiliPeppersCalifornication.jpg', genre='Rock', artist='Red Hot Chili Peppers', source='http://ear-fruit-bucket.s3.amazonaws.com/fdb887e6eceb4db89449873fb0a7b733.mp3', user_Id=8)
  everlong= Song(
    name='Everlong', album='The Colour And The Shape', albumImgUrl='https://m.media-amazon.com/images/I/61OLvgg7THL._SS500_.jpg', genre='Rock', artist='Foo Fighters', source='http://ear-fruit-bucket.s3.amazonaws.com/07908d34620f40cca001311a2fad7fbf.mp3', user_Id=6)
  alive= Song(
    name='Alive', album='Ten', albumImgUrl='https://m.media-amazon.com/images/I/81eaKFGNhSL._SL1500_.jpg', genre='Rock', artist='Pearl Jam', source='http://ear-fruit-bucket.s3.amazonaws.com/81085cf4a9b4441ebae360e47e0d0675.mp3', user_Id=6)
  twoprinces= Song(
    name='Two Princes', album='Pocket Full Of Kryptonite', albumImgUrl='https://images-na.ssl-images-amazon.com/images/I/51faoGQQkrL._SY445_SX342_QL70_ML2_.jpg', genre='Rock', artist='Spin Doctors', source='http://ear-fruit-bucket.s3.amazonaws.com/81680f9d8480417abfdc9116a4757606.mp3', user_Id=6)
  basketcase= Song(
    name='Basket Case', album='Dookie', albumImgUrl='https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Green_Day_-_Dookie_cover.jpg/220px-Green_Day_-_Dookie_cover.jpg', genre='Rock', artist='Green Day', source='http://ear-fruit-bucket.s3.amazonaws.com/143dca199d6d462388f69cb4151d76c9.mp3', user_Id=6)
  creep= Song(
    name='Creep', album='Pablo Honey', albumImgUrl='https://m.media-amazon.com/images/I/71uKIfy4T2L._SL1200_.jpg', genre='Rock', artist='Radiohead', source='http://ear-fruit-bucket.s3.amazonaws.com/9924e679360548b3b393f952a82146ad.mp3', user_Id=4)
  blackhole= Song(
    name='Black Hole Sun', album='Superunknown', albumImgUrl='https://m.media-amazon.com/images/I/716lqTpwbmL._SS500_.jpg', genre='Rock', artist='Soundgarden', source='http://ear-fruit-bucket.s3.amazonaws.com/dd421aab04bf4a08a5da51f59d7a9ddb.mp3', user_Id=4)
  buddyholly= Song(
    name='Buddy Holly', album='Weezer (Blue Album)', albumImgUrl='https://upload.wikimedia.org/wikipedia/en/7/70/Weezer_-_Blue_Album.png', genre='Rock', artist='Weezer', source='http://ear-fruit-bucket.s3.amazonaws.com/c68fe5330e2c4c18a717df0d2b59b3ad.mp3', user_Id=4)
  smallthings= Song(
    name='All The Small Things', album='Enema Of The State', albumImgUrl='https://albumart.publicradio.org/mb/cd/cd367c59-eb86-384b-bbc7-62f6d2d677b9_7add.jpg', genre='Rock', artist='Blink-182', source='http://ear-fruit-bucket.s3.amazonaws.com/84bb729b27ff457880836d2944954cf9.mp3', user_Id=4)
  backToTheBasics= Song(
    name='BACK TO THE BASICS', album='I NEVER LIKED YOU', albumImgUrl='https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/I_Never_Liked_You_%28Future%29.png/220px-I_Never_Liked_You_%28Future%29.png', genre='Rap', artist='Future', source='http://ear-fruit-bucket.s3.amazonaws.com/507d905607944501a2c0827b7669c7f0.mp3', user_Id=5)
  justTheTwoOfUs= Song(
    name='Just the Two of Us', album='Bill Withers', albumImgUrl='', genre='Rap', artist='Bill Withers', source='http://ear-fruit-bucket.s3.amazonaws.com/12b97ef655cf471f8df955d6a4eb59d3.mp3', user_Id=5)
  lastLast= Song(
    name='Last Last', album='Love, Damini', albumImgUrl='https://i0.wp.com/sololoaded.com/wp-content/uploads/2022/07/Burnaboy-%E2%80%93-Love-Damini-Ep.webp?fit=526%2C526&ssl=1', genre='Rap', artist='Burna Boy', source='http://ear-fruit-bucket.s3.amazonaws.com/a3cdd0ba542a4b8da31938e3aa24997c.mp3', user_Id=5)
  looseChange= Song(
    name='LOOSE CHANGE', album='LOOSE CHANGE', albumImgUrl='https://media.pitchfork.com/photos/62c715e86284eb9164c12cd5/master/pass/Brent-Faiyaz-Wasteland.jpg', genre='Rap', artist='Brent Faiyaz', source='http://ear-fruit-bucket.s3.amazonaws.com/f271f9ef75714c0cbbc168912a97b2d8.mp3', user_Id=5)

  db.session.add(grace)
  db.session.add(lastgoodbye)
  db.session.add(sevennationarmy)
  db.session.add(threeam)
  db.session.add(mrjones)
  db.session.add(smells)
  db.session.add(californ)
  db.session.add(everlong)
  db.session.add(alive)
  db.session.add(twoprinces)
  db.session.add(basketcase)
  db.session.add(creep)
  db.session.add(blackhole)
  db.session.add(buddyholly)
  db.session.add(smallthings)
  db.session.add(crabrave)
  db.session.add(lastonestanding)
  db.session.add(anervoustick)
  db.session.add(blink182)
  db.session.add(backToTheBasics)
  db.session.add(justTheTwoOfUs)
  db.session.add(lastLast)
  db.session.add(looseChange)

  db.session.commit()


def undo_songs():
    db.session.execute('TRUNCATE songs RESTART IDENTITY CASCADE;')
    db.session.commit()
