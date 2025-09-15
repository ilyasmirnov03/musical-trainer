import { useEffect, useRef } from 'react';
import abcjs, { Selector } from 'abcjs';
import 'abcjs/abcjs-audio.css';

/**
 * The note partition. Handles note drawing logic.
 * @returns
 */
export default function NotePartition() {

  /**
   * Music sheet renderer
   */
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elementRef != null) {
      abcjs.renderAbc(
        elementRef.current as Selector,
        'c|',
      );
    }
  }, []);

  return (
    <>
      <div ref={elementRef} />
    </>
  )
}
