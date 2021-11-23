var database = require('./../database/firestore');
var db = database.db;

var users = db.collection('users');

/** CRUD */
/** Función de listar los usuarios */
const getUsers = async () => {
    const snapshot = await users.get();
    var data = [];
    snapshot.forEach(doc => {
        data.push(doc.id, doc.data());
    })
    return data;
}

/** Función para traer a un solo usuario */
const getUser = async (docID) => {
    const data = [];
    const user = await users.doc(docID).get();
    data.push(user.id, user.data());
    return data;
}

/** Función para añadir un nuevo usuario */
const addUser = async (body) => {
    return await users.add({
        "name": body.name,
        "age": body.age,
        "city": body.city
    });
}

/** Función para actualizar un usuario en específico */
const updateUser = async (docID, body) => {
    const docRef = users.doc(docID);
    return await docRef.update({
        "name": body.name,
        "age": body.age,
        "city": body.city
    })
}

/** Función para eliminar a un usuario */
const deleteUser = async (docID) => {
    const docRef = users.doc(docID);
    return await docRef.delete();
}

module.exports = {
    getUsers,
    getUser,
    addUser,
    updateUser,
    deleteUser
}