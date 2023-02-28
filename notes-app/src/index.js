const NotesModel = require('./notesModel');
const NotesView = require('./notesview');
const Client = require('./Client');

const model = new NotesModel();
const client = new Client();

model.addNote('Take out the dishes');
model.addNote('Drink water');
const view = new NotesView(model, client);
view.displayNotes();
