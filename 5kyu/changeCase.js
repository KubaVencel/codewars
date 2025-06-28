/*

Convert all the cases!

In this kata, you will make a function that converts between camelCase, snake_case, and kebab-case.

You must write a function that changes to a given case. It must be able to handle all three case types:

js> changeCase("snakeCase", "snake")
"snake_case"
js> changeCase("some-lisp-name", "camel")
"someLispName"
js> changeCase("map_to_all", "kebab")
"map-to-all"
js> changeCase("doHTMLRequest", "kebab")
"do-h-t-m-l-request"
js> changeCase("invalid-inPut_bad", "kebab")
undefined
js> changeCase("valid-input", "huh???")
undefined
js> changeCase("", "camel")
""

Your function must deal with invalid input as shown, though it will only be passed strings. Furthermore, all valid identifiers will be lowercase except when necessary, in other words on word boundaries in camelCase.

(Any translations would be greatly appreciated!)

*/

function changeCase(identifier, targetCase) {
	if (!/^$|^[a-z]+(([A-Z][a-z]*)+|(-[a-z]+)*|(_[a-z]+)*)$/.test(identifier)) return undefined;
	switch (targetCase) {
		case 'snake': return identifier.replace(/-([a-z])|([A-Z])/g, (_, x, y) => '_' + (x || y.toLowerCase()));
		case 'camel': return identifier.replace(/[-_]([a-z])/g, (_, x) => x.toUpperCase());
		case 'kebab': return identifier.replace(/_([a-z])|([A-Z])/g, (_, x, y) => '-' + (x || y.toLowerCase()));
		default: return undefined;
	}
}
