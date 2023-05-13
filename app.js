/*
Galerici Feyyaz, büyük bir oto galerisine sahiptir ve online bir sistem üzerinden arabalarini satisa sunmaktadir. 
Online sistemin ise arama ve 
filtreleme özellikleri daha olusturulmadigi icin Feyyaz online sistemi müsterilerine acamamaktadir. 
Sizden istegimiz online sistemin ihtiyaci olan asagidaki fonksiyonlari acilen yazmanizdir.

let cars = ["audi", "bmw", "ford", "opel", "fiat", "honda", "toyota", 
"renault", "tesla", "volvo", "skoda", "nissan", 
"ferrari", "volkswagen", "alfa romeo", "mitsubishi"];

*/


let cars = ["audi", "bmw", "ford", "opel", "fiat", "honda", "toyota",
    "renault", "tesla", "volvo", "skoda", "nissan",
    "ferrari", "volkswagen", "alfa romeo", "mitsubishi"];


//1) Icinde "o" harfi gecen arabalari ve bu arabalarin sayisini bulun.
function letterO(arr) {
    let res = arr.filter(e => e.includes("o"));
    return res;
}
console.log(letterO(cars));


//2) Icinde iki defa "o" harfi gecen arabalarin sayisini bulun.
function twiceO(arr) {
    resArr = []
    for (let i = 0; i < arr.length; i++) {
        let newArr = arr[i].split("");

        let res = newArr.filter(e => e === "o").length;

        if (res === 2) {
            resArr.push(arr[i]);
        }
    }
    return resArr;
}
console.log(twiceO(cars));



//3) Araba isim uzunlugu 5'den kücük olan arabalari listeleyin.
function lengthOfTheCarsNames(arr) {
    resArr = []
    for (let i = 0; i < arr.length; i++){
        let newArr = arr[i].split("");
        console.log(newArr.length);
         if(newArr.length < 5){
           resArr.push(arr[i]);
         }
    }
    return resArr;
}
console.log(lengthOfTheCarsNames(cars));


//4) Ilk harfi "f" olan arabalarin son harfini x olarak degistirin.
function changeLetters(arr){
    resArr = []
    for (let i = 0; i < arr.length; i++){

        if(arr[i].startsWith("f")){
            let res = arr[i].split("");
            res.pop();
            res.push("x");
            res = res.join("");
            resArr.push(res);
        }
    }
    return resArr;
}
console.log(changeLetters(cars));


/*5) Uzunlugu 3 ile 6 arasinda olan arabalardan isminin icinde "a" harfi olanlari,
isimlerinin önüne "my favorite " gelecek sekilde degistirin ve html icerisinde listeleyin.*/

function myFavoriteCar(arr){
    resArr = []
    for (let i = 0; i < arr.length; i++){
        if(3 < arr[i].length && arr[i].length <6  && arr[i].includes("a")){
        let res = `my favorite car is ${arr[i] }`;
        resArr.push(res);
        }
    
    }
    return resArr;
}
console.log( myFavoriteCar(cars));



//6) Ismi icinde "o" ve "a" gecen arabalari bulunuz.

function letterOandA(arr){
    resArr = []
    for (let i = 0; i < arr.length; i++){
      if(arr[i].includes("o") && arr[i].includes("a"))
       resArr.push(arr[i]);
    }
    return resArr;
}
console.log(letterOandA(cars));



//7) Ismi icinde "o" veya "i" gecen arabalari bulunuz.

function letterOandI(arr){
    resArr = []
    for (let i = 0; i < arr.length; i++){
      if(arr[i].includes("o") && arr[i].includes("i"))
       resArr.push(arr[i]);
    }
    return `${resArr} Böyle bir araba modeli yok`;
}
console.log(letterOandI(cars));