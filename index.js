//Use an array to hold the value of the quotes
var arr = [
  {'author': 'Oscar Wilde', 
   'quote': 'Be yourself; everyone else is already taken.'
  },
  {'author': 'Frank Zappa', 
   'quote': 'So many books, so little time.'
  },

  {'author': 'Marcus Tullius Cicero', 
   'quote': 'A room without books is like a body without a soul.'
  },

  {'author': 'Mae West', 
   'quote': 'You only live once, but if you do it right, once is enough.'
  },

  {'author': 'Mahatma Gandhi', 
   'quote': 'Be the change that you wish to see in the world.'
  },

  {'author': 'Robert Frost', 
   'quote': 'In three words I can sum up everything ve learned about life: it goes on'
  },
];

function text(){
  var random = Number.parseInt(Math.random()*arr.length + 1);
  document.querySelector('#text').textContent = `\"${arr[random].quote}\"`;
  document.querySelector('#atext').textContent = `--${arr[random].author}`;
  
}
