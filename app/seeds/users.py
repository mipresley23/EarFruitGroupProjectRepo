from app.models import db, User



# Adds a demo user, you can add other users here if you want
def seed_users():
    earfruit = User(
        username='EarFruit', email='earfruitdefaultuser@testing.test', password='earfruitdefaultuser', photo_url='https://i.pinimg.com/originals/e6/21/65/e6216552d21b5e88ce695be51fe9811d.jpg')
    demo = User(
        username='Demo', email='demo2@aa.io', password='password', photo_url='https://hr.youngminds.com.np/assets/img/avatar5.png')
    marnie = User(
        username='Marnie', email='marnie@aa.io', password='password', photo_url='https://sportshub.cbsistatic.com/i/2022/02/19/fa8f4a86-2e0e-474c-a0c8-a6269f509725/pokemon-journeys-marnie-galar-anime.jpg')
    bobbie = User(
        username='Bobbie', email='bobbie@aa.io', password='password', photo_url='https://i.pinimg.com/736x/a2/6b/00/a26b00f442747a4f1682feb1cedecb3f.jpg')
    jesse = User(
        username='Jesse', email='jesse@aa.io', password='password', photo_url='https://assets.teenvogue.com/photos/5b328c92c7c8447477853577/16:9/w_2560%2Cc_limit/lede.jpg')
    anthony = User(
        username='Anthony', email='anthony@aa.io', password='password', photo_url='https://www.dccomics.com/sites/default/files/imce/2018/08-AUG/Cyborg_v01_r01_5b6c7d7bef1616.90753062.jpg')
    michael = User(
        username='Aichael', email='michael@aa.io', password='password', photo_url='https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Michelangelo_%28Teenage_Mutant_Ninja_Turtles%29.jpg/250px-Michelangelo_%28Teenage_Mutant_Ninja_Turtles%29.jpg')
    krishna = User(
        username='Krishna', email='krishna@aa.io', password='password', photo_url='https://www.clipartmax.com/png/small/246-2461790_musical-movies-cliparts-cartoon-characters-playing-guitar.png')

    db.session.add(earfruit)
    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(jesse)
    db.session.add(anthony)
    db.session.add(michael)
    db.session.add(krishna)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
