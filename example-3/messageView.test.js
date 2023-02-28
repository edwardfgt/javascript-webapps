/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const MessageView = require('./messageView');

describe('MessageView', () => {
  it('clicks the button', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();
    const inputEl = document.querySelector('#message-input');
    inputEl.value = "User inputted this!";
    const buttonEl = document.querySelector('#show-message-button');
    buttonEl.click();
    expect(document.querySelector('#message').innerText).toEqual("User inputted this!");
  });

  it('hides the content', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const view = new MessageView();
    const buttonEl = document.querySelector('#show-message-button');
    buttonEl.click();
    const hideButton = document.querySelector('#hide-message-button');
    hideButton.click();
    expect(document.querySelector('#message')).toBeNull();
  })
});
