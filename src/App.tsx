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

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBanner(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  // TBT/TTI Fix
  useEffect(() => {
    const initAnalytics = () => {
      console.log("Simulating heavy analytics initialization...");

      const start = performance.now();

      while (performance.now() - start < 600) {
        // heavy work
      }

      console.log("Analytics initialized.");
    };

    setTimeout(initAnalytics, 0);
  }, []);

  if (loading) {
    return <SkeletonLoader />;
  }

  return (
    <div>
      <div style={{ minHeight: "90px" }}>
        {showBanner && <AdBanner />}
      </div>

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