class NotesModel{
  constructor(){
    this.notes = []
  }

  getNotes(){
    console.log('getNotes:', this.notes)
    return this.notes;
  }

  addNote(note){
    this.notes.push(note);
  }

  reset(){
    this.notes = [];
  }

  setNotes(notes){
    this.notes = notes;
  }
}

module.exports = NotesModel;