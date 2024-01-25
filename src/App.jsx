import React from "react";
import Profile from "./assets/Profile.jpg";
import { List } from "./components/LinkList";

const App = () => {
  return (
    <div>
      <div className="container h-screen w-full flex justify-center items-center">
        <div className="bg-darkGrey w-[375px] h-[550px] rounded-lg">
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
              {List.map(({ href, title, img }) => (
                <a
                  href={href}
                  target="_blank"
                  className="group cursor-pointer grid grid-cols-2 justify-evenly gap-x-2 items-start w-[300px]  py-2 px-10 bg-grey rounded-lg mb-5 hover:bg-primary duration-100:"
                  key={href}
                >
                  <div className="flex justify-center items-center">
                    <img src={img} alt="" className="w-[20px]" />
                  </div>

                  <li
                    className="group-hover:text-offBlack list-none text-sm uppercase  items-stretch font-semibold text-white group-[hover:text-offblack]"
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
