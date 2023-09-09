import { NoteName } from "./note-name.type";
import {NotePosition} from './note-position.interface.ts';

export interface Note {
    // Note name (do, re, mi...)
    name: NoteName;
    // Note position
    position: NotePosition;
}