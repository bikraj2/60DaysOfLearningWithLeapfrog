const scoer: Array<number> = [];
const names: Array<string> = [];
function indentitiy<T>(arg: T): T {
  return arg;
}
// instead of creating many funciton we can use generic
// works for any type as long as we pass the type while calling the function

interface Bottle {
  brand: String;
  type: number;
}

const val = indentitiy<Bottle>({ brand: 'Coca Cola', type: 1 });
console.log(val);

const getMoreSearchProducts = <T>(products: T[]): T => {
  const myIndex = 3;
  return products[myIndex];
};
interface Product {
  id: number;
  name: string;
  price: number;
  sales: number[];
}

function anotherFunction<T, U extends Product>() {}

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  type: string;
  subjest: string;
}

class Sellable<T> {
    public cart:T[] =[];
    addToCart(item:T):void{
        
    }
}