const models = require('../models/users');

const getUser = async (email, password) => models.getUser(email, password);

const getUserByEmail = async (email) => models.getUserByEmail(email);

const addUser = async (name, email, password, role) => models.addUser(name, email, password, role);

const updateUser = async (name, email) => models.updateUser(name, email);

module.exports = {
  getUser,
  getUserByEmail,
  addUser,
  updateUser,
};
