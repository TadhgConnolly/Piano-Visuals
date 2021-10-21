import NOTES from '../constants/note'

function note (note) {
    return NOTES.includes(note) && note.includes('#')
}

export default note
