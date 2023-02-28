const Client = require('../src/client');

require('jest-fetch-mock').enableMocks()

describe('Client class', () => {
  it('calls fetch and loads data', (done) => {
    const client = new Client();

    fetch.mockResponseOnce(JSON.stringify(['This note is coming from the server']));

    const callback = (returnedData) => {
      expect(returnedData.length).toBe(1);
      expect(returnedData[0]).toEqual('This note is coming from the server');
    }

    client.loadNotes(callback)
    done();
  });


});