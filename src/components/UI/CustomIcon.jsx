import React from "react";
import * as LucideIcons from "lucide-react";

const CustomIcon = ({
  icon, // React Icon (ex: FaUser, MdHome)
  name, // Lucide Icon String name (ex: "Laptop")
  color = "text-white",
  bg = "bg-[#224248] ",
  size = 24,
  rounded = "rounded-xl",
  className = "",
}) => {
 // check React icon or Lucide Icons
  const IconComponent = icon || (name && LucideIcons[name]);

  if (!IconComponent) return null;

  // Hex / RGB / Tailwind class 
  const isCustomColor = color?.startsWith("#") || color?.startsWith("rgb");
  const isCustomBg = bg?.startsWith("#") || bg?.startsWith("rgb");

  return (
    <div
      className={`inline-flex items-center w-fit justify-center p-3 ${!isCustomBg ? bg : ""} ${rounded} ${className}`}
      style={{
        backgroundColor: isCustomBg ? bg : undefined,
      }}
    >
      <IconComponent
        size={size}
        className={!isCustomColor ? color : ""}
        style={{
          color: isCustomColor ? color : undefined,
        }}
      />
    </div>
  );
};

export default CustomIcon;
