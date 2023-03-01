class Client{
  constructor(){

  }
  // function takes a callback as an argument
  async loadNotes(callback){
    //calls the notes api
    const apiResponse = await fetch('http://localhost:3000/notes');
    //stores the response.json in data
    const data = await apiResponse.json();
    //the callback argument is then ran with data as an argument
    callback(data); 
  }

}

module.exports = Client;