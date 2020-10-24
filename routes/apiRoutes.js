const router = require("express").Router();
const DbFunction = require("../db/dbFunctions");

const dbFunc = new DbFunction();

//GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
router.get("/notes", async (req, res) => {
  try {
    const notes = await dbFunc.getNotes();
    res.json(notes);
  } catch (err) {
    throw err;
  }
});

//POST `/api/notes` - Should receive a new note to save, add to db.json file, and return the new note to the client.
router.post("/notes", async (req, res) => {
  try {
    const newNote = req.body;
    await dbFunc.addNote(newNote);
    res.json(newNote);
  } catch (err) {
    throw err;
  }
});


//DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete and delete a note from all notes.
router.delete("/notes/:id", (req, res) => {
  res.json(dbFunc.deleteNote(req.params.id));
});

module.exports = router;