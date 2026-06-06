import { onCLS, onFCP, onINP, onLCP, onTTFB } from "web-vitals";

export function reportVitals(
  onPerfEntry: (metric: any) => void
) {
  onCLS(onPerfEntry);
  onFCP(onPerfEntry);
  onINP(onPerfEntry);
  onLCP(onPerfEntry);
  onTTFB(onPerfEntry);
}