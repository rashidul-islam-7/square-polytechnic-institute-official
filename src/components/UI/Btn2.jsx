import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";

const Btn2 = ({
  text,
  icon,
  onClick,
  link = "#",
  className = "",
  iconPosition = "right",
}) => {
  const iconClassName =
    "flex items-center text-2xl transition-transform duration-300 ease-in-out group-hover:translate-x-2";

  return (
    <Link
      href={link}
      onClick={onClick}
      className={`group inline-flex items-center justify-center gap-1 cursor-pointer rounded-full border border-white/30 bg-white/10 px-6 py-2 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/30 ${className}`}
    >
      {icon && iconPosition === "left" && (
        <span className={`${iconClassName} group-hover:-translate-x-1`}>
          {icon}
        </span>
      )}

      <span>{text}</span>

      {icon && iconPosition === "right" ? (
        <span className={iconClassName}>{icon}</span>
      ) : !icon && iconPosition === "right" ? (
        <IoIosArrowRoundForward className={iconClassName} />
      ) : null}
    </Link>
  );
};

export default Btn2;
