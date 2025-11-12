"use client";
import * as React from "react";

type Props = React.SVGProps<SVGSVGElement> & { label?: string; size?: number };

export default function LogoBird({ label = "LinguaFly", size = 36, ...rest }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      aria-label={label}
      role="img"
      {...rest}
    >
      {/* тело птицы */}
      <path
        d="M35 110c35-55 105-70 130-55-28 8-40 22-44 31 18 2 31 10 36 18-22-8-43-3-56 6 2 9 1 19-3 27-18 1-35-6-48-27-6 5-10 11-12 18-2-7-2-13-3-18z"
        fill="#F4F9FF"
        stroke="#0f2b4f"
        strokeWidth="4"
      />
      {/* крыло */}
      <path d="M80 95c18-14 44-22 63-22-20 6-34 19-40 36" fill="#d7e6ff" />
      {/* глаз */}
      <circle cx="77" cy="92" r="5" fill="#0f2b4f"/>
      {/* клюв */}
      <path d="M64 96l-16 6 16 6c4-4 4-8 0-12z" fill="#ffc66d" stroke="#0f2b4f" strokeWidth="2"/>
      {/* ключ с надписью lingua в клюве */}
      <g transform="translate(40,110) rotate(-10)">
        <rect x="35" y="10" width="86" height="18" rx="9" fill="#1E3F6E" />
        <text x="78" y="24" textAnchor="middle" fontSize="14" fontWeight="700" fill="#ffffff" fontFamily="Segoe UI,Arial">lingua</text>
        {/* бородка ключа */}
        <circle cx="20" cy="19" r="12" fill="#1E3F6E"/>
        <rect x="8" y="16" width="8" height="6" rx="2" fill="#ffffff"/>
        {/* зубья */}
        <rect x="122" y="10" width="5" height="18" fill="#1E3F6E"/>
        <rect x="130" y="10" width="5" height="12" fill="#1E3F6E"/>
      </g>
    </svg>
  );
}
