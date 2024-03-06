import Wrapper from "../components/Wrapper";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  const serviceList = [
    {
      icon: "theme",
      title: "easy theme setup",
      description:
        "Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas fermentum.",
    },
    {
      icon: "pencil",
      title: "pixel perfect design",
      description:
        "Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas fermentum.",
    },
    {
      icon: "mobile",
      title: "responsive display",
      description:
        "Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas fermentum.",
    },
    {
      icon: "clock",
      title: "24/7 support",
      description:
        "Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas fermentum.",
    },
  ];
  return (
    <Wrapper id="services">
      <div className="flex items-center gap-4">
        <div className="w-[10px] h-[35px] bg-[#dee5eb]" />
        <h2 className="uppercase text-4xl tracking-tight font-[400] text-text-dark-primary">
          what we do.
        </h2>
      </div>
      <div className="grid grid-cols-4 place-items-center gap-y-12 mt-16 gap-4">
        {[...serviceList, ...serviceList].map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </Wrapper>
  );
};

export default Services;
