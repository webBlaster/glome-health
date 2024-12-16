"use client";
import FooterSection from "./components/sections/footer";
import HomeSection from "./components/sections/home_section";
import SimplerAndSaferSection from "./components/sections/simpler_and_safer_section";
import TheChallengeSection from "./components/sections/the_challenge_section";
import WithSupportFromSection from "./components/sections/with_support_from_section";

function Home() {
  return (
    <>
      <div className="bg-[#F5F1E9] h-[100vh] w-full relative">
        <HomeSection />
      </div>
      <div className="bg-[#F5F1E9] w-full relative">
        <TheChallengeSection />
      </div>

      <div className="bg-[#F5F1E9] w-full relative">
        <SimplerAndSaferSection />
      </div>
      <div>
        <WithSupportFromSection />
      </div>
      <div>
        <FooterSection />
      </div>
    </>
  );
}

export default Home;
