let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');

function increment() {
	count++;
	CURRENT_NUMBER.innerHTML = count;
}

function decrement() {
	count--;
	CURRENT_NUMBER.innerHTML = count;
	
}

/*
var currentNumber = document.getElementById("currentNumberr")
var currentNumber = 0;

function increment(){
	currentNumber = currentNumber + 1;
	currentNumberr.innerHTML = currentNumber;
}

function decrement(){
	currentNumber = currentNumber - 1;
	currentNumberr.innerHTML = currentNumber;

}
*/


const A = parseInt(gets());
const B = parseInt(gets());
const total = 0;
for (let x = A; x <=B; x++)
  {
    total+=x; 
  }
print(total);