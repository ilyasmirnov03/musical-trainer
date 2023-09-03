import { Note } from "../models/notes/notes.interface";

/**
 * The notes array
 */
export const notes: readonly Note[] = [
    {
        name: 'do',
        altPosition: -2,
        bassPosition: 3
    },
    {
        name: 're',
        altPosition: -1,
        bassPosition: 4
    },
    {
        name: 'mi',
        altPosition: 0,
        bassPosition: 5
    },
    {
        name: 'fa',
        altPosition: 1,
        bassPosition: 6
    },
    {
        name: 'sol',
        altPosition: 2,
        bassPosition: 7
    },
    {
        name: 'la',
        altPosition: 3,
        bassPosition: 8
    },
    {
        name: 'si',
        altPosition: 4,
        bassPosition: 9
    }
] as const;