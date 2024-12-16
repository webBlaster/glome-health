const TheChallengeSection = () => {
  return (
    <div className="w-full bg-primary py-40">
      <div className="text-center p-5">
        <div className="w-20 h-20 bg-[#F2D872] m-auto p-5 rounded-full"></div>
        <p className="text-[#F2D872] p-5">THE CHALLENGE</p>
      </div>
      <div className="w-full h-full bg-primary relative md:flex items-center justify-center p-5 md:p-10">
        <div className="w-full md:w-1/2 p-5 md:p-10">
          <h1 className="text-[#F5F1E9] text-4xl md:text-[5rem] leading-none p-5 font-[600]">
            90% of
            <br /> dialysis today
            <br /> occurs in centers.
          </h1>
          <p className="text-[#F5F1E9] p-5 text-lg font-extralight">
            Patients travel 3X weekly to a center
            <br /> for dialysis, spending 20 hours/week.
            <br /> This current model is complex, labor
            <br /> intensive and unsustainably expensive.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center p-5 md:p-10">
          <img src={"/Image 2.png"} alt={""} className="p-5" />
        </div>
      </div>

      <div className="w-full h-full bg-primary relative md:flex items-center justify-center p-5 md:p-10">
        <div className="w-full md:w-1/2 p-5 md:p-10">
          <h1 className="text-[#F5F1E9] text-4xl md:text-[5rem] leading-none p-5 font-[600]">
            A better
            <br /> alternative,
            <br /> limited by
            <br /> infections
          </h1>
          <p className="text-[#F5F1E9] p-5 text-lg font-extralight">
            There’s an alternative modality known as{" "}
            <span className="font-[600]">
              peritoneal
              <br /> dialysis (PD)
            </span>
            . With PD, patients dialyze at home by
            <br /> themselves, saving hours of travel time weekly and
            <br /> improving patient freedom.
          </p>
          <p className="text-[#F5F1E9] p-5 text-lg font-extralight">
            Despite the potential benefits, &lt; 10% of patients use
            <br /> this method with adoption primarily limited by a high
            <br /> risk of infectious complications.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center p-5 md:p-10">
          <img src={"/Image 1.png"} alt={""} className="p-5" />
        </div>
      </div>
    </div>
  );
};

export default TheChallengeSection;
