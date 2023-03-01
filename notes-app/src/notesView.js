class NotesView{
  constructor(model, client){
    this.model = model;
    this.client = client;
    this.mainContainerEl = document.querySelector('#main-container');


    this.buttonEl = document.querySelector('#add-note-button');
    this.buttonEl.addEventListener('click', () => {
       this.addNoteToServer();
    });
  }

  addNoteToModel(){
    this.model.addNote(document.querySelector('#message-input').value);
    this.displayNotes();
  }

  displayNotes(){
    let allNotesOnScreen = document.querySelectorAll('div[id="note"]')
    allNotesOnScreen.forEach((div) => {
      div.remove();
    })
    //allNotesOnScreen.innerHTML.remove();

    let currentNotes = this.model.getNotes();
    currentNotes.forEach(element => {
      let newDiv = document.createElement('div');
      newDiv.setAttribute("id", "note");
      newDiv.innerHTML = element;
      this.mainContainerEl.append(newDiv);
    });
    document.querySelector('#message-input').value = '';

  }

  async displayNotesFromApi(){
    //calls loadnotes from client.js
    await this.client.loadNotes((data) => {
    //data is passed into the function
    this.model.setNotes(data);
    this.displayNotes();
  });
  }

  async addNoteToServer(){
    const input = document.querySelector('#message-input').value
    
    await this.client.createNote(input, (input) => {
      this.model.setNotes(input);
      input = '';
      this.displayNotes();
    });
  };
}



module.exports = NotesView;