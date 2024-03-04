import React from "react";

const Navbar = () => {
  const links = [
    {
      name: "Home",
      link: "",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Work",
      link: "#work",
    },
    {
      name: "Team",
      link: "#team",
    },
    {
      name: "Services",
      link: "#about",
    },
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];
  return (
    <header className="text-[#a4aead] h-[3.75rem] 2xl:h-[4.75rem] bg-[#1d2126] w-full px-[9.75rem] 2xl:px-[23.4rem] flex justify-between items-center">
      <div className="logo">
        <img src="/src/assets/logo.png" alt="modest logo" />
      </div>
      <nav>
        <ul className="flex gap-8 items-center text-[0.875rem] font-[500]">
          {links.map((link) => (
            <li
              key={link.link}
              className="hover:border-[1.975px] hover:border-[#a4aead] px-2 py-1 rounded-[0.185rem] uppercase">
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
