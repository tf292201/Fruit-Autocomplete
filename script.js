const input = document.querySelector('#fruit');
const suggestions = document.querySelector('#list');
const ul = document.querySelector('#list');
const results = [];

const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

// function search(str) {
// 	let results = [];
  
// 	const matches = fruits.filter(function(fruit){return fruit.includes(str);});
//   console.log(matches);

// 	// TODO

// 	return results;
// }

function searchHandler(e) {
	// inputVal = e.target.value.toLowerCase()

  let inputVal = "";
  inputVal += e.target.value.toLowerCase();
  //removes li's created by filtered array
  console.log(inputVal);
  while (ul.firstChild){ul.removeChild(ul.firstChild);}
  
	let results = fruits.filter(function(fruit){return fruit.toLowerCase().includes(inputVal.toLowerCase());});
  console.log(results);
	if (inputVal)
  {showSuggestions(results, inputVal);}
}

// }

function showSuggestions(results, inputVal) {
	
  
  // const list = document.querySelector("#list");
  
  results.forEach(item => { 
  const li = document.createElement('li');
   li.textContent = item;
   ul.appendChild(li); 
	 ul.classList.add("has-suggestions");
   inputVal = "";})}
  

	// TODO
	

function useSuggestion(e) {
  let choice = document.querySelector("#fruit");
  choice.value = e.target.textContent;
  while(ul.firstChild){ul.removeChild(ul.firstChild);}
  console.log(choice.value);
}
//removes suggestions from ul when blurred.
// input.addEventListener('blur', function() {while(ul.firstChild){ul.removeChild(ul.firstChild);}});

input.addEventListener('keyup', searchHandler);

suggestions.addEventListener('click', useSuggestion);