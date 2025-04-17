// JavaScript
let arrNums = [1, 2, 3, 4];
let btn = document.getElementById("btn");

btn.addEventListener("click", myFunc);

function myFunc() {
  setTimeout(() => {
    document.getElementById("output").innerHTML = arrNums.join(", ");
    
    // Now call evenFunc after showing original array
    evenFunc(arrNums);
  }, 3000);
}

function evenFunc(arr) {
  let latestArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      latestArr.push(arr[i]);
    }
  }
  setTimeout(() => {
    document.getElementById("output").innerHTML = latestArr.join(", ");
  }, 1000); // Show even numbers after 1 second
}
