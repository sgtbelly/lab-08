'use strict';

import storage from '../lib/storage/memory.js';
// import storage from 'filestorage';
// import storage from 'mongostuff';




class Users {

  constructor(_id, firstname, lastname, email, role) {
    this._id = _id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.role = role;
  }

  email(isValid){
    // I found a REGEX to validate emails
    // what this means ts that it is looking for all of these characters to see if they are in the email address plus it also has to have an @ symbol if it has these characters in all sections then it is a valid email address.
    function validateEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
    //above code see source in README.md

    return 'Valid Email';
  }

  static findOne(id) {
    let query = { _id:id };
    return this.find(query);
  }

  static find(query) {
    return storage.find(query);
  }

  static save(data) {
    return storage.save(data);
  }

  static delete(id) {
    return storage.delete(id);
  }

  static put(id, data) {
    return storage.delete(id);
  }

  static patch(id, data) {
    data._id = id;
    return storage.save(data);
  }
}

export default Users;