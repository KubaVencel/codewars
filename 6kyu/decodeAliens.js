/*

Message from Aliens

Task

Aliens send messages to our planet, but they use a very strange language. Try to decode the messages!



*/

function decode(m) {
   return m
    .split(m.charAt(0))
    .filter(arr => arr !== "")
    .reverse()
    .reduce((finalString, char) => finalString + dictionary[char], '');
}

const dictionary = {
    '/\\': 'a',
    ']3': 'b',
    '(': 'c',
    '|)': 'd',
    '[-': 'e',
    '/=': 'f',
    '(_,': 'g',
    '|-|': 'h',
    '|': 'i',
    '_T': 'j',
    '/<': 'k',
    '|_': 'l',
    '|\\/|': 'm',
    '|\\|': 'n',
    '()': 'o',
    '|^': 'p',
    '()_': 'q',
    '/?': 'r',
    '_\\~': 's',
    '~|~': 't',
    '|_|': 'u',
    '\\/': 'v',
    '\\/\\/': 'w',
    '><': 'x',
    '`/': 'y',
    '~/_': 'z',
    '__': ' ',
    
  };
