function getUser(id) {
  return { id: id, name: "test" };
}

function deleteUser(id) {
  return { deleted: id };
}

module.exports = { getUser, deleteUser };
