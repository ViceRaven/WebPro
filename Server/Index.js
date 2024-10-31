/*
B"H
*/
const express = require("express");
const app =
  express(); /* creates an insance of the express pipeline (everytime a message
comes in to our port*/

const PORT = 3000; /*this is the port that the server is listening to*/

app.get("/", (req, res) => {
  /* the slash means get without any path*/
  res.send(
    "Hello World"
  ); /*this get function is registering a pipeline in the action 
                                of the get request (sends a string to the client)*/
});
/*the second parameter is the object of all the methods we need to create a response*/

app.listen(PORT, () => {
  console.log(
    "Server is running at http://localhost:" + PORT
  ); /* if you have  anumber that will affect your code always set it as a constant */
}); /*this is the port that the server is listening to*/
