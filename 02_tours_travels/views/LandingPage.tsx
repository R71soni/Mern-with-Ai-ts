import HeroSlider from "@/components/HeroSlider";
import Collections from "@/views/Collections";

// Moved to views/ to avoid conflict with Next.js Pages Router.
// The pages/ directory is reserved by Next.js and causes mongoose
// to be bundled for the browser (breaking the build).
const LandingPage = () => {
  return (
    <div>
      <HeroSlider />
      <Collections />
    </div>
  );
};

export default LandingPage;
