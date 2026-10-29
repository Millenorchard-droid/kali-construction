import { useEffect, useState } from "react";

export function currentRoute() {
  const h = window.location.hash.replace(/^#/, "");
  return h === "" ? "home" : h;
}

export function usePathname() {
  const [r, setR] = useState(currentRoute());
  useEffect(() => {
    const on = () => setR(currentRoute());
    window.addEventListener("hashchange", on);
    return () => window.removeEventListener("hashchange", on);
  }, []);
  return r === "home" ? "/" : "/" + r;
}
