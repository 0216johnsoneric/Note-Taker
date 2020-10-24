# Note-Taker

This note taker application can be used to write, save, and delete notes. The application uses npm express node package and db.json backend to save and retrieve note data from a JSON file server PORT running on localhost:3000.

## Routes
### HTML Routes
1) GET `/notes` - Should return the `notes.html` file.
2) GET `*` - Should return the `index.html` file
db.json file used to store and retrieve notes using the `fs` module.

### API Routes
1) GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
2) POST `/api/notes` - Should receive a new note to save, add to db.json file, and return the new note to the client.
3) DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete and delete a note from all notes.

## Deploying the App

1) Clone lab: git clone git@github.com:0216johnsoneric/Weather-Dashboard.git 
2) Run in Browser w/ localhost or VS code browser extension
3) Run node server.js
4) Open localhost:3000 in Web Browser
Or
1) Visit Deployed app via Heroku https://notes-taker-apps.herokuapp.com/

<img src="public/assets/css/Screen Shot 2020-10-24 at 11.09.37 AM.png"/>