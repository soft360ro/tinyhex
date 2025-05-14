import React from "react";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className="bg-accent h-9 w-9 rounded-lg flex items-center justify-center shadow-sm">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3H11V11H3V3Z" fill="#172554" className="text-primary" />
          <path d="M13 3H21V11H13V3Z" fill="#172554" className="text-primary" />
          <path d="M3 13H11V21H3V13Z" fill="#172554" className="text-primary" />
          <path d="M16 16.5C16 15.1193 17.1193 14 18.5 14C19.8807 14 21 15.1193 21 16.5C21 17.8807 19.8807 19 18.5 19C17.1193 19 16 17.8807 16 16.5Z" fill="#172554" className="text-primary" />
        </svg>
      </div>
      <span className="font-display font-bold text-xl text-primary">
        tiny<span className="text-accent font-extrabold">HEX</span>
      </span>
    </div>
  );
};

export default Logo;
