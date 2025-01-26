/// implement a logo component that will be used in the header of the application with nextjs

import React from "react";
import Image from "next/image";

//size props
//width and height props

interface LogoProps {
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ width = 100, height = 100 }) => {
  return (
    <div>
      <Image
        src="/FG-logo2.png"
        alt="Fin Ghadi Logo"
        width={width}
        height={height}
      />
    </div>
  );
};

export default Logo;
