import {Note} from '../models/notes/notes.interface';

/**
 * The notes array
 */
export const notes: readonly Note[] = [
    {
        name: 'do',
        position: {
            alt: -2,
            bass: 3,
        }
    },
    {
        name: 're',
        position: {
            alt: -1,
            bass: 4
        }
    },
    {
        name: 'mi',
        position: {
            alt: 0,
            bass: 5
        }
    },
    {
        name: 'fa',
        position: {
            alt: 1,
            bass: 6
        }
    },
    {
        name: 'sol',
        position: {
            alt: 2,
            bass: 7
        }
    },
    {
        name: 'la',
        position: {
            alt: 3,
            bass: 8
        }
    },
    {
        name: 'si',
        position: {
            alt: 4,
            bass: 9
        }
    }
] as const;