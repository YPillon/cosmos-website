import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

export function useScript(url) {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");

    script.src = url;
    script.type = "text/javascript";
    script.async = true;
    head.appendChild(script);

    return () => {
      head.removeChild(script);
    };
  }, [url]);
}
