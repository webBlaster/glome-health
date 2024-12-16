const WithSupportFromSection = () => {
  return (
    <div className="w-full h-full bg-[#F5F1E9] text-center py-40">
      <div className="text-center p-5">
        <p className="text-primary p-5">WITH SUPPORT FROM</p>
      </div>
      <div className="mx-auto w-[90%] border border-dashed border-primary rounded-xl hidden md:block">
        <div className="flex justify-evenly">
          <div className="w-1/3 border-r border-dashed border-primary p-10">
            <img
              className="mx-auto h-40 p-5"
              src="/university of Minnesota.png"
            />
            <p>University of Minnesota</p>
          </div>
          <div className="w-1/3 border-r border-dashed border-primary p-10">
            <img className="mx-auto h-40 p-5" src="/NSF.png" />
            <p>National Science Foundation</p>
          </div>
          <div className="w-1/3 p-10">
            <img className="mx-auto h-40 p-5" src="/NIH.png" />
            <p>National Institutes of Health</p>
          </div>
        </div>
        <div className="w-full flex justify-evenly">
          <div className="w-1/3 border-t border-r border-dashed border-primary p-10">
            <img
              className="mx-auto h-40 p-5"
              src="/PDIC Logo for Glome Health, Website.png"
            />
            <p>The Pediatric Device Innovation Consortium</p>
          </div>
          <div className="w-1/3 border-t border-r border-dashed border-primary p-10">
            <img className="mx-auto h-40 p-5" src="/logo.svg" />
            <p>Translational Product Development Fund</p>
          </div>
          <div className="w-1/3 border-t border-dashed border-primary p-10">
            <img className="mx-auto h-40 p-5" src="/logo.svg" />
            <p>Launch Minnesota</p>
          </div>
        </div>
      </div>
      {/* Mobile version */}
      <div className="mx-auto w-[90%] border border-dashed border-primary rounded-xl md:hidden">
        <div className="w-full border-b border-dashed border-primary p-10">
          <img
            className="mx-auto h-40 p-5"
            src="/university of Minnesota.png"
          />
          <p>University of Minnesota</p>
        </div>
        <div className="w-full border-b border-dashed border-primary p-10">
          <img className="mx-auto h-40 p-5" src="/NSF.png" />
          <p>National Science Foundation</p>
        </div>
        <div className="w-full p-10">
          <img className="mx-auto h-40 p-5" src="/NIH.png" />
          <p>National Institutes of Health</p>
        </div>

        <div className="w-full border-t border-dashed border-primary p-10">
          <img
            className="mx-auto h-40 p-5"
            src="/PDIC Logo for Glome Health, Website.png"
          />
          <p>The Pediatric Device Innovation Consortium</p>
        </div>
        <div className="w-full border-t border-dashed border-primary p-10">
          <img className="mx-auto h-40 p-5" src="/logo.svg" />
          <p>Translational Product Development Fund</p>
        </div>
        <div className="w-full border-t border-dashed border-primary p-10">
          <img className="mx-auto h-40 p-5" src="/logo.svg" />
          <p>Launch Minnesota</p>
        </div>
      </div>
    </div>
  );
};

export default WithSupportFromSection;
