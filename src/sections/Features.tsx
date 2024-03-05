import React from "react";
import Wrapper from "../components/Wrapper";
import FeatureCard from "../components/FeatureCard";

const Features = () => {
  const features = [
    {
      pic: "product",
      title: "product design: eames chairs",
      description:
        "Eames designs are certainly iconic. Everyone of us know at least two or three of their famous chairs. I would even risk saying that most of us dream about having a nice Eames.",
    },
    {
      pic: "logos",
      title: "Elegant and Colorful Logos",
      description:
        "I’ve always found logo design to be one of the most challenging things to get right. There’s so much that a logo can say about a brand without actually saying it.",
    },
    {
      pic: "showcase",
      title: "product design: eames chairs",
      description:
        "It’s always interesting to see another designer’s take on a famous website, app or even physical product. Different designers add their own personality and style.",
    },
  ];
  return (
    <Wrapper dark>
      <div className="flex items-center gap-4">
        <div className="w-[10px] h-[35px] bg-[#4e5a62]" />
        <h2 className="uppercase text-4xl tracking-tight font-[400] text-white">
          features.
        </h2>
      </div>
      <div className="flex items-center mt-11 gap-8">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </Wrapper>
  );
};

export default Features;
