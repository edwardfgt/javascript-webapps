
/**
 * @jest-environment jsdom
 */

 const fs = require('fs');
 const NotesModel = require('../src/notesModel');
 const NotesView = require('../src/notesView'); 
 const Client = require('../src/client');
 
 describe('Notes view', () => {
    let client, view, model, inputEl, buttonEl;
    
    beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    inputEl = document.querySelector('#message-input');
    buttonEl = document.querySelector('#add-note-button');
    model = new NotesModel();
    client =  new Client();
    view = new NotesView(model, client);
  })

   it('displays two notes', () => {
    model.addNote('Take out the dishes');
    model.addNote('Eat dinner');
    view.displayNotes();
    expect(document.querySelectorAll('div#note').length).toEqual(2);
   });

   it('adds new note and displays on screen when user inputs', () => {
      inputEl.value = "Milk the cows";
      buttonEl.click();
      // expect(model.getNotes()).toEqual(['Milk the cows']);
      expect(document.querySelector('div#note').innerHTML).toEqual('Milk the cows');
   })

   it('returns the correct notes when displayNotes is called twice', () => {
    const functionSpy = jest.spyOn(view, 'displayNotes');
    inputEl.value = "Milk the cows";
    buttonEl.click();
    inputEl.value = "Milk the cows again";
    buttonEl.click();
    expect(functionSpy).toHaveBeenCalledTimes(2);
    expect(document.querySelectorAll('div#note').length).toEqual(2);
   })

  // it('displays notes from the API', () => {
  //   document.body.innerHTML = fs.readFileSync('./index.html');
    
  // })
 });
