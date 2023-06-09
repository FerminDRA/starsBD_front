import firebase from "../firebase";

const db = firebase.collection("/stars");

class StarsDataService {
  getAll() {
    return db;
  }
  
  create(stars) {
    return db.add(stars);
  }

  update(id, value) {
    return db.doc(id).update(value);
  }

  delete(id) {
    return db.doc(id).delete();
  }
}

const starsDataService = new StarsDataService();

export default starsDataService;