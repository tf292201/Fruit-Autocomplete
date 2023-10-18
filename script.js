const input = document.querySelector('#fruit');
const suggestions = document.querySelector('#list');
const ul = document.querySelector('.suggestions ul');
const results = [];

const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

// function search(str) {
// 	let results = [];
// 	// TODO
// 	return results;
// }

function searchHandler(e) {
  let inputVal = "";
  inputVal += e.target.value.toLowerCase();
  console.log(inputVal);
  
  if(e.target.value === "")
  {input.classList.remove("bottomradius");}

  while (ul.firstChild){ul.removeChild(ul.firstChild);}
  
	let results = fruits.filter(function(fruit){return fruit.toLowerCase().includes(inputVal.toLowerCase());});
  console.log(results);

  if(results.length === 0)
  {input.classList.remove("bottomradius");}

	if (inputVal)
  {showSuggestions(results, inputVal);}
}

function showSuggestions(results, inputVal) {
  results.forEach(item => { 
  const li = document.createElement('li');
   li.textContent = item;
   ul.appendChild(li); 
	 ul.classList.add("has-suggestions");

   if (ul.firstChild)
  {input.classList.add("bottomradius")}

  })}
  

function useSuggestion(e) {
  let choice = document.querySelector("#fruit");
  choice.value = e.target.textContent;
  while(ul.firstChild){ul.removeChild(ul.firstChild);
    input.classList.remove("bottomradius");
  }
  console.log(choice.value);
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);