import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import ArticleGrid from "./components/ArticleGrid";
import Sidebar from "./components/Sidebar";
import SkeletonLoader from "./components/SkeletonLoader";

const AdBanner = () => {
  return (
    <div
      style={{
        height: "90px",
        background: "orange",
        textAlign: "center",
        padding: "16px",
      }}
    >
      This is a late-loading ad!
    </div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);
  const [showBanner, setShowBanner] = useState(false);

  // Simulated data fetch for skeleton loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Late-loading banner (intentional CLS anti-pattern)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBanner(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  // Intentional main-thread blocking task
  useEffect(() => {
    console.log("Simulating heavy analytics initialization...");

    const start = performance.now();

    while (performance.now() - start < 600) {
      // Intentionally block the UI
    }

    console.log("Analytics initialized.");
  }, []);

  if (loading) {
    return <SkeletonLoader />;
  }

  return (
    <div>
      {showBanner && <AdBanner />}

      <Hero />

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "20px",
          alignItems: "flex-start",
        }}
      >
        <div style={{ flex: 3 }}>
          <ArticleGrid />
        </div>

        <div style={{ flex: 1 }}>
          <Sidebar />
        </div>
      </div>

      <div
        id="infinite-scroll-trigger"
        style={{
          textAlign: "center",
          padding: "30px",
          marginTop: "30px",
          borderTop: "1px solid #ddd",
        }}
      >
        Load More...
      </div>
    </div>
  );
}

export default App;