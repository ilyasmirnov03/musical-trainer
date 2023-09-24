import {Octave} from '../models/octaves/octave.interface.ts';

export const OCTAVES: Octave[] = [
    {
        name: 'Four-Line',
        notePositionMultiplier: {
            treble: 4,
            bass: 5,
        }
    },
    {
        name: 'Three-Line',
        notePositionMultiplier: {
            treble: 3,
            bass: 4,
        }
    },
    {
        name: 'Two-Line',
        notePositionMultiplier: {
            treble: 2,
            bass: 3,
        }
    },
    {
        name: 'One-Line',
        chosen: true,
        notePositionMultiplier: {
            treble: 1,
            bass: 2,
        }
    },
    {
        name: 'Small',
        notePositionMultiplier: {
            treble: -1,
            bass: 1,
        }
    },
    {
        name: 'Great',
        notePositionMultiplier: {
            treble: -2,
            bass: -1,
        }
    },
    {
        name: 'Contra',
        notePositionMultiplier: {
            treble: -3,
            bass: -2,
        }
    },
];