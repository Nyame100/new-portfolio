import Link from "next/link";
import React from "react";

const Button = ({ text, link }: { text: string; link: string }) => {
  return (
    <Link href={link} className="btn" download target="_blank">
      {text}
    </Link>
  );
};

export const Button2 = ({ text, link }: { text: string; link: string }) => {
  return (
    <Link href={link} className="btn" target="_blank">
      {text}
    </Link>
  );
};

export default Button;
