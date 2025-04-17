let arrNums = [1, 2, 3, 4];
let btn = document.getElementById("btn");

btn.addEventListener("click", myFunc);

function myFunc() {
  document.getElementById("output").innerHTML = "Processing...";

  setTimeout(() => {
    document.getElementById("output").innerHTML = `Original: ${arrNums.join(", ")}`;
    
    // Call evenFunc after showing original
    evenFunc(arrNums);
  }, 3000);
}

function evenFunc(arr) {
  let evens = arr.filter(num => num % 2 === 0);

  setTimeout(() => {
    document.getElementById("output").innerHTML = `Even Numbers: ${evens.join(", ")}`;
    
    // Double the even numbers after 2s
    doubleEvens(evens);
  }, 1000);
}

function doubleEvens(evenArr) {
  let doubled = evenArr.map(num => num * 2);

  setTimeout(() => {
    document.getElementById("output").innerHTML = `Doubled Evens: ${doubled.join(", ")}`;
  }, 2000);
}
