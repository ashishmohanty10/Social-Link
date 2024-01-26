import React from "react";
import Profile from "./assets/Profile.jpg";
import { List } from "./components/LinkList";

const App = () => {
  return (
    <div>
      <div className="container flex items-center justify-center w-full h-screen">
        <div className="bg-darkGrey w-[375px] h-[550px] rounded-lg">
          <div className="flex flex-col items-center justify-start">
            <div className="flex justify-center items-center mt-5 mb-2 w-[100px] overflow-hidden rounded-full object-center">
              <img src={Profile} alt="" className="w-[200px]" />
            </div>

            <div className="my-3 text-center">
              <h1 className="text-xl font-bold text-white">Ashish Mohanty</h1>
              <p className="mb-4 text-sm font-semibold text-primary">
                India, West Bengal
              </p>

              <p className="text-sm text-white font-base">
                "A passionate frontend developer from India{" "}
                <span className="font-medium text-primary"> (🇮🇳)</span>"
              </p>
            </div>

            <div className="flex flex-col items-center justify-center my-3">
              {List.map(({ href, title, img }) => (
                <a
                  href={href}
                  target="_blank"
                  className="group cursor-pointer grid grid-cols-2 justify-center  items-start w-[250px]  py-2 px-10 bg-grey rounded-lg mb-5 hover:bg-primary duration-100:"
                  key={href}
                >
                  <div className="flex items-center justify-center">
                    <img src={img} alt="" className="w-[20px]" />
                  </div>

                  <li
                    className="group-hover:text-offBlack list-none text-sm uppercase font-semibold text-white group-[hover:text-offblack] tracking-normal"
                    key={href}
                  >
                    {title}
                  </li>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
