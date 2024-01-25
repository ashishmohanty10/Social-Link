import React from "react";
import Profile from "./assets/Profile.jpg";
import { List } from "./components/LinkList";

const App = () => {
  return (
    <div>
      <div className="container h-screen w-full flex justify-center items-center">
        <div className="bg-darkGrey w-[375px] h-[600px] rounded-lg">
          <div className="flex flex-col justify-start items-center">
            <div className="flex justify-center items-center mt-5 mb-2 w-[100px] overflow-hidden rounded-full object-center">
              <img src={Profile} alt="" className="w-[200px]" />
            </div>

            <div className="my-3 text-center">
              <h1 className="font-bold text-white text-xl">Ashish Mohanty</h1>
              <p className="font-semibold text-sm text-primary mb-4">
                India, West Bengal
              </p>

              <p className="font-base text-sm text-white">
                "A passionate frontend developer from India{" "}
                <span className="text-primary font-medium"> (🇮🇳)</span>"
              </p>
            </div>

            <div className="flex flex-col justify-center items-center my-3">
              {List.map(({ href, title }) => (
                <li
                  className="cursor-pointer list-none text-sm uppercase py-2 px-10 items-stretch bg-grey rounded-lg font-semibold text-white hover:bg-primary hover:text-offBlack duration-100 mb-5 w-[300px] text-center"
                  key={href}
                >
                  <a href={href} target="_blank">
                    {title}
                  </a>
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
