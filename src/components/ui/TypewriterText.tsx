"use client";

import { useState, useEffect, useCallback, useRef } from "react";

interface TypewriterTextProps {
  texts: readonly string[];
}

export function TypewriterText({ texts }: TypewriterTextProps) {
  const [display, setDisplay] = useState("");
  const textIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const isDeletingRef = useRef(false);
  const textsRef = useRef(texts);

  // Keep ref in sync with prop changes (language toggle)
  useEffect(() => {
    textsRef.current = texts;
  }, [texts]);

  const type = useCallback(() => {
    const currentTexts = textsRef.current;
    const currentText = currentTexts[textIndexRef.current % currentTexts.length];
    const isDeleting = isDeletingRef.current;
    let speed: number;

    if (isDeleting) {
      charIndexRef.current--;
      setDisplay(currentText.substring(0, charIndexRef.current));
      speed = 50;
    } else {
      charIndexRef.current++;
      setDisplay(currentText.substring(0, charIndexRef.current));
      speed = 100;
    }

    if (!isDeleting && charIndexRef.current === currentText.length) {
      isDeletingRef.current = true;
      speed = 2000;
    } else if (isDeleting && charIndexRef.current === 0) {
      isDeletingRef.current = false;
      textIndexRef.current = (textIndexRef.current + 1) % currentTexts.length;
      speed = 500;
    }

    return speed;
  }, []);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    function tick() {
      const speed = type();
      timeoutId = setTimeout(tick, speed);
    }

    tick();
    return () => clearTimeout(timeoutId);
  }, [type]);

  return <span className="typewriter-text">{display}</span>;
}
