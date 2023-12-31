import { useEffect, useState } from "react";

export const useOrgin = () => {
  const [mounted, setMounted] = useState(false);

  const orgin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return "";
  }

  return orgin;
};
