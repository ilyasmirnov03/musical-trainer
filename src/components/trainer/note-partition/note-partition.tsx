import { useEffect, useRef } from 'react';
import { Note } from '../../../models/notes/notes.interface';
import {KeyType} from '../../../models/types/key.type.ts';
import {NUMBERS} from '../../../constants/numbers.const.ts';

/**
 * Note partition component props interface
 */
interface NotePartitionProps {
  note: Note | null,
  currentKey: KeyType
}

/**
 * The note partition. Handles note drawing logic.
 * @returns
 */
export default function NotePartition({note, currentKey}: NotePartitionProps) {
  /**
   * Reference to canvas HTML element
   */
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  /**
   * Height calculated from current number of chosen octaves
   */
  const height = 7 * NUMBERS.DISTANCE_BETWEEN_LINES;
  /**
   * Total partition height
   */
  const partitionHeight = 200;

  /**
   * Use effect to make sure canvas element is available in the DOM
   */
  useEffect(() => {
    // Get canvas element
    const canvas = canvasRef.current;
    if (canvas == null) {
      return;
    }
    // Get 2d context
    const context = canvas.getContext('2d');
    if (context == null) {
      return;
    }
    // Clear entire canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
    // Draw lines and current note
    drawLines(context);
    drawNote(context, note, partitionHeight, currentKey);
  }, [note, currentKey]);

  /**
   * Draw lines of the partition
   * @param context
   */
  const drawLines = (context: CanvasRenderingContext2D): void => {
    for (let i = 0; i < 5; i++) {
      context.beginPath();
      context.moveTo(10, i * NUMBERS.DISTANCE_BETWEEN_LINES);
      context.lineTo(500, i * NUMBERS.DISTANCE_BETWEEN_LINES);
      context.stroke();
    }
  }

  /**
   * Draw the provided note on the provided context
   * @param context
   * @param note
   * @param height
   * @param currentKey
   */
  const drawNote = (
      context: CanvasRenderingContext2D,
      note: Note | null,
      height: number,
      currentKey: KeyType
  ): void => {
    if (note != null) {
      const notePosition = height - (note.position[currentKey] * NUMBERS.DISTANCE_BETWEEN_NOTES);
      context.beginPath();
      context.arc(20, notePosition, NUMBERS.DISTANCE_BETWEEN_NOTES / 2, 0, 2 * Math.PI);
      context.fill();
      context.stroke();
    }
  }

  return (
    <canvas ref={canvasRef} height={height}></canvas>
  )
}
