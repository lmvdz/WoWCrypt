const keyAlreadyExists = (db, data) => {
  return db.includes(data)
}
const addToDb = (db, data) => {
  return db.push(data)
}
const getFromDb = (db, data) => {
  return db[db.indexOf(data)]
}
let db = {
  keyAlreadyExists,
  addToDb,
  getFromDb
}
export default db
