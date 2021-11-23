var express = require('express');
var router = express.Router();

var users = require('./../controllers/usersController');

/** Functions from users controller */
var getUsers = users.getUsers;
var getUser = users.getUser;
var addUser = users.addUser;
var updateUser = users.updateUser;
var deleteUser = users.deleteUser;

/** GET users list */
router.get('/', function (req, res) {
  getUsers()
    .then((result) => {
      res.json({ "users": result })
    })
    .catch((error) => {
      res.send(error)
    })
})

/** GET one user by ID */
router.get('/:docID', function (req, res) {
  getUser(req.params.docID)
  .then((result) => {
    res.json({ "user": result })
  })
  .catch((error) => {
    res.send(error)
  })
})

/** POST new user */
router.post('/', function (req, res) {
  addUser(req.body)
  .then(() => {
    res.send("El usuario ha sido creado con éxito!")
  })
  .catch((error) => {
    res.send(error)
  })
})

/** UPDATE user */
router.put('/:docID', function (req, res) {
  updateUser(req.params.docID, req.body)
  .then(() => {
    res.send("El usuario ha sido actualizado con éxito!")
  })
  .catch((error) => {
    res.send(error)
  })
})

/** DELETE user */
router.delete('/:docID', function (req, res) {
  deleteUser(req.params.docID)
  .then(() => {
    res.send("El usuario ha sido eliminado con éxito")
  })
  .catch((error) => {
    res.send(error)
  })
})

module.exports = router;
