# Core Web Vitals Performance Report

| Metric            | v1 Broken | v2 Fixed | Improvement (Δ) |
| ----------------- | --------- | -------- | --------------- |
| FCP               | 6.9 s     | 2.8 s    | -4.1 s          |
| LCP               | 12.7 s    | 2.8 s    | -9.9 s          |
| CLS               | 0.451     | 0.108    | -0.343          |
| TBT               | 4,820 ms  | 1,220 ms | -3,600 ms       |
| Performance Score | 7         | 63       | +56             |

## Optimizations Applied

### Fix 1 - Font Loading

* Added preconnect for Google Fonts.
* Loaded font stylesheet asynchronously.
* Reduced render-blocking resources.

### Fix 2 - Hero Image Optimization

* Converted hero image from PNG to WebP.
* Added width and height attributes.
* Added fetchPriority="high".
* Removed lazy loading from above-the-fold image.

### Fix 3 - Prevent Layout Shifts

* Added width and height attributes to thumbnails and avatars.
* Reserved banner space using minHeight.

### Fix 4 - Improve TTI and TBT

* Deferred analytics initialization using setTimeout.
* Removed blocking work from initial page render.

### Fix 5 - Reduce Bundle Size

* Removed full lodash import.
* Replaced sorting logic with native JavaScript Array.sort().
