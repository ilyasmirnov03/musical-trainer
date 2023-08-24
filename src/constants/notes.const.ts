/**
 * Note type
 */
export type Note = 'do' | 're' | 'mi' | 'fa' | 'sol' | 'la' | 'si' | 'do'; 

/**
 * The notes array
 */
export const notes: readonly Note[] = ['do', 're', 'mi', 'fa', 'sol', 'la', 'si'] as const;