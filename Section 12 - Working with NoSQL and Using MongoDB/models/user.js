const mongodb = require("mongodb");
const getDb = require("../utils/database").getDb;

const ObjectId = mongodb.ObjectId;

class User {
  constructor(username, email, id, cart) {
    this.name = username;
    this.email = email;
    this._id = id ? new mongodb.ObjectId(id) : null;
    this.cart = cart;
  }

  save() {
    const db = getDb();
    return db.collections("users").insertOne(this);
  }

  addToCart(product) {
    // const cartProduct = this.cart.items.findIndex(cp => {
    //   return cp._id === product._id;
    // });
    const updatedCart = { items: [{ ...product, quantity: 1 }] };
    const db = getDb();
    return db
      .collection("users")
      .updateOne(
        { _id: new ObjectId(this._id) },
        { $set: { cart: updatedCart } }
      );
  }

  static findById(userId) {
    const db = getDb();
    return db
      .collection("users")
      .findOne({ _id: ObjectId(userId) })
      .then((user) => {
        console.log(user);
        return user;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = User;
