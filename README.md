# Mark down editor

live Link:
[MarkDown Editor](https://mrkdwn-editor.herokuapp.com/)

## Setting up testing
NEXT.js testing [example](https://github.com/vercel/next.js/tree/master/examples/with-jest)
Only used a part of the example. did not use their jest.config.js file. want to see if needed or understand why they are in file


## Managing sate of app

currently have a context that contains the saved doc and possibly other options. I'm having to update,save and edit doc in multiple places and i can see the benefit of having a state management tool such as redux

## TODO

1. ~~make the order list look more like a row id more than a list~~
2. Edit the saved markdown files
3. ~~add word, letter and row counter~~
4. ~~mapping of the saved markdown file~~
5. ~~convert the input to actual markdown lol.Forgot~~
6. ~~list ID 13 has height issue and showing background~~
7. escape button to kick out of the text area box
8. ~~Style on the p tags, is a bit large and out of~~
9. Add counter for the tags that are placed in the document
10. since it is an input, then may be able to set up some paras and have it return a specific color once the hash is entered.
11. improve button designs for the counters
12. Create a custom Hook on the logic functions




## Bonus points

- Live preview (where your edits in the input area automatically show up in the preview panel)
- Syntax highlighting for input area
- Selectable themes for input area
- Selectable themes for preview panel
- Print to PDF
- Locally installed (using Electron, for example)
- Responsive design
