function addTwo(num: number): number {
  return num + 2;
}
addTwo(4);
function getUpper(val: string) {
  return val.toUpperCase();
}
getUpper('4');

function signUpUser(name: string, email: string, verfied: boolean) {
  return name + email;
}
signUpUser('asdf', 'asdf', true);

let loginUser = (name: string, email: string, isVlaid: boolean = false) => {};
loginUser('asdf', 'asdfa');
export {};

// function getValue(myVal:number):boolean{
//     if(myVal>5){
//         return true
//     }
//     return "200 ok"
// }
const getHello = (val: string): string => {
  return '';
};
const heros = ['thor', 'spiderman', 'ironman'];

heros.map((hero:string):string => {
  return `hero is ${hero}`;
});

function consoleError(errmsg:string):void {
    console.log(errmsg);
}
function handleError(errmsg: string): never {
    throw new Error(errmsg)
}

handleError("Some Random Erro")
