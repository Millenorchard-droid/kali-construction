import React from "react";

// Maps site paths to artifact-safe plain hashes: "/" -> #home, "/about" -> #about, "/commercial#enquiry" -> #commercial
export function toHash(href: string) {
  const path = href.split("#")[0].replace(/^\//, "");
  return "#" + (path === "" ? "home" : path);
}

export default function Link({ href, children, ...rest }: any) {
  return (
    <a href={toHash(String(href))} {...rest}>
      {children}
    </a>
  );
}
