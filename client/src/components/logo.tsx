import React from "react";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className="text-accent h-8 w-8 rounded flex items-center justify-center">
        <i className="fas fa-code text-2xl text-primary"></i>
      </div>
      <span className="font-display font-bold text-xl text-primary">
        tiny<span className="text-accent">HEX</span>
      </span>
    </div>
  );
};

export default Logo;
