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
  godzilla= Song(
    name='Godzilla', album='Music To Be Murdered By', albumImgUrl='https://upload.wikimedia.org/wikipedia/en/8/80/Eminem_-_Music_to_Be_Murdered_By.png', genre='Rap', artist='Eminem', source='http://ear-fruit-bucket.s3.amazonaws.com/870194b5b15e408e8007bbe4bb50e050.mp3', user_Id=1)
  yeah= Song(
    name='Yeah', album='Confessions', albumImgUrl='https://upload.wikimedia.org/wikipedia/en/7/74/Usher_-_Confessions_album_cover.jpg', genre='Rap', artist='Usher Feat. Lil Jon & Ludacris', source='http://ear-fruit-bucket.s3.amazonaws.com/38908ff33fd04b48ad6120c324a0de37.mp3', user_Id=1)
  msjackson= Song(
    name='Ms. Jackson', album='Stankonia', albumImgUrl='https://m.media-amazon.com/images/I/81NfayQcQgL._SX355_.jpg', genre='Rap', artist='Outkast', source='http://ear-fruit-bucket.s3.amazonaws.com/9b2c0a09a2b84f80abaf8d798dd0dc32.mp3', user_Id=1)
  workit= Song(
    name='Work It', album='Under Construction', albumImgUrl='https://upload.wikimedia.org/wikipedia/en/9/93/Under_Construction_Cover.jpg', genre='Rap', artist='Missy Elliot', source='http://ear-fruit-bucket.s3.amazonaws.com/2736afad96c44b7385f987f39793900c.mp3', user_Id=1)
  jiggy= Song(
    name='Gettin Jiggy Wit It', album='Big Willie Style', albumImgUrl='https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/WillSmith-BigWillieStyle.jpg/220px-WillSmith-BigWillieStyle.jpg', genre='Rap', artist='Will Smith', source='http://ear-fruit-bucket.s3.amazonaws.com/f23189d7199740f9a288ef62bac07c1f.mp3', user_Id=1)
  livinitup= Song(
    name='Livin It Up', album='Pain Is Love', albumImgUrl='https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/Ja-rule-pain-is-love.jpg/220px-Ja-rule-pain-is-love.jpg', genre='Rap', artist='Ja Rule', source='http://ear-fruit-bucket.s3.amazonaws.com/601f7419e46d481fbb04c9159dfeaf95.mp3', user_Id=2)
  getlow= Song(
    name='Get Love', album='Kings Of Crunk', albumImgUrl='https://upload.wikimedia.org/wikipedia/en/6/67/KingsOfCrunk.jpg', genre='Rap', artist='Lil Jon & The East Side Boyz feat. Ying Yang Twins', source='http://ear-fruit-bucket.s3.amazonaws.com/6a818e19398b408eb2c1657300cfb28d.mp3', user_Id=2)
  handswhere= Song(
    name='Put Your Hands Where My Eyes Could See', album='When Disaster Strikes', albumImgUrl='https://upload.wikimedia.org/wikipedia/en/4/47/Busta-Disaster.jpg', genre='Rap', artist='Busta Rhymes', source='http://ear-fruit-bucket.s3.amazonaws.com/9d3c231760c64f7db069c37ae0561697.mp3', user_Id=2)
  cantstop= Song(
    name="Can't Stop Won't Stop", album="Can't Stop Won't Stop", albumImgUrl='https://i0.wp.com/ratingsgamemusic.com/wp-content/uploads/2022/07/artworks-PMmctpLIN7fI-0-t500x500.jpeg', genre='Rap', artist='King Combs', source='http://ear-fruit-bucket.s3.amazonaws.com/ebc1374b3d864115bba07c8682ece4e6.mp3', user_Id=2)
  easyonme= Song(
    name='Easy On Me', album='Easy On Me', albumImgUrl='https://m.media-amazon.com/images/I/71tYun+Y8IL._SS500_.jpg', genre='Pop', artist='Adele', source='http://ear-fruit-bucket.s3.amazonaws.com/93fc6b17f1f0485eb9c22a886a5b257b.mp3', user_Id=2)
  badhabits= Song(
    name='Bad Habits', album='Bad Habits', albumImgUrl='https://upload.wikimedia.org/wikipedia/en/2/2e/Ed_Sheeran_-_Bad_Habits_2.png', genre='Pop', artist='Ed Sheeran', source='http://ear-fruit-bucket.s3.amazonaws.com/1dea785a149d4be1966e5ccf874d480b.mp3', user_Id=2)
  levitating= Song(
    name='Levitating', album='Future Nostalgia', albumImgUrl='https://upload.wikimedia.org/wikipedia/en/f/f5/Dua_Lipa_-_Future_Nostalgia_%28Official_Album_Cover%29.png', genre='Pop', artist='Dua Lipa', source='http://ear-fruit-bucket.s3.amazonaws.com/298149d168ff417fbfbb5d3859141718.mp3', user_Id=2)
  coldheart= Song(
    name='Cold Heart', album='Cold Heart', albumImgUrl='https://upload.wikimedia.org/wikipedia/en/0/08/Elton_John%2C_Dua_Lipa_-_Cold_Heart.png', genre='Pop', artist='Elton John & Dua Lipa', source='http://ear-fruit-bucket.s3.amazonaws.com/c10fcb7bc7e74e85aea20658ddb7b3c5.mp3', user_Id=3)
  wantitthatway= Song(
    name='I Want It That Way', album='Millennium', albumImgUrl='https://static.wikia.nocookie.net/backstreetboys/images/e/e9/Millennium.jpg', genre='Pop', artist='Backstreet Boys', source='http://ear-fruit-bucket.s3.amazonaws.com/5baf26addfdd432ca96b9491917d2ec0.mp3', user_Id=3)
  byebyebye= Song(
    name='Bye Bye Bye', album='No Strings Attached', albumImgUrl='https://upload.wikimedia.org/wikipedia/en/a/a1/Nsync_-_No_Strings_Attached.png', genre='Pop', artist='NSYNC', source='http://ear-fruit-bucket.s3.amazonaws.com/02aeeaadc40945eb807c0840ded45ff8.mp3', user_Id=3)
  africa= Song(
    name='Africa', album='Toto IV', albumImgUrl='https://upload.wikimedia.org/wikipedia/en/b/bd/Toto_Toto_IV.jpg', genre='Pop', artist='Toto', source='http://ear-fruit-bucket.s3.amazonaws.com/7fe5fd5ed68b4375ad8e4352cbe4daed.mp3', user_Id=3)
  lonewolf= Song(
    name='Lone Wolf', album='Lone Wolf', albumImgUrl='https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/36/ac/da/36acda90-0f6a-b74a-e7f9-5cec41f1f86a/5056017302403.png/1200x1200bf-60.jpg', genre='Electronic', artist='Zomboy', source='http://ear-fruit-bucket.s3.amazonaws.com/b88e53b649b145f297f6ec9bb834713b.mp3', user_Id=3)
  bangarang= Song(
    name='Bangarang', album='Bangarang', albumImgUrl='https://upload.wikimedia.org/wikipedia/en/b/ba/BangarangSkrillex.jpg', genre='Electronic', artist='Skrillex feat. Sirah', source='http://ear-fruit-bucket.s3.amazonaws.com/64addad0295f4d0c86d001f7af89b4b4.mp3', user_Id=2)
  puzzlebox= Song(
    name='Puzzle Box', album='Puzzle Box', albumImgUrl='https://i1.sndcdn.com/artworks-gIihxcmH2wPlcEh0-64QwPQ-t500x500.jpg', genre='Electronic', artist='Rezz & Subtronics', source='http://ear-fruit-bucket.s3.amazonaws.com/2aef2463147c49b89b23eae63835543f.mp3', user_Id=4)
  royalblood= Song(
    name='Royal Blood', album='Royal', albumImgUrl='https://i.scdn.co/image/ab67616d00001e02540f2d989d47c7e740d316b3', genre='Electronic', artist='Harris Heller', source='http://ear-fruit-bucket.s3.amazonaws.com/3022e7c3c2c74d4793b14537aa432657.mp3', user_Id=5)
  noplans= Song(
    name='No Plans This Weekend', album='Royal', albumImgUrl='https://i.scdn.co/image/ab67616d00001e02540f2d989d47c7e740d316b3', genre='Electronic', artist='Harris Heller', source='http://ear-fruit-bucket.s3.amazonaws.com/a630c8a3dde54f17a29b07df5123ff6f.mp3', user_Id=5)
  rays= Song(
    name='Rays', album='Stage', albumImgUrl='https://cdns-images.dzcdn.net/images/cover/e459732286d913d3dcbd7d426544b1a8/264x264.jpg', genre='Electronic', artist='Harris Heller', source='http://ear-fruit-bucket.s3.amazonaws.com/95dc839630154c2d8f228a24519db9be.mp3', user_Id=5)
  hadmeatheads= Song(
    name='She Had Me At Heads Carolina', album='Stereotype', albumImgUrl='https://m.media-amazon.com/images/I/61QXibOtDqL._SL1134_.jpg', genre='Country', artist='Cole Swindell', source='http://ear-fruit-bucket.s3.amazonaws.com/0d417fc9eae0414490eb4427e04e9d63.mp3', user_Id=6)
  worldspinsaround= Song(
    name='What My World Spins Around', album='What My World Spins Around', albumImgUrl='https://countrynow.com/wp-content/uploads/2022/05/Jordan-Davis-What-My-World-Spins-Around.jpg', genre='Country', artist='Jordan Davis', source='http://ear-fruit-bucket.s3.amazonaws.com/dcb5b41fe84b4bdfb133090a86abb501.mp3', user_Id=6)
  kindoflove= Song(
    name='The Kind Of Love We Make', album="Growin' Up", albumImgUrl='https://cdn.smehost.net/lukecombscom-usnashvilleprod/wp-content/uploads/2022/04/LC_GU_10X10_RGB-1000x1000.jpg', genre='Country', artist='Luke Combs', source='http://ear-fruit-bucket.s3.amazonaws.com/4808581eda2243eeb85963b4ea5134b8.mp3', user_Id=7)
  fallinlove= Song(
    name='Fall In Love', album='Fall In Love', albumImgUrl='https://upload.wikimedia.org/wikipedia/en/5/58/Bailey_Zimmerman_-_Fall_in_Love.png', genre='Country', artist='Bailey Zimmerman', source='http://ear-fruit-bucket.s3.amazonaws.com/a87b251539764f33855998eae01468d1.mp3', user_Id=7)
  wastedonyou= Song(
    name='Wasted On You', album='Dangerous: The Double Album', albumImgUrl='https://m.media-amazon.com/images/I/71szkhEjZKL._SL1200_.jpg', genre='Country', artist='Morgan Wallen', source='http://ear-fruit-bucket.s3.amazonaws.com/a77a06786c454d6e812d69e564054e55.mp3', user_Id=7)
  waterunderbridge= Song(
    name='Water Under The Bridge', album='Water Under The Bridge', albumImgUrl='https://americansongwriter.com/wp-content/uploads/2022/06/SH_WUTB_Cvr_10x10_HIres_WEB.jpg?resize=1024,1024', genre='Country', artist='Sam Hunt', source='http://ear-fruit-bucket.s3.amazonaws.com/1e671301e4ed41649baf9730d80451a6.mp3', user_Id=7)
  symphfive= Song(
    name='Beethoven: Symphony No.5 In C Minor, Op.67 - 1', album='Beethoven: Symphonies Nos 5, 6 & 9', albumImgUrl='https://i.ebayimg.com/images/g/sdMAAOSwwBdh2fvV/s-l500.jpg', genre='Classical', artist='Herbert von Karajan', source='http://ear-fruit-bucket.s3.amazonaws.com/a89e61462a5645f5b06b46fd45f1da9c.mp3', user_Id=7)
  violinemajor= Song(
    name='Violin Concerto in E Major, RV 269, "La primavera"', album='The Four Seasons :Vivaldi, Tartini, & Leclair', albumImgUrl='https://m.media-amazon.com/images/I/81rw2ViFw8L._SS500_.jpg', genre='Classical', artist='James Ehnes', source='http://ear-fruit-bucket.s3.amazonaws.com/49d6e64b6ebb41d98ef2d355e3a9c71e.mp3', user_Id=8)
  cellosuiteone= Song(
    name='Cello Suite No. 1 in G Major, BWV 1007: I. Prélude', album='Essential Yo-Yo Ma (Deluxe)', albumImgUrl='https://m.media-amazon.com/images/I/71l+9EpdAyL._SY355_.jpg', genre='Classical', artist='Yo-Yo Ma', source='http://ear-fruit-bucket.s3.amazonaws.com/01f1ce420a5d4cc1a003a50dee9a920d.mp3', user_Id=8)
  bagatelle= Song(
    name='Beethoven: Bagatelle No. 25 in A Minor "Für Elise"', album='Beethoven: Bagatelle No. 25 in A Minor "Für Elise"', albumImgUrl='https://m.media-amazon.com/images/I/71W6+QBny4L._SS500_.jpg', genre='Classical', artist='Lang Lang', source='http://ear-fruit-bucket.s3.amazonaws.com/d8af9b05904a4fca987bb644d9701dbb.mp3', user_Id=8)
  byeblackbird= Song(
    name='Bye Bye Blackbird', album="'Round About Midnight", albumImgUrl='https://cdn.smehost.net/milesdaviscom-uslegacyprod/wp-content/uploads/2019/01/190124_roundmidnight.jpg', genre='Jazz', artist='Miles Davis', source='http://ear-fruit-bucket.s3.amazonaws.com/3ddb8454a3f542089d73091da01451a6.mp3', user_Id=1)
  allofyou= Song(
    name='All Of You', album='You Must Believe In Spring', albumImgUrl='https://upload.wikimedia.org/wikipedia/en/5/5a/You_Must_Believe_in_Spring_-_Bill_Evans.jpg', genre='Jazz', artist='Bill Evans', source='http://ear-fruit-bucket.s3.amazonaws.com/236acb428e56412d8bcb98f393e495f9.mp3', user_Id=1)
  soundoflove= Song(
    name='The Sound of Love', album='The Angry Man of Jazz: Charles Mingus', albumImgUrl='https://s3.amazonaws.com/broadtime_photo/418455081638', genre='Jazz', artist='Charles Mingus', source='http://ear-fruit-bucket.s3.amazonaws.com/59f1e3720f3c4cf2abee094ad80fdca8.mp3', user_Id=1)
  whatcalledlove= Song(
    name='What Is This Thing Called Love', album='The Lady Sings', albumImgUrl='https://upload.wikimedia.org/wikipedia/en/thumb/3/34/The_Lady_Sings.jpg/220px-The_Lady_Sings.jpg', genre='Jazz', artist='Billie Holiday', source='http://ear-fruit-bucket.s3.amazonaws.com/22995e05a8574da6901bf056f578e8e4.mp3', user_Id=1)
  misunderstood= Song(
    name="Don't Let Me Be Misunderstood", album='Four Women: The Nina Simone Philips Recordings', albumImgUrl='https://i.discogs.com/OvXKzRUcrSLbSg4SGH1J4_xupyb_OhQV3JLn9aj7ktE/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI0NzYy/NjItMTI4NjE0NTIy/MC5qcGVn.jpeg', genre='Jazz', artist='Nina Simone', source='http://ear-fruit-bucket.s3.amazonaws.com/9d37875997e94ba4bd411510432e03ad.mp3', user_Id=1)
  mojoworking= Song(
    name='Got My Mojo Working', album='The Chess Box', albumImgUrl='https://m.media-amazon.com/images/I/41MYY725BWL.jpg', genre='Blues', artist='Muddy Waters', source='http://ear-fruit-bucket.s3.amazonaws.com/fc792e39353e4a52969c09b06c5cd0c9.mp3', user_Id=1)
  lucille= Song(
    name='Lucille', album='Lucille', albumImgUrl='https://upload.wikimedia.org/wikipedia/en/2/25/Lucille_%28B.B._King_album%29_cover.jpg', genre='Blues', artist='B.B. King', source='http://ear-fruit-bucket.s3.amazonaws.com/a17062c4e4724b8687b20bd9c98523bd.mp3', user_Id=1)
  rockmebaby= Song(
    name='Rock Me Baby (Live)', album='Live At Royal Albert Hall 2011', albumImgUrl='https://images6.fanpop.com/image/photos/40600000/B-B-King-josepinejackson-40601441-615-454.jpg', genre='Blues', artist='B.B. King', source='http://ear-fruit-bucket.s3.amazonaws.com/5d47473d6b394ad38d9af27674a99353.mp3', user_Id=2)
  homechicago= Song(
    name='Sweet Home Chicago', album='The Blues Brothers Soundtrack', albumImgUrl='https://i.discogs.com/vS1guTRnXRxtFGlr4eMqDl1gJTPqmPuAUg-7q363fDY/rs:fit/g:sm/q:90/h:600/w:589/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTUzNzAz/Mi0xNDEyNDU0MTcx/LTM2NjIuanBlZw.jpeg', genre='Blues', artist='The Blues Brothers', source='http://ear-fruit-bucket.s3.amazonaws.com/ba59410eae70474b88669714ae96d267.mp3', user_Id=2)
  sweetangel= Song(
    name='Sweet Little Angel', album='In Europe', albumImgUrl='https://i.discogs.com/WqYOH-x1RyCClTfHskmInPf6EHhuNisogELzboFxFjs/rs:fit/g:sm/q:90/h:448/w:447/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ4NjA2/MjktMTM3ODQxMjg1/NS0xMjczLmpwZWc.jpeg', genre='Blues', artist='Big Mama Thornton', source='http://ear-fruit-bucket.s3.amazonaws.com/7d1ac9ec71c94a6794823d01492f05ce.mp3', user_Id=2)
  sandman= Song(
    name='Enter Sandman', album='	Metallica', albumImgUrl='https://www.decibelmagazine.com/wp-content/uploads/2017/07/metallica_metallica.jpg', genre='Metal', artist='Metallica', source='http://ear-fruit-bucket.s3.amazonaws.com/686e2549f64547d7b0dd7ccf9abf35b0.mp3', user_Id=2)
  standalone= Song(
    name='I Stand Alone', album='Faceless', albumImgUrl='https://upload.wikimedia.org/wikipedia/en/d/d2/Godsmack_faceless.jpg', genre='Metal', artist='Godsmack', source='http://ear-fruit-bucket.s3.amazonaws.com/08e83258ff5f4feba734547b63084bb4.mp3', user_Id=3)
  sickness= Song(
    name='Down with the Sickness', album='The Sickness', albumImgUrl='https://static.wikia.nocookie.net/disturbed/images/3/39/The_Sickness_Cover.jpg', genre='Metal', artist='Disturbed', source='http://ear-fruit-bucket.s3.amazonaws.com/823a17c68d744f7d9e7bfc4d57bb4f5a.mp3', user_Id=3)
  crowley= Song(
    name='Mr. Crowley', album='Blizzard Of Ozz', albumImgUrl='https://upload.wikimedia.org/wikipedia/en/thumb/2/23/Blizzard_of_ozz.jpg/220px-Blizzard_of_ozz.jpg', genre='Metal', artist='Ozzy Osbourne', source='http://ear-fruit-bucket.s3.amazonaws.com/eebd3ce41dd94f1999c29a4df50dfcaf.mp3', user_Id=3)
  hotforteacher= Song(
    name='Hot for Teacher', album='1984', albumImgUrl='https://upload.wikimedia.org/wikipedia/en/5/5f/Van_Halen_-_1984.jpg', genre='Metal', artist='Van Halen', source='http://ear-fruit-bucket.s3.amazonaws.com/9df898260b5b47018c46605527f132bd.mp3', user_Id=2)






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
  db.session.add(godzilla)
  db.session.add(yeah)
  db.session.add(msjackson)
  db.session.add(workit)
  db.session.add(jiggy)
  db.session.add(livinitup)
  db.session.add(getlow)
  db.session.add(handswhere)
  db.session.add(cantstop)
  db.session.add(easyonme)
  db.session.add(badhabits)
  db.session.add(levitating)
  db.session.add(coldheart)
  db.session.add(wantitthatway)
  db.session.add(byebyebye)
  db.session.add(africa)
  db.session.add(lonewolf)
  db.session.add(bangarang)
  db.session.add(puzzlebox)
  db.session.add(royalblood)
  db.session.add(noplans)
  db.session.add(rays)
  db.session.add(hadmeatheads)
  db.session.add(worldspinsaround)
  db.session.add(kindoflove)
  db.session.add(fallinlove)
  db.session.add(wastedonyou)
  db.session.add(waterunderbridge)
  db.session.add(symphfive)
  db.session.add(violinemajor)
  db.session.add(cellosuiteone)
  db.session.add(bagatelle)
  db.session.add(byeblackbird)
  db.session.add(allofyou)
  db.session.add(soundoflove)
  db.session.add(whatcalledlove)
  db.session.add(misunderstood)
  db.session.add(mojoworking)
  db.session.add(lucille)
  db.session.add(rockmebaby)
  db.session.add(homechicago)
  db.session.add(sweetangel)
  db.session.add(sandman)
  db.session.add(standalone)
  db.session.add(sickness)
  db.session.add(crowley)
  db.session.add(hotforteacher)

  db.session.commit()


def undo_songs():
    db.session.execute('TRUNCATE songs RESTART IDENTITY CASCADE;')
    db.session.commit()
