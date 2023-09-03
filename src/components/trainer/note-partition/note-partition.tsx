import { useEffect, useRef } from 'react';
import { Note } from '../../../models/notes/notes.interface';

/**
 * The note partition. Handles note drawing logic.
 * @returns
 */
export default function NotePartition(props: {note: Note | null}) {
  /**
   * Reference to canvas HTML element
   */
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  /**
   * Height calculated from current number of chosen octaves
   */
  const height = 7 * 50;
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
    drawNote(context, props.note, partitionHeight);
  }, [props.note, partitionHeight]);

  /**
   * Draw lines of the partition
   * @param context 
   */
  const drawLines = (context: CanvasRenderingContext2D): void => {
    for (let i = 0; i < 5; i++) {
      context.beginPath();
      context.moveTo(10, i * 50);
      context.lineTo(500, i * 50);
      context.stroke();
    }
  }

  /**
   * Draw the provided note on the provided context
   * @param context 
   * @param note 
   * @param height
   */
  const drawNote = (context: CanvasRenderingContext2D, note: Note | null, height: number): void => {
    if (note != null) {
      const notePosition = height - (note.altPosition * 25);
      context.beginPath();
      context.arc(20, notePosition, 12.5, 0, 2 * Math.PI);
      context.fill();
      context.stroke();
    }
  }

  return (
    <canvas ref={canvasRef} height={height}></canvas>
  )
}
