import React from "react";

const Results = () => {
  return (
    <div className="mt-20 md:flex hidden md: flex-col md:px-32 items-center justify-center mb-20">
      <h1 className="px-10 text-3xl font-bold uppercase"> Veja os <span className="text-cyan-500"> resultados.</span></h1>
      <video src="./results-video.mp4" autoPlay muted loop playsInline></video>
      <a href="https://chat.whatsapp.com/KCWDPNu8txt9yYRxXELtED" className="p-2 text-white bg-purple-800 w-36 rounded-sm flex items-center justify-center font-bold">
        Saiba mais!
      </a>
    </div>
  );
};

export default Results;
