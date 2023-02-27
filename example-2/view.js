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

  clearParagraphs(){
    let allParagraphs = document.querySelectorAll('p');
    allParagraphs.forEach(element => {
      element.remove('p');
    });
  }
}

module.exports = View;