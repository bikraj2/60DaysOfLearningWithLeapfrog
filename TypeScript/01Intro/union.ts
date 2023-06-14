// let score: number | string = 23;
// score = '23';
// score = 23;

// type User = {
//   name: string;
//   id: number;
// };

// type Admin = {
//   username: string;
//   id: number;
// };

// // can use | or &
// // make sure to use type instead of interface

// let newPerson: User | Admin;
// newPerson = { name: 'Bikraj', id: 1 };
// newPerson = { username: 'Bikraj', id: 1 };

// function getDbId(id: number | string) {
//   if (typeof id === 'string') {
//     id.toUpperCase();
//   } else {
//     id.toPrecision();
//   }
//   console.log(`DB id is ${id}`);
// }

// getDbId(123);
// getDbId('123');

// const data: number[] | string[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, '11']; // not allowed either string or number in the array
// // use this syntax instead
// const values: (number | string | boolean) [] =[1,"2",true];
// let pi:1.34=1.34;

// let position: "Manager" | "Developer" | "Designer" | "Admin" = "Manager";
