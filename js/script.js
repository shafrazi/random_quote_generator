/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
 ***/

let quotes = [
  {
    quote:
      "Realists are, as a rule, only men in the rut of routine who are incapable of transcending a narrow circle of antiquated notions. But their adverse opinion does carry some weight and can do great harm to a new project — at least until the innovation is strong enough to push the 'realists' and their moldy notions aside.",
    source: "Theodore Herzl",
  },
  {
    quote:
      "I’ve been thinking about the war a lot recently, and I think I’ve decided it’s wrong. We are defeating ourselves in waging it, will destroy ourselves by winning it.",
    source: "Iain Banks",
    citation: "Descendant",
    year: "1987",
  },
  {
    quote: "Love flowers best in openness and freedom.",
    source: "Edward Abbey",
    citation: "Desert Solitaire",
    year: "1968",
  },
  {
    quote: "Love can create universes. Love and Wisdom are equal.",
    source: "Agni Yoga",
    citation: "Leaves of Morya’s Garden I, 28.",
    year: "1924",
  },
  {
    quote:
      "The greatest thing you'll ever learn is just to love and be loved in return.",
    source: "Eben Ahbez",
  },
];

/***
 * `getRandomQuote` function
 ***/

function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

/***
 * `printQuote` function
 ***/

function printQuote() {
  let quote = getRandomQuote();
  let html = `<p class="quote">${quote.quote}</p><p class="source">${quote.source}`;
  if (quote.citation) {
    html += `<span class="citation">${quote.citation}</span>`;
  }
  if (quote.year) {
    html += `<span class="year">${quote.year}</span>`;
  }

  html += "</p>";

  document.querySelector("#quote-box").innerHTML = html;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
