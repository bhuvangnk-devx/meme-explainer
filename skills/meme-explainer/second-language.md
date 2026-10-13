# Second language

For when the audience reads another language. Build and check the first language completely first.

1. **Extract.** Collect every visible text node and every `aria-label` from the page into a list.
   Done when the list covers the cover, every section, every SVG, the glossary and the *try it* check.
2. **Map.** Write a `{source: translation}` map, plus a keep-as-is set for URLs, product names, terms
   of art and numbers. Translate memes into local slang, matching the joke rather than the words.
   Fragments around a bold word must read correctly in the target language's word order.
   Done when the build reports zero unmapped strings.
3. **Build.** Ship both languages as `<main data-lang="xx">` blocks with a two-letter pill switch
   at the top right. Suffix section ids in the copy (`-xx`). Keep the reader's choice in
   `localStorage` (inside try/catch) and open the second language when the URL ends in `#xx`.
   Give the *try it* check its strings per language. Done when the switch, the contents links and
   the *try it* check work in both languages.
4. **Check.** Run `check-layout.js` on the second language at both widths; translations run longer,
   so shorten lines until it returns `clean`. Export one PDF per language.
