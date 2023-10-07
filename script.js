const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
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
	inputVal = e.target.value.toLowerCase()
  if (inputVal.length < 3) {while(ul.firstChild){ul.removeChild(ul.firstChild);}};
  
  if (inputVal.length === 3) 
  {
	let results = fruits.filter(function(fruit){return fruit.toLowerCase().includes(inputVal.toLowerCase());});
  console.log(results);
	if (inputVal)
  {showSuggestions(results, inputVal);}
}}

function showSuggestions(results, inputVal) {
	
  
  // const list = document.querySelector("#list");
  
  results.forEach(item => { 
  const li = document.createElement('li');
   li.style.cursor = "pointer";
   li.textContent = item;
   ul.appendChild(li); 
	 ul.classList.add("has-suggestions")
   inputVal = "";})
  ;}
  

	// TODO
	

function useSuggestion(e) {
	// TODO
}
//removes suggestions from ul when blurred.
input.addEventListener('blur', function() {while(ul.firstChild){ul.removeChild(ul.firstChild);}});

input.addEventListener('keyup', searchHandler);

suggestions.addEventListener('click', useSuggestion);