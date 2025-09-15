import {KeyType} from '../types/key.type.ts';

/**
 * Multiply the note positions in the octave
 */
export type NotePositionMultiplier = {
    [key in KeyType]: number;
};