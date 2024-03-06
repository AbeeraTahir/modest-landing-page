import Wrapper from "../components/Wrapper";

const Work = () => {
  const workList = ["work1", "work2", "work3", "work4", "work5", "work6"];
  return (
    <Wrapper id="work" dark>
      <div className="flex items-center gap-4">
        <div className="w-[10px] h-[35px] bg-[#4e5a62]" />
        <h2 className="uppercase text-4xl tracking-tight font-[400] text-white">
          lovely work.
        </h2>
      </div>
      <div className="flex flex-wrap items-center mt-11 gap-5">
        {workList.map((work) => (
          <div
            key={work}
            className="w-[327px] overlay_container cursor-pointer">
            <img src={`/src/assets/work/${work}.png`} alt={work} />
            <div className="work_overlay">
              <div className="flex flex-col">
                <div className="bg-[##3b6062] bg-opacity-50 absolute top-0 left-0 w-full h-[85%] flex justify-center items-center">
                  <img src="/src/assets/plus.png" alt="plus" />
                </div>
                <div className="h-12 absolute bottom-0 top-auto w-full mt-auto mb-0 bg-text-dark-primary flex items-center uppercase text-[1rem] text-white px-4 text-opacity-90 tracking-tight">
                  partnership guidelines
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default Work;
