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
    //return data;
    return callback(data); 
  }

  async createNote(note, callback){
    //call api post method with note
    try {
      const request = { content: note };
      const apiResponse = await fetch('http://localhost:3000/notes', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    });

      const data = await apiResponse.json();
      return callback(data);
  } catch (error) {
      console.log("Error is: " + error);
  } 
}





}

module.exports = Client;