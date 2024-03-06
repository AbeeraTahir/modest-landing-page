import { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    {
      name: "Home",
      link: "#",
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
      link: "#services",
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
    <header className="text-[#a4aead] h-[3.75rem] 2xl:h-[4.75rem] bg-[#1d2126] w-full px-[9.75rem] 2xl:px-[18.4rem] flex justify-between items-center fixed top-0 z-10">
      <div className="logo">
        <img src="/logo.png" alt="modest logo" />
      </div>
      <nav>
        <ul className="flex gap-8 items-center text-[0.875rem] font-[500]">
          {links.map((link) => (
            <li key={link.link}>
              <a
                href={link.link}
                className={`px-2 py-1 rounded-[0.185rem] hover:border hover:border-[#a4aead] transition-all duration-300 ease-in uppercase ${
                  activeSection === link.link.slice(1)
                    ? "border border-primary-color text-primary-color hover:border hover:border-primary-color"
                    : "border border-transparent"
                }`}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
