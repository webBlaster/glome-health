"use client";
import { useState } from "react";
import { JSX, SVGProps } from "react";
import { toast } from "sonner";

function MoonIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

function SunIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}

function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  let [email, setEmail] = useState("");
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const subscribe = async () => {
    // Building the query string directly
    const queryParams = new URLSearchParams({
      EMAIL: email,
      u: "83ab1dd4d6213d960c29718ba",
      id: "f7544e59af",
      f_id: "00c3c2e1f0",

      b_83ab1dd4d6213d960c29718ba_f7544e59af: "",
      subscribe: "Subscribe",
      _: Date.now().toString(),
    }).toString();

    const url = `https://gmail.us13.list-manage.com/subscribe/post-json?${queryParams}`;

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      console.log(response);
    } catch (error) {
      console.error("Subscription failed:", error);
    }
  };

  return (
    <div
      className={`h-screen w-[100%] flex flex-col justify-between items-center ${
        isDarkMode ? "bg-primary text-white" : "bg-white text-primary"
      } p-5`}
    >
      <div
        className={`absolute space-x-2 right-5 ${
          isDarkMode ? "text-white" : "text-primary"
        }`}
      >
        <button
          onClick={toggleDarkMode}
          className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-muted text-muted-foreground transition-colors hover:bg-muted/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 dark:bg-muted-foreground dark:text-muted"
        >
          {isDarkMode ? (
            <MoonIcon className="h-5 w-5" />
          ) : (
            <SunIcon className="h-5 w-5" />
          )}
          <span className="sr-only">Toggle dark mode</span>
        </button>
      </div>

      <div className="flex justify-evenly items-center w-[100%] md:w-[50%] mx-auto pt-[5vh]">
        <img
          src="/Glome Health Logo, Light on Transparent Bg.png"
          alt="Glome Health"
          className={` w-1/2 md:w-1/3 ${
            isDarkMode ? "" : "filter grayscale brightness-0 contrast-200"
          }`}
        />
        <div
          className={`h-[10vh] md:h-[15vh] rounded w-[5px] mb-5 md:mb-8 ${
            isDarkMode ? "bg-white" : "bg-primary"
          }`}
        >
          .
        </div>

        <h1 className="font-extrabold text-[20px] md:text-[40px] leading-[1.2] ml-[2%]">
          Simpler, Safer
          <br /> Home Dialysis.
        </h1>
      </div>

      <div className="mx-auto w-[90%] md:w-[40%]">
        <div className="text-center leading-3">
          <p className=" mb-4 text-left font-bold dark:">Keep up with us</p>
          <p className=" mb-4 text-left">
            Get news, photos, events, and business updates
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              subscribe();
            }}
            className={`flex justify-center rounded-full border-2 p-[2px] ${
              isDarkMode
                ? "bg-primary text-white border-white"
                : "bg-white text-primary border-primary"
            }`}
          >
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address*"
              required
              className={`rounded-l-full text-[10px] md:text-[16px] px-4 py-2 w-[65%] ${
                isDarkMode ? "bg-primary text-white" : "bg-white text-primary"
              }`}
            />
            <button
              type="submit"
              className={`rounded-full md:px-8 py-2 text-[10px] md:text-[16px] md:py-4 w-[35%] ${
                isDarkMode ? "bg-white text-primary" : "bg-primary text-white"
              }`}
            >
              SIGN UP
            </button>
          </form>
        </div>
      </div>

      <footer className=" text-sm pb-10 overflow-scroll w-full">
        <div className="flex justify-between w-[90%] md:w-[40%] mx-auto">
          <div className="w-[30%]">
            <h3 className="font-bold text-[16px] mb-2">ABOUT</h3>
            <p>
              Glome Health is a UMN startup developing products & services to
              make home dialysis more accessible for patients everywhere.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-[16px] mb-2">LOCATIONS</h3>
            <p>
              336 Lilac Ln,
              <br />
              Shoreview, MN
              <br />
              55126, USA
            </p>
          </div>
          <div>
            <h3 className="font-bold text-[16px] mb-2">FOLLOW</h3>
            <p>
              <a
                href="https://www.linkedin.com/company/glomehealth/"
                target="_blank"
              >
                LinkedIn
              </a>
              <br />
              <a href="https://x.com/GlomeHealth" target="_blank">
                Twitter
              </a>
              <br />
              <a href="https://medium.com/@glomehealth" target="_blank">
                Medium
              </a>
            </p>
          </div>
        </div>
        <div className="text-center mt-10 w-full">
          <p>© MMXXIV - Glome Health Inc. - All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
