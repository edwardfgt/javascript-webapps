class NotesView{
  constructor(model){
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');

  }

  displayNotes(){
    let currentNotes = this.model.getNotes();
    currentNotes.forEach(element => {
      let newDiv = document.createElement('div');
      newDiv.setAttribute("id", "note");
      newDiv.innerHTML = element;
      this.mainContainerEl.append(newDiv);
    });
  }
}


module.exports = NotesView;