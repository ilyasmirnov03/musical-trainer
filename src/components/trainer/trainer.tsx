import { useState } from 'react';
import './trainer.css';
import { Note, notes } from '../../constants/notes.const';

export default function Trainer() {
  const [currentNote, setCurrentNote] = useState<Note | null>(null);
  const [userGuess, setUserGuess] = useState<Note | null>(null);

  /**
   * Return a random note from the notes array.
   * @returns 
   */
  const generateRandomNote = () => {
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
  const handleNoteButtonClick = (note: Note) => {
    setUserGuess(note);
    if (userGuess === currentNote) {
      setUserGuess(null);
      setCurrentNote(generateRandomNote());
    }
  };

  // Initial setup
  if (currentNote === null) {
    setCurrentNote(generateRandomNote());
  }

  return (
    <>
      <section className="partition">
        <div className={`note ${currentNote}`} />
        <div className="lines">
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </div>
      </section>
      <p>Guess the note:</p>
      <div>
        {notes.map((note) => (
          <button
            key={note}
            onClick={() => handleNoteButtonClick(note)}
          >
            {note}
          </button>
        ))}
      </div>
    </>
  );
}