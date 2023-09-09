import { useState } from 'react';
import './trainer.css';
import { notes } from '../../constants/notes.const';
import { Note } from '../../models/notes/notes.interface';
import NotePartition from './note-partition/note-partition';
import {KeyType} from '../../models/types/key.type.ts';

/**
 * Training application container.
 * Handles user guess and random note selection logic.
 * @returns
 */
export default function Trainer() {
  const [currentNote, setCurrentNote] = useState<Note | null>(null);
  const [correctGuesses, setCorrectGuesses] = useState<number>(0);
  const [currentKey, setCurrentKey] = useState<KeyType>("alt");

  /**
   * Return a random note from the notes array.
   * @returns
   */
  const generateRandomNote = (): Note => {
    let randomIndex = Math.floor(Math.random() * notes.length);
    // Prevent same note generation
    while (notes[randomIndex] === currentNote) {
      randomIndex = Math.floor(Math.random() * notes.length);
    }
    return notes[randomIndex];
  };

  /**
   * @desc If the guess is correct, generate next note.
   * @event click
   * @param note 
   */
  const handleNoteGuess = (note: Note) => {
    if (note.name === currentNote?.name) {
      setCurrentNote(generateRandomNote());
      setCorrectGuesses((guesses) => guesses + 1);
    }
  };

  /**
   * @desc Change current key on click
   * @event click
   */
  const changeKey = () => {
    setCorrectGuesses(0);
    currentKey === 'alt' ? setCurrentKey("bass") : setCurrentKey('alt');
  };

  // Initial setup
  if (currentNote === null) {
    setCurrentNote(generateRandomNote());
  }

  return (
    <>
      <button onClick={changeKey}>{currentKey}</button>
      <NotePartition note={currentNote} currentKey={currentKey}></NotePartition>
      <p>Guess the note: <span>{correctGuesses}</span></p>
      <div>
        {notes.map((note) => (
          <button
            key={note.name}
            onClick={() => handleNoteGuess(note)}
          >
            {note.name}
          </button>
        ))}
      </div>
    </>
  );
}