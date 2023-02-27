const NotesModel = require('./notesModel');
const NotesView = require('./notesview');

const model = new NotesModel();

model.addNote('Take out the dishes');
const view = new NotesView(model);
view.displayNotes();
