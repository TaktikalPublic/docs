import React, { useEffect, useRef, useState } from "react";
import JsxParser from "react-jsx-parser";
import styles from "./FaqItem.module.css";

interface Props {
  heading: string;
  text: string;
}

export const FaqItem = ({ heading, text }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  const setButtonHeight = () => {
    if (!buttonRef.current || !headingRef.current) return;

    let height = buttonRef.current.scrollHeight;

    // Edge case for FireFox due to different scrollHeight calculations from other browsers
    if (navigator.userAgent.match(/firefox|fxios/i)) {
      height += 24;
    }

    buttonRef.current.style.height = isOpen
      ? `${height}px`
      : `${headingRef.current.scrollHeight + 48}px`; // 48 is top + bottom padding (24+24)
  };

  useEffect(() => {
    setButtonHeight();
    window.addEventListener("resize", setButtonHeight);
    return () => {
      window.removeEventListener("resize", setButtonHeight);
    };
  }, [isOpen]);

  return (
    <button
      className={`${styles.button}`}
      onClick={() => setIsOpen(!isOpen)}
      data-is-open={isOpen}
      ref={buttonRef}
    >
      <div
        className={`${styles.container} ${isOpen && styles.rotate}`}
        ref={headingRef}
      >
        <p>{heading}</p>
        <img src="./svg/PlusIcon.svg" />
      </div>
      <div className={styles.text}>
        <JsxParser jsx={text} />
      </div>
    </button>
  );
};
