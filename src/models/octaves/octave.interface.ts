import {OctaveNameType} from './octave-name.type.ts';
import {NotePositionMultiplier} from './note-position-multiplier.type.ts';

export interface Octave {
    /**
     * Octave name
     */
    name: OctaveNameType;
    /**
     * Is octave currently displayed on the app's partition
     */
    chosen?: boolean;
    /**
     * Multiply the note positions in the octave
     */
    notePositionMultiplier: NotePositionMultiplier;
}