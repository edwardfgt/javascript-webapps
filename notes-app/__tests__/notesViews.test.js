
/**
 * @jest-environment jsdom
 */

 const fs = require('fs');
 const NotesModel = require('../src/notesModel');
 const NotesView = require('../src/notesView'); 
 const Client = require('../src/client');

 jest.mock("../src/client");

 require('jest-fetch-mock').enableMocks()

 
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

   xit('adds new note and displays on screen when user inputs', () => {
      inputEl.value = "Milk the cows";
      buttonEl.click();
      expect(document.querySelector('div#note').innerHTML).toContain('Milk the cows');
   })

   xit('returns the correct notes when displayNotes is called twice', () => {
    const functionSpy = jest.spyOn(view, 'displayNotes');
    inputEl.value = "Milk the cows";
    buttonEl.click();
    inputEl.value = "Milk the cows again";
    buttonEl.click();
    expect(functionSpy).toHaveBeenCalledTimes(2);
    expect(document.querySelectorAll('div#note').length).toEqual(2);
   })

  it('displays notes from the API', (done) => {

    const mockClient = { loadNotes: (callback) => {
      callback(['This note is coming from the server']) 
    } }

    view = new NotesView(model, mockClient);

    view.displayNotesFromApi();

    expect(document.querySelectorAll('div#note').length).toEqual(1);
    expect(document.querySelector('div#note').innerHTML).toEqual('This note is coming from the server');
    done();
  })

  it('adds a new note through an API call', (done) => {
    const mockClient = new Client();
    mockClient.createNote.mockImplementation((note, callback) => 
      callback([note])
    );

    view = new NotesView(model, mockClient);
    inputEl.value = "testing API POST";
    buttonEl.click();
    const pageContent = document.querySelector('div#note');
    console.log(pageContent)
    expect(document.querySelector('div#note').innerHTML).toEqual('testing API POST');
    done();
  })
 });
