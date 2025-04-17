let arrNums = [1, 2, 3, 4];
let btn = document.getElementById("btn");

btn.addEventListener("click", evenFunc);

function evenFunc(){
  let evens = arrNums.filter(num => num % 2 === 0);
  setTimeout(() => {
    document.getElementById("output").innerHTML += `${evens.join(",")}`;
    doubleEvens(evens);
  }, 1000);
}

function doubleEvens(evenArr) {
  let doubled = evenArr.map(num => num * 2);

  setTimeout(() => {
    document.getElementById("output").innerHTML += `<br>${doubled.join(",")}`;
  }, 2000);
}
