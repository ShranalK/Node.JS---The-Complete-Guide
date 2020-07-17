const mongodb = require("mongodb");
const getDb = require("../utils/database").getDb;

const ObjectId = mongodb.ObjectId;

class User {
  constructor(username, email, id) {
    this.name = username;
    this.email = email;
    this._id = id ? new mongodb.ObjectId(id) : null;
  }

  save() {
    const db = getDb();
    return db.collections("users").insertOne(this);

    // let dbOp;

    // if (this._id) {
    //   dbOp = db
    //     .collections("users")
    //     .updateOne({ _id: this._id }, { $set: this });
    // } else {
    //   dbOp = db.collections("users").insertOne(this);
    // }

    // return dbOp
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }

  static findById(userId) {
    const db = getDb();
    return db.collections("users").findOne({ _id: ObjectId(userId) });
  }
}

module.exports = User;
