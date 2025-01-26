/// implement a logo component that will be used in the header of the application with nextjs

import React from "react";
import Image from "next/image";

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <Image src="/FG-logo.png" alt="Fin Ghadi Logo" width={50} height={50} />
    </div>
  );
};

export default Logo;
