const Hero = () => {
  return (
    <img
      src="/hero.webp"
      alt="An inspiring hero image for our news feed"
      width={1200}
      height={630}
      fetchPriority="high"
      decoding="async"
      style={{
        width: "100%",
        height: "auto",
      }}
    />
  );
};

export default Hero;