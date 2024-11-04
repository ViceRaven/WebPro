const data = require("../data/users.json");

const express = require("express");
const app = express.Router();

function getUsers() {
  return data.items;
}

function getUser(id) {
  return data.items.find((user) => user.id == id);
}

function updateUser(user) {
  const index = data.items.findIndex((x) => x.id == user.id);
  data.items[index] = user;
  return user;
}
