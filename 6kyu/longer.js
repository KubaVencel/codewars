/*

I'm longer than you!

Description:

Create a function longer that accepts a string and sorts the words in it based on their respective lengths in an ascending order. If there are two words of the same lengths, sort them alphabetically. Look at the examples below for more details.

longer("Another Green World") => Green World Another
longer("Darkness on the edge of Town") => of on the Town edge Darkness
longer("Have you ever Seen the Rain") => the you Have Rain Seen ever

Inputs will contain only Latin characters and spaces. Lowercase characters are to be sorted before uppercase ones as follows:

longer("hello Hello") => Hello hello

*/

function longer(s) {
  return s
    .split(" ")
    .sort()
    .sort((a,b) => a.length - b.length || a > b).join(" ");
}
