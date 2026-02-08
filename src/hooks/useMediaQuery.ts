import * as React from "react";

export function useMediaQuery(query: string) {
  const [matches, setMatches] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    const media = window.matchMedia(query);

    // Set initial value
    setMatches(media.matches);

    // Create listener function
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Add listener
    media.addEventListener("change", listener);

    // Cleanup
    return () => {
      media.removeEventListener("change", listener);
    };
  }, [query]);

  // Return false during SSR to avoid hydration mismatch
  return mounted ? matches : false;
}

export function useIsDesktop() {
  return useMediaQuery("(min-width: 768px)");
}

export function useIsMobile() {
  return useMediaQuery("(max-width: 767px)");
}

export function usePrefersDark() {
  return useMediaQuery("(prefers-color-scheme: dark)");
}

export function useIsLandscape() {
  return useMediaQuery("(orientation: landscape)");
}