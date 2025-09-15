import {Note} from '../models/notes/notes.interface';

/**
 * The notes array
 */
export const notes: readonly Note[] = [
    {
        name: 'do',
        position: {
            treble: -2,
            bass: 3,
        }
    },
    {
        name: 're',
        position: {
            treble: -1,
            bass: 4
        }
    },
    {
        name: 'mi',
        position: {
            treble: 0,
            bass: 5
        }
    },
    {
        name: 'fa',
        position: {
            treble: 1,
            bass: 6
        }
    },
    {
        name: 'sol',
        position: {
            treble: 2,
            bass: 7
        }
    },
    {
        name: 'la',
        position: {
            treble: 3,
            bass: 8
        }
    },
    {
        name: 'si',
        position: {
            treble: 4,
            bass: 9
        }
    }
] as const;