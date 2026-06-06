// src/components/Hero.tsx

const Hero = () => {
  return (
    <img
      src="/hero.png"
      alt="Hero"
      loading="lazy"
      style={{
        width: "100%",
        height: "auto",
      }}
    />
  );
};

export default Hero;