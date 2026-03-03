"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const curRef = useRef<HTMLDivElement>(null);
  const folRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = 0, my = 0, fx = 0, fy = 0;
    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    document.addEventListener("mousemove", onMove);

    const anim = () => {
      if (curRef.current) {
        curRef.current.style.left = mx + "px";
        curRef.current.style.top = my + "px";
      }
      fx += (mx - fx) * 0.12;
      fy += (my - fy) * 0.12;
      if (folRef.current) {
        folRef.current.style.left = fx + "px";
        folRef.current.style.top = fy + "px";
      }
      requestAnimationFrame(anim);
    };
    anim();

    const addHover = () => folRef.current?.classList.add("is-hover");
    const rmHover  = () => folRef.current?.classList.remove("is-hover");
    const targets = "a, button, .proj-card, .svc-item, input, textarea";

    const observe = () => {
      document.querySelectorAll(targets).forEach(el => {
        el.addEventListener("mouseenter", addHover);
        el.addEventListener("mouseleave", rmHover);
      });
    };
    observe();
    const mo = new MutationObserver(observe);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", onMove);
      mo.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={curRef} className="cursor" />
      <div ref={folRef} className="cursor-follower" />
    </>
  );
}