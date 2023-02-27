const NotesModel = require('../src/notesModel');

describe('notesModel', () => {
  it('returns an empty array of notes', () => {
    const model = new NotesModel();
    expect(model.getNotes()).toEqual([]);
  })

  it('returns array of notes which have been added', () => {
    const model = new NotesModel();
    model.addNote('Buy milk');
    model.addNote('Go to the gym');
    expect(model.getNotes()).toEqual(['Buy milk', 'Go to the gym']);
  })

  it('returns empty array of notes when reset is called', () => {
    const model = new NotesModel();
    model.addNote('Buy milk');
    model.addNote('Go to the gym');
    model.reset();
    expect(model.getNotes()).toEqual([]);
  })
})
