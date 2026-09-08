import React from "react";
import styles from "./SPILogo.module.css";
import Image from "next/image";
import Link from "next/link";

const SPILogo = () => {
  return (
    <Link href="/" className="flex items-center gap-1">
      <div className="bg-white w-[65px] rounded-full border-2
       border-amber-300 ">
        <Image
          src="/SPI_Logo.png"
          alt="Square Polytechnic Institute Logo"
          width={65}
          height={65}
        />
      </div>
      <h3>
        <b className={`${styles.logo_text}`}>
          {/* স্কয়ার পলিটেকনিক <br /> ইন্সটিটিউট */}
          SQUARE
          <br />
          POLYTECHNIC INSTITUTE
        </b>
      </h3>
    </Link>
  );
};

export default SPILogo;
