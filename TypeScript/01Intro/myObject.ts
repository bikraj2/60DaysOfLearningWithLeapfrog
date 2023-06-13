// const User =  {
//     name:"Bikraj",
//     email:"bikrajshrestha2@gmail.com",
//     isActive:"true",
// }
// function createuser({name:string,isPaid:boolean}) {

// }
// let newUser = {name:"Bikraj",isPaid:true,email:"bikraj"}
// createuser(newUser)


// function createCourse ():{name:string,price:number,author:string}{
//     return {name:"React",price:200,author:"Bikraj"}
// }

// type User =  {
//     name:string,
//     email:string,
//     isActive:boolean,
//     age:number,
//     address:string,
// }
// function createUser (user:User) :User{

//     return user
// }
// console.log(createUser({name:"Bikraj",email:"",isActive:true,age:23,address:""}))



// // type User = {
// //     readonly _id: string,
// //     name: string,
// //     email: string,
// //     isActive: boolean,
// //     creditCard?: number,
// }
// let myUser: User = {
//     _id: "123",
//     name: "Bikraj",
//     email: "",
//     isActive: true,
// }


type cardNumber = { 
    cardNumber:number,
}
type cardDate=  {
    cardDate:string,
}

type cardDetails =cardNumber & cardDate & {cvv:number}