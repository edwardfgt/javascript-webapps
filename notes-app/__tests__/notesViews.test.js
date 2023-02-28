
/**
 * @jest-environment jsdom
 */

 const fs = require('fs');
 const NotesModel = require('../src/notesModel');
 const NotesView = require('../src/notesView'); 
 
 describe('Notes view', () => {
   it('displays two notes', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const model = new NotesModel();
    const view = new NotesView(model);
    model.addNote('Take out the dishes');
    model.addNote('Eat dinner');
    view.displayNotes();
    expect(document.querySelectorAll('div#note').length).toEqual(2);
   });

   it('adds new note and displays on screen when user inputs', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
      const model = new NotesModel();
      const view = new NotesView(model);
      const inputEl = document.querySelector('#message-input');
      inputEl.value = "Milk the cows";
      const buttonEl = document.querySelector('#add-note-button');
      buttonEl.click();
      expect(model.getNotes()).toEqual(['Milk the cows']);
      expect(document.querySelector('div#note').innerHTML).toEqual('Milk the cows');
   })
 });
