import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <Link
      href="/"
      className="flex gap-5 text-4xl border-blue-900 border-b-2 pb-4 block font-bold mt-5 mb-10 text-blue-900"
    >
      <Image src="/logo.png" alt="Logo" width={50} height={50}></Image>
      Blog
    </Link>
  );
}

export default Header;
