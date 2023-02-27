class View {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');

    //console.log(this.mainContainerEl);
  }

  addParagraph(){
    let newParagraph = document.createElement('p')
    newParagraph.append('This paragraph has been dynamically added by JavaScript!');
    this.mainContainerEl.append(newParagraph);
  }
}

module.exports = View;