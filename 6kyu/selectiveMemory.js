/*

Selective memory

Examples

Input:

"Albert Einstein, !Sarah Connor, Marilyn Monroe, Abraham Lincoln, Sarah Connor, Sean Connery, Marilyn Monroe, Bjarne Stroustrup, Manson Marilyn, Monroe Mary"

Output:

"Albert Einstein, Abraham Lincoln, Sean Connery, Bjarne Stroustrup, Manson Marilyn, Monroe Mary"

=> We must remove every memories of Sarah Connor because she's marked, but as a side-effect we must also remove all the memories about Marilyn Monroe that comes right after her! Note that we can't destroy the memories of Manson Marilyn or Monroe Mary, so be careful!

*/

function select(memory, names=memory.split(', ')){
  let erasables = new Set(names.filter((name,i) => name[0]=="!" || i&&names[i-1][0]=="!" ));
  return names.filter( name => !erasables.has(name) && !erasables.has("!"+name) ).join(', ')
}
