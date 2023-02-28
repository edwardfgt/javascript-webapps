class Client{
  constructor(){

  }
  async loadNotes(callback){
    const apiResponse = await fetch('http://localhost:3000/notes');
    const data = await apiResponse.json();
    callback(data); 
  }

}

module.exports = Client;