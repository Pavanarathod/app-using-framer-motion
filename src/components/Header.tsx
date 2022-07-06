import React from "react";

type Props = {};

const Header = (props: Props) => {
  const links = [
    {
      lnk: "/",
      text: "Home",
    },
    {
      lnk: "/blog",
      text: "Blog",
    },
    {
      lnk: "/portfolio",
      text: "Portfolio",
    },
  ];
  return (
    <header className="h-16 bg-gray-100 shadow-xl flex items-center">
      <nav className="container max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-emerald-500 font-bold text-2xl">Pavan</h1>
          <div>
            <ul className="flex items-center space-x-16">
              {links.map((item) => (
                <li key={item.text}>
                  <a href={item.lnk}>{item.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
