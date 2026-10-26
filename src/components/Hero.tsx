import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();
  return (
    <div
      id="hero"
      className="min-h-screen flex justify-center items-center text-4xl font-bold"
    >
      Welcome to My Portfolio
    </div>
  );
}

export default Hero;
