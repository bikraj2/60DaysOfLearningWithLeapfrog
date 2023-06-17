function logValue(x:Date|String) {
    if(x instanceof Date){
        console.log(x.toUTCString());
    }else{
        console.log(x.toUpperCase());
    }
}

//using Type Predicates in typescript will help us to narrow down the type of the variable


type Fish = { swim: () => void };
type Bird = { fly: () => void };
function move(animal: Fish | Bird):animal is Fish {
    return (animal as Fish).swim !==undefined
}

function getFood(animal:Fish|Bird){
    if(move(animal)){
        
       return "fish food"
    }else{
        animal
        return ""
    }
}