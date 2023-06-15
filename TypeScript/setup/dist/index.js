"use strict";
// class User {
//     email:string
//     firstName:string
//     lastName:string
//     readonly city:string =""
//     private _password:string =""
//     constructor( _email:string, _firstName:string, _lastName:string) {
//         this.email=_email;
//         this.firstName=_firstName;
//         this.lastName = _lastName;
//     }
// }
// const bikraj = new User("Bikraj","Shrestha","Admin");
class User {
    constructor(_email, _firstName, _lastName) {
        this._email = _email;
        this._firstName = _firstName;
        this._lastName = _lastName;
        this.city = '';
        this._password = '';
    }
    get password() {
        return this._password;
    }
    set password(value) {
        this._password = value;
    }
    delete() {
        console.log('Deleted');
    }
}
const bikraj = new User('Bikraj', 'Shrestha', 'Admin');
