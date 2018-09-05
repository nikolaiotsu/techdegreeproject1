// FSJS - Random Quote Generator

// Array of quote objects that holds all the available quotes.
let quotes = [
{quote: "Love is space and time measured by the heart.",
 source: "Marcel Proust"
},
{quote: "The purpose of life is finding the largest burden that you can bear and bearing it.",
 source: "Jordan B. Peterson",
},
{quote: "There is, after all, a kind of happiness in unhappiness, if it's the right unhappiness.",
 source: "Jonathan Franzen"
},
{quote: "The truth will set you free. But not until it's finished with you.",
 source: "David Foster Wallace"
},
{quote: "Love removes the world for you, and just as surely when it's going well as when it's going badly.",
 source: "Alice Munro",
 citation: "The Beggar Maid: Stories of Flo and Rose",
 year: "1977"
},
{quote: "boundaries, Sheila. Barriers. We need them. They let you love someone. Otherwise, you might kill them.",
 source: "Sheila Heti",
 citation: "How Should a Person Be?",
 year: "2010"
},
{quote: "The darker the night, the brighter the stars, the deeper the grief, the closer is God!",
 source: "Fyodor Dostoevsky",
 citation: "The Brothers Karamazov",
 year: "1880"
},
{quote: "Live to the point of tears.",
 source: "Albert Camus"
},
{quote: "Things have gotten closer to the sun / and I’ve done things in small doses / So don’t think that I’m pushing you away / when you’re the one that I’ve kept closest.",
 source: "The XX",
 citation: "Crystallized",
 year: "2009"
},
{quote: "Children, wake up / Hold your mistake up / before they turn the summer into dust.",
 source: "Arcade Fire",
 citation: "Wake Up",
 year: "2004"
}

];


// a function that chooses a random quote from the previous quotes array
function getRandomQuote (){
  i = Math.floor(Math.random() * quotes.length);
  randomQuote = quotes[i];
  return randomQuote
}



/* a function that calls the getRandomquote function, and prints out the result
to the quote-box element. It only prints out all of the quote information if that
information is available,　otherwise it prints out only the quote and the year.
Each pbject property is allocated to their proper positions on the page,
eg. randomQuote.source is placed in class= "source."
 */

function printQuote () {
  var randomQuote = getRandomQuote();
  var div = document.getElementById('quote-box');
  var message = '<p class="quote">' + randomQuote.quote + '</p>';
  message += '<p class="source">' + randomQuote.source + '<span class="citation">' + randomQuote.citation + '</span>';
  message += '<span class="year">' + randomQuote.year +  '</span>' + '</p>';
  if (randomQuote.year === undefined && randomQuote.citation === undefined){
    message = '<p class="quote">' + randomQuote.quote + '</p>'
    message += '<p class="source">' + randomQuote.source + '</p>';
}

  div.innerHTML = message;
}


printQuote();

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
