import Image from "next/image";

const CrButton = () => {
  return (
    <div className="mb-3 pr-0 md:pr-28">
      <button className="uppercase bg-[#C6E2CD] text-xs rounded px-3 text-gray-700 whitespace-nowrap tracking-widest flex items-center m-auto md:m-0 md:ml-auto shadow-lg">
        <span>courses</span>
        <div className="pt-2">
          <Image src="/toggleIcon.png" alt="icon" height={20} width={20} />
        </div>
      </button>
    </div>
  );
};

export default CrButton;
