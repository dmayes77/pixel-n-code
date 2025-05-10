"use client";
import React from "react";

export default function BrandSVG({
  className = "h-10",
  color = "currentColor",
  ...props
}) {
  return (
    <svg
      id="Layer_2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 479.61 126.78"
      className={className}
      style={{ color }}
      {...props}
    >
      <g id="Layer_1-2">
        {/* D with inner hole */}
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="
            M409.16,16.24 h-26.96 V.43 h42.99 v12.97 l-28.54,56.14 h28.37 v15.8
            h-44.4 v-12.97 l28.54-56.14 Z
            M387.16,21.24 h16.96 v46.14 h-16.96 Z
          "
        />

        {/* B */}
        <path
          fill="currentColor"
          d="
            M465.61,65.47 c0,2.57-1.12,3.97-3.19,3.97 h-14.62 c-2.06,0-3.19-1.4-3.19-3.97
            v-16.88 h34.49 s.51-30.57.51-30.57 c-.5-10.99-5.94-17.77-13.81-17.77
            h-21.37 c-7.87,0-13.31,6.78-13.31,16.6 v51.9 c0,9.82,5.44,16.6,13.31,16.6
            h21.37 c7.87,0,13.31-6.78,13.31-16.6 v-13.56 h-13.5 v10.29 Z
            M444.61,20.13 c0-2.57,1.12-3.97,3.19-3.97 h14.62 c2.06,0,3.19,1.4,3.19,5.6
            l-.18,12.84 h-20.82 s0-14.47,0-14.47 Z
          "
        />

        {/* rest of the letters */}
        <path
          fill="currentColor"
          d="M311.8,85.34h-11.98V28.93l-13.74,42.9h-9.16l-13.74-42.9v56.41h-11.98V.73h13.92l16.38,49.6L297.89.73h13.92v84.62Z"
        />
        <path
          fill="currentColor"
          d="M369.9,73.15V17.92c0-10.06-4.81-17.13-11.87-17.63-.27-.02-.54-.03-.82-.03h-21.53c-.15,0-.3,0-.44,0-7.26.28-12.24,7.41-12.24,17.69v55.23c0,4.66.05,8.09,0,12.16h12.86l.16-19.79h20.97l.04,19.79h12.86c.05-3.34,0-7.27,0-12.19ZM323.05,65.55l-.03-12.08.04,12.08h-.01ZM357.04,53.31v.17h-21.17V21.4c0-2.74,1.07-4.23,3.04-4.23h15.1c1.97,0,3.04,1.49,3.04,4.23v31.91Z"
        />
        {/* ... other paths ... */}
        <line
          fill="none"
          stroke="currentColor"
          strokeMiterlimit={10}
          strokeWidth={2}
          y1="112.35"
          x2="111.39"
          y2="112.35"
        />
        <line
          fill="none"
          stroke="currentColor"
          strokeMiterlimit={10}
          strokeWidth={2}
          x1="367.37"
          y1="112.35"
          x2="478.75"
          y2="112.35"
        />
      </g>
    </svg>
  );
}
