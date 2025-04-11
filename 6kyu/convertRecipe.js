/*

Converting Measures

Mary wrote a recipe book and is about to publish it, but because of a new European law, she needs to update and include all measures in grams.

Given all the measures in tablespoon (tbsp) and in teaspoon (tsp), considering 1 tbsp = 15g and 1 tsp = 5g, append to the end of the measurement the biggest equivalent integer (rounding up).
Examples

"2 tbsp of butter"    -->  "2 tbsp (30g) of butter"

"1/2 tbsp of oregano" -->  "1/2 tbsp (8g) of oregano"

"1/2 tsp of salt"     -->  "1/2 tsp (3g) of salt"

"Add to the mixing bowl and coat well with 1 tbsp of olive oil & 1/2 tbsp of dried dill" -->
"Add to the mixing bowl and coat well with 1 tbsp (15g) of olive oil & 1/2 tbsp (8g) of dried dill"

*/

function convertValue(value, grams) {
    return Math.ceil(eval(value) * grams);
}

function convertRecipe(recipe) {
    let s = recipe.split(" ");

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "tbsp") {
            s[i] = "tbsp" + " (" + convertValue(s[i-1], 15) + "g)";
        }
        if (s[i] === "tsp") {
            s[i] = "tsp" + " (" + convertValue(s[i-1], 5) + "g)";
        }
    }

    return s.join(" ")
}
