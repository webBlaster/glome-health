const FooterSection = () => {
  return (
    <div className="w-full py-20 bg-primary px-10 md:px-40">
      <div className="w-full hidden md:flex justify-between pt-40">
        <div className="w-[40%] text-left text-[#F5F1E9] mr-80">
          <img
            className=""
            src="/Glome Health Logo, Light-beige 1.png"
            alt="logo"
          />
          <p className="p-5 text-xs ml-5 leading-6">
            336 Lilac Lane,
            <br />
            Shoreview, MN 55126
          </p>
          <p className="p-5 text-xs ml-5 leading-6">
            4, Ayanboye Street, Anthony Village,
            <br /> Lagos State, Nigeria.
          </p>
        </div>

        <div className="w-[30%] text-[#F5F1E9] mr-20">
          <h2 className="text-xs pb-1">RESOURSES</h2>
          <ul className="*:py-3 *:text-xl font-[600]">
            <li>Latest News</li>
            <li>Research</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Clinical Trials</li>
          </ul>
        </div>

        <div className="w-[30%] text-[#F5F1E9]">
          <h2 className="text-xs pb-1">FOLLOW US</h2>
          <ul className="*:py-3 *:text-xl font-[600]">
            <li>LinkedIn</li>
            <li>X (Twitter)</li>
            <li>Journal</li>
          </ul>
        </div>
      </div>

      <div className="w-full hidden md:flex justify-start text-left pt-20">
        <div className="text-left text-[#F5F1E9] mr-[17.6rem]">
          <h1 className="text-xs pb-1 ml-10">
            © MMXXIV - Glome Health Inc. - All Rights Reserved
          </h1>
        </div>

        <div className="text-[#F5F1E9] mr-[14.6rem]">
          <h2 className="text-xs pb-1">Privacy Policy</h2>
        </div>

        <div className="text-[#F5F1E9]">
          <h2 className="text-xs pb-1">Terms of Service</h2>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="w-full pt-40 md:hidden">
        <div className="w-full text-left text-[#F5F1E9]">
          <img
            className=""
            src="/Glome Health Logo, Light-beige 1.png"
            alt="logo"
          />
          <p className="py-5 text-xs leading-6">
            336 Lilac Lane,
            <br />
            Shoreview, MN 55126
          </p>
          <p className="py-5 text-xs leading-6">
            4, Ayanboye Street, Anthony Village,
            <br /> Lagos State, Nigeria.
          </p>
        </div>

        <div className="w-full text-[#F5F1E9] mr-20">
          <h2 className="text-xs pb-1">RESOURSES</h2>
          <ul className="*:py-3 *:text-xl font-[600]">
            <li>Latest News</li>
            <li>Research</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Clinical Trials</li>
          </ul>
        </div>

        <div className="w-full text-[#F5F1E9]">
          <h2 className="text-xs pb-1">FOLLOW US</h2>
          <ul className="*:py-3 *:text-xl font-[600]">
            <li>LinkedIn</li>
            <li>X (Twitter)</li>
            <li>Journal</li>
          </ul>
        </div>
      </div>

      <div className="w-full flex md:hidden justify-start text-left pt-20 gap-8">
        <div className="text-left text-[#F5F1E9]">
          <h1 className="text-xs pb-1">
            © MMXXIV - Glome Health Inc. - All Rights Reserved
          </h1>
        </div>

        <div className="text-[#F5F1E9]">
          <h2 className="text-xs pb-1">Privacy Policy</h2>
        </div>

        <div className="text-[#F5F1E9]">
          <h2 className="text-xs pb-1">Terms of Service</h2>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
