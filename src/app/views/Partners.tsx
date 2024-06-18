import Image from "next/image";
import React from "react";

const Partners = () => {
  return (
    <div className="w-full h-auto bg-white flex flex-col justify-center items-center text-blue-blueApple font-bold gap-4 pb-10">
      <Image
        alt="logo"
        src="/logo-blueApple-onlyApple.png"
        width={130}
        height={130}
      />

      <h4 className="font-bold text-lg">Trusted by +20 partners</h4>
      <div className="flex justify-center items-center gap-10">
        <Image alt="logo" src="/logo-notion.png" width={100} height={100} />
        <Image alt="logo" src="/logo_loom.png" width={100} height={100} />
        <Image alt="logo" src="/logo-ZapSign.png" width={100} height={100} />
        <Image alt="logo" src="/logo-discord.png" width={100} height={100} />
        <Image alt="logo" src="/logo-calendly.png" width={100} height={100} />
        <Image alt="logo" src="/logo-zoom.jpeg" width={100} height={100} />
      </div>
      <div className="flex justify-center items-center gap-10">
        <Image alt="logo" src="/logo-meta.jpeg" width={100} height={100} />
        <Image alt="logo" src="/logo-webflow.png" width={100} height={100} />
        <Image alt="logo" src="/logo-premier.png" width={100} height={100} />
        <Image alt="logo" src="/logo-miro.png" width={100} height={100} />
        <Image alt="logo" src="/logo-hopin.png" width={100} height={100} />
      </div>
    </div>
  );
};

export default Partners;
