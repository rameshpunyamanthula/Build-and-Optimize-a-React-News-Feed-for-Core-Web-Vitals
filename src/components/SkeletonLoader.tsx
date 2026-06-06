// src/components/SkeletonLoader.tsx

const SkeletonLoader = () => {
  return (
    <div>
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          key={index}
          style={{
            height: "120px",
            background: "#e5e5e5",
            marginBottom: "10px",
            borderRadius: "8px",
          }}
        />
      ))}
    </div>
  );
};

export default SkeletonLoader;