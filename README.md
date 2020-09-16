# note_taker
This app allows the user to add, delete or read notes all from the command line through parsing the user's input with Yargs.

## Installation

### Clone
Clone this repository to your machine using https://github.com/MMacdonald07/note_taker.git

### Setup
Use the package manager npm to install prerequisite node modules so the program can run:

```bash
npm install
```

## Usage
note_taker offers four possible options:

* Add a note
* Remove a note
* List all notes
* Read a specific note

To add a note:

```bash
node app.js add --title="note title to add here" --body="note body here"
```
\(It should be noted - no pun intended - that when adding a new note, the title must be unique.\)


To list out all stored notes:

```bash
node app.js list
```

To read a note:

```bash
node app.js read --title="note title to read here"
```

To delete a note:

```bash
node app.js remove --title="note title here"
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Please make sure to update tests as appropriate.