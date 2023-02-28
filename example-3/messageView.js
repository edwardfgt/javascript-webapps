class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');

    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
    });

    this.hideButton = document.querySelector('#hide-message-button');

    this.hideButton.addEventListener('click', () => {
      this.hideMessage();
    })
  }

  displayMessage() {
    console.log('You clicked the displayMessage button');
    let newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'message')
    newDiv.innerHTML = 'This message displayed by JavaScript'
    document.querySelector('#main-container').append(newDiv);
  }

  hideMessage(){
    console.log('You clicked the hideMessage button');
    const messageDiv = document.querySelector('#message');
    messageDiv.remove();
  }
}

module.exports = MessageView;

