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
  readonly city: string = '';
  private _password: string = '';
  constructor(
    public _email: string,
    public _firstName: string,
    public _lastName: string
  ) {}
  get password(): string {
    return this._password;
  }
  set password(value: string) { 
    this._password = value;
  }
  private delete() {
    console.log('Deleted');
  }
}
const bikraj = new User('Bikraj', 'Shrestha', 'Admin');
