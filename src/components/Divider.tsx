interface DividerProps {
    fillColor?: string;
    className?: string;
  }
  
  const Divider = ({ fillColor = "white", className = "" }: DividerProps) => {
    return (
      <div className={`w-full overflow-hidden ${className}`}>
        <svg
          className="w-full"
          viewBox="0 0 1440 79"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M-100 79C-100 79 218.416 23.165 693.5 23.165C1168.58 23.165 1487 79 1487 79V0H-100V79Z"
            fill={fillColor}
          />
        </svg>
      </div>
    );
  };
  
  export default Divider; 