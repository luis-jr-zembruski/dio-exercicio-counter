var counterWrapper = document.getElementById("counter");
var counter = 0;

function decrement() {
  counter = counter - 1;
  console.log(counter);
  counterWrapper.innerHTML = counter;
}

function increment() {
  counter = counter + 1;
  console.log(counter);
  counterWrapper.innerHTML = counter;
}
