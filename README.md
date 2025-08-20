# Abedecary
Upload a text file and select a display option; then press enter to see your text exploded!

## I distant-coded this project with Claude after failing with ChatGPT. 
The first two prompts I gave ChatGPT (which became the first prompt I gave Claude) are as follows: 

> "I've been building small tools that one can use to interact with language in a new way. In the past, I distant-coded a little html interface (that references a CSS file and a JS file) where someone can upload a .txt file and the program will rearrange (permutationally-erase, or do a Markov model). I'd like to do the same thing again and write an interface that allows someone to upload a .txt file, to make a couple selections about the display (1) the vertical or horizontal arrangement of all the words 2) whether to display all words or a word and its frequency count) and to click "rearrange", then for the display underneath the options to list every single word in the corpus in dynamic, columned display. You could take your first stab at this in a single html file, then I could break out the css and the javascript into separate files."
> "I'd like the display to alphabetize the individual words in the text file either way. Before it alphabetizes but after the file is uploaded, first I want the options to be displayed either across rows that carry over or in columns that carry over and adjust to the width of the window. second, I want to either select a frequency count alphabetized list OR a full-corpus alphabetized list"

ChatGPT gave me much less fru-fru than Claude did in the styling of the CSS, which is something I'm going to go back and resolve with my own preferences later on. There were several more issues I needed to work through on the end of functionality before I restyled these projects, however: 

### Display

### Toggle Options
