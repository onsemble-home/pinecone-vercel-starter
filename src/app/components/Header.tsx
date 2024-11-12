import Image from "next/image";
import PineconeLogo from "../../../public/pinecone.svg";
import VercelLogo from "../../../public/vercel.svg";
import OnsembleLogo from "../../../public/onsemble_logomark_white.png";

export default function Header({ className }: { className?: string }) {
  return (
    <header
      className={`flex items-center justify-center text-gray-200 text-2xl ${className}`}
    >
      <Image
        src={OnsembleLogo}
        alt="onsemble-logo-logo"
        width="40"
        height="40"
        className="ml-3"
      />{" "}
    </header>
  );
}
