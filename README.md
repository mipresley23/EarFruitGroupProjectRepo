# EarFruit


## Index
[Feature List Documentation](https://github.com/mipresley23/EarFruitGroupProjectRepo/wiki/MVP-Feature-List)

[Database Schema](https://github.com/mipresley23/EarFruitGroupProjectRepo/wiki/DB_Schema)

[Frontend Routes Documentation](https://github.com/mipresley23/EarFruitGroupProjectRepo/wiki/Frontend-Routes)

[API Routes Documentation](https://github.com/mipresley23/EarFruitGroupProjectRepo/wiki/API-Routes)

[Redux Store Tree Document](https://github.com/mipresley23/EarFruitGroupProjectRepo/wiki/State-Shape)

[User Stories](https://github.com/mipresley23/EarFruitGroupProjectRepo/wiki/User-Stories)

## Live site hosted by Heroku

[EarFruit](https://earfruit.herokuapp.com/)

## Link to project Repo

[EarFruit Repo](https://github.com/mipresley23/EarFruitGroupProjectRepo)

## Technologies Used

> [<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" height=50px width=50px/>](https://reactjs.org/)   [<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" height=50px width=50px />](https://redux.js.org/)   [
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg" height=50px width=50px />](https://flask.palletsprojects.com/en/2.1.x/)   [<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original-wordmark.svg" height=50px width=50px />](https://docs.sqlalchemy.org/en/14/)   [<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" height=50px width=50px />](https://docs.python.org/3/)   [<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" height=50px width=50px />](https://developer.mozilla.org/en-US/docs/Web/JavaScript)   [Alembic](https://alembic.sqlalchemy.org/en/latest/)   [WTForms](https://wtforms.readthedocs.io/en/3.0.x/)


## Description
EarFruit is a Spotify clone, where users are allowed to browse songs by song title or have them grouped by artist or album title. Users who are signed up and logged in may add songs. They also may edit information about or delete songs that they've uploaded. Any users may listen to a song or any previously created playlist of songs, but users who are signed in may create their own playlists. The signed in user may also edit their own playlists. Signed in users may also include a picture upon signup that becomes their profile picture. Each user's profile includes information about the user, any playlists that user has created, as well as any songs that user has uploaded. 

## Getting Started
> * Begin by cloning this [repo.](https://github.com/mipresley23/EarFruitGroupProjectRepo)
> * Travel to the project root directory and install dependencies by running the following commands.
> > * pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
> * Create a .env file based on the example with your environment information
> * Create your database with a user and password and ensure they match your .env file
> * Enter your pipenv shell then create, migrate, and seed your database by running the following commands:
> > * pipenv shell
> > * flask db migrate
> > * flask db upgrade
> > * flask seed all
> Next you may launch your backend server by running the command
> > * flask run
> * Next cd into the react-app directory and run the following commands to launch the front end server:
> > * npm install
> > * npm start

## Wireframe guides

### Splash Page
![image](https://user-images.githubusercontent.com/59783664/180310857-d91b8645-c7ed-4dff-9887-dd26cc2117fd.png)

### Search/Browse Page
![image](https://user-images.githubusercontent.com/59783664/180311035-670c723f-c5ed-4d85-8737-f3a8b1f99894.png)

### Playlist/Song/Profile Pages
![image](https://user-images.githubusercontent.com/59783664/182166874-49fce589-f12d-41eb-bac3-f6ea078c7b8c.png)

### Signup Page
![Screen Shot 2022-07-21 at 4 05 33 PM](https://user-images.githubusercontent.com/93172512/180329561-cf9e320a-75d9-4ae5-9c70-96807139641b.png)

### Sign in 
<img width="608" alt="Screen Shot 2022-07-31 at 5 00 50 PM" src="https://user-images.githubusercontent.com/93172512/182050907-48042e15-8c27-4d7a-a08f-69cc52a94a03.png">

## Features
### Signup
![image](https://user-images.githubusercontent.com/59783664/182046326-f6c99a35-4a43-4fdf-a6eb-9b755c58e03c.png)

### Splash/Root Page showing Demo User
![image](https://user-images.githubusercontent.com/59783664/182046430-b0d20a47-9092-42dc-a3c2-7351b02877cc.png)

### Profile Page
![image](https://user-images.githubusercontent.com/59783664/182046464-1622eb66-ad3c-44fa-82d0-72b808fcc069.png)

### Add Song Form in front of All Songs Page
![image](https://user-images.githubusercontent.com/59783664/182046524-4a7cab0b-6cb7-4755-95cb-fd980f4a00b9.png)

### Create/Edit Playlist
![image](https://user-images.githubusercontent.com/59783664/182046587-ea37b36d-7006-4a35-8787-75222ec3c116.png)

### Music Player playing song
![image](https://user-images.githubusercontent.com/59783664/182046613-489ddbc7-6977-422d-a0bf-0633344d1086.png)


## Contributors
### [Jesse Njoroge](https://github.com/jnjoroge13)
### [Michael Presley](https://github.com/mipresley23)
### [Anthony Taylor](https://github.com/antt3)
### [Krishna Mulloth](https://github.com/kmulloth)
