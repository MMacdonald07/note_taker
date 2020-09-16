// Contains all methods required for note taking

const fs = require('fs')
const chalk = require('chalk')

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const addNote =  (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)
    
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        msg = chalk.green.inverse('New note added!')
        console.log(msg)
        saveNotes(notes)
    } else {
        msg = chalk.red.inverse('Note title already taken!')
        console.log(msg)
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const keepNotes = notes.filter((note) => note.title !== title)
    if (notes.length > keepNotes.length) {
        msg = chalk.green.inverse('Note removed!')
        console.log(msg)
        saveNotes(keepNotes)
    } else {
        msg = chalk.red.inverse('No note found!')
        console.log(msg)
        
    }
}

const listNotes = () => {
    const notes = loadNotes()
    const welcome = chalk.inverse('Your notes:')
    console.log(welcome)
    notes.forEach((note) => {
        console.log('Title: ' + note.title)
        console.log(note.body)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const noteExists = notes.find((note) => note.title === title)

    if (noteExists) {
        console.log(chalk.inverse(noteExists.title + ':'))
        console.log(noteExists.body)
    } else {
        const error = chalk.red.inverse('No note found')
        console.log(error)
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}