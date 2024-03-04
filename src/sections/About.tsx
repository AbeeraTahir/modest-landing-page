import React from "react";
import AboutCard from "../components/AboutCard";

const About = () => {
  const aboutList = [
    {
      number: "01",
      title: "Dedication to the customers",
      description:
        "Integer vel lacus non dui ullamcorper venenatis. Aliquam vitae tristique nisi, vitae ullamcorper risus.",
    },
    {
      number: "02",
      title: "working closely with our clients",
      description:
        "Sed blandit nisi urna, sed pellentesque enim consectetur vitae. Suspendisse ut vehicula nibh.",
    },
    {
      number: "03",
      title: "increase happiness",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, cum obcaecati? Eos.",
    },
  ];

  const socialMediaIcons = [
    { name: "facebook", url: "https://www.facebook.com" },
    { name: "twitter", url: "https://twitter.com" },
    { name: "google", url: "https://www.google.com" },
    { name: "dribble", url: "https://dribbble.com" },
    { name: "behance", url: "https://www.behance.net" },
  ];

  return (
    <section id="about" className="px-[9.75rem] py-24">
      <div className="flex items-center gap-4">
        <div className="w-[10px] h-[35px] bg-[#dee5eb]" />
        <h2 className="uppercase text-4xl tracking-tight font-[400] text-text-dark-primary">
          we are modest.
        </h2>
      </div>
      <div className="flex mt-11 gap-8">
        <div className="flex flex-col gap-11 max-w-xl">
          <div className="flex flex-col gap-8 text-text-dark-secondary text-[1rem]">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi
              metus, tristique ndolor non, ornare sagittis dolor. Nulla
              vestibulu lacus sed molestie gravida. Crferm entum quismagna
              congue, vel sodales arcu vestibulum. Nunc lobortis dui magna, quis
              lacusullamcorper at.{" "}
            </p>
            <p>
              Phasellus sollicitudin ante eros ornare, sit amet luctus lorem
              semper. Suspendisse posuere, quamdictum consectetur, augue metus
              pharetra tellus, eu feugiatloreg egetnisi. Cras ornare bibendum
              ante, ut bibendum odio convallis eget. vel sodales arcu vestibulum
            </p>
          </div>
          <div className="flex items-center">
            {socialMediaIcons.map(({ name, url }) => (
              <a href={url} target="__blank" key={name}>
                <div className="bg-[#c8cdd0] hover:bg-[#d0d5d9] w-[60px] h-[60px] flex justify-center items-center border border-whit">
                  <img src={`/src/assets/${name}.png`} alt={name} />
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-9">
          {aboutList.map((item) => (
            <AboutCard key={item.number} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
