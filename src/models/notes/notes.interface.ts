import { NoteName } from "./note-name.type";

export interface Note {
    // Note name (do, re, mi...)
    name: NoteName;
    // Note position in alt key
    altPosition: number;
    // Note position in bass key
    bassPosition: number;
}