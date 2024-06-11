import Image from "next/image";

const Header = () => {
  return (
    <div className="flex items-center gap-x-[8px]">
      <Image src="/profile.png" alt="thumbnail" width={100} height={100} />
      <h1 className="font-semibold text-[28px]">{"Supin's trip blog 🛫"}</h1>
    </div>
  );
};

export default Header;
