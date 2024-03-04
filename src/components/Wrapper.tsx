import React from "react";

interface WrapperProps {
  children: React.ReactNode;
  border?: boolean;
}

const Wrapper = ({ children, border }: WrapperProps) => {
  return (
    <div className={` ${border ? "border-b-2 border-b-[#dde1e4]" : ""} py-24`}>
      <div className="max-w-5xl mx-auto">{children}</div>
    </div>
  );
};

export default Wrapper;
