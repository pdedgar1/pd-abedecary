# Abedecary
Upload a text file and select a display option; then press enter to see your text exploded!

## I distant-coded this project with Claude after failing with ChatGPT. 
The first two prompts I gave ChatGPT (which became the first prompt I gave Claude) are as follows: 

> "I've been building small tools that one can use to interact with language in a new way. In the past, I distant-coded a little html interface (that references a CSS file and a JS file) where someone can upload a .txt file and the program will rearrange (permutationally-erase, or do a Markov model). I'd like to do the same thing again and write an interface that allows someone to upload a .txt file, to make a couple selections about the display (1) the vertical or horizontal arrangement of all the words 2) whether to display all words or a word and its frequency count) and to click "rearrange", then for the display underneath the options to list every single word in the corpus in dynamic, columned display. You could take your first stab at this in a single html file, then I could break out the css and the javascript into separate files."
> "I'd like the display to alphabetize the individual words in the text file either way. Before it alphabetizes but after the file is uploaded, first I want the options to be displayed either across rows that carry over or in columns that carry over and adjust to the width of the window. second, I want to either select a frequency count alphabetized list OR a full-corpus alphabetized list"

ChatGPT gave me much less fru-fru than Claude did in the styling of the CSS, which is something I'm going to go back and resolve with my own preferences later on. There were several more issues I needed to work through on the end of functionality before I restyled these projects, however: 

### Display

> Okay, this looks nice but a few things are struggling. 1. I can't toggle between the sorting options. 2. the text file uploaded isn't being recognized once it's added.

### Toggle Options

> Yay, the rearranged(r) works ! however, I still can't select the other options (the columns or the frequency list)

### Separation 
The last thing I needed to do was break out the sections of this interface so that everything could be edited separately, with all the scripts in separate files. That way, if I want to mess around with the display, or port over any other parts of this tool, I can do so without bringing in a ton of extra junk. At some point, I might want to put all these tools in one place, and in that case, I'd just need to port over the scripts into one file that a single HTML could reference, or that they could all relate to the same CSS stylesheet. Having them all separate like this is really helpful, so while I asked just for the HTML and was going to do the rest manually, Claude made all three. 

> ok it works now!! I'm stoked! what I'd like to do now is break the javascript out and the css into separate files. would you write out how the html looks without the header and footers?
