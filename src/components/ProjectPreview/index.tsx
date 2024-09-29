import Image from "next/image";

const ProjectPreview = () => {
  const title: string = "E-commerce Kalunga.com";
  const description: string =
    "Creating the largest e-commerce of school supplies and stationery in Brazil.";

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-4xl">A snapshot of my work.</h1>

      <div className="p-4 rounded-xl ring-1 ring-gray-200 bg-white space-y-2 shadow-lg">
        <h2 className="font-bold text-3xl">
          Pho Voorhees
        </h2>
        <p>
          <b>Tech used:</b> HTML, CSS, JavaScript
        </p>
        <p> 
          Designed and developed restaurant website to increase sales during COVID-19 pandemic.
        </p>
      </div>

      <div className="p-4 rounded-xl ring-1 ring-gray-200 bg-white space-y-2 shadow-lg">
        <h2 className="font-bold text-3xl">
          Pho Voorhees
        </h2>
        <p>
          <b>Tech used:</b> HTML, CSS, JavaScript
        </p>
        <p> 
          Designed and developed restaurant website to increase sales during COVID-19 pandemic.
        </p>
      </div>

      <div className="p-4 rounded-xl ring-1 ring-gray-200 bg-white space-y-2 shadow-lg">
        <h2 className="font-bold text-3xl">
          Pho Voorhees
        </h2>
        <p>
          <b>Tech used:</b> HTML, CSS, JavaScript
        </p>
        <p> 
          Designed and developed restaurant website to increase sales during COVID-19 pandemic.
        </p>
      </div>

      <div className="p-4 rounded-xl ring-1 ring-gray-200 bg-white space-y-2 shadow-lg">
        <h2 className="font-bold text-3xl">
          Pho Voorhees
        </h2>
        <p>
          <b>Tech used:</b> HTML, CSS, JavaScript
        </p>
        <p> 
          Designed and developed restaurant website to increase sales during COVID-19 pandemic.
        </p>
      </div>

    </div>
  );
};

export default ProjectPreview;
