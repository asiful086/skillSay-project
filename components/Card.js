import Image from "next/image";

const Card = ({ title, buttonColor = "bg-[#F3BB1C]" }) => {
  return (
    <div
      className=" border border-[#46634D] bg-[#46634D] bg-opacity-10 rounded
            shadow-md p-5  h-[242px] w-[297px]"
    >
      <div className="flex flex-col h-[70%] justify-between">
        <div>
          <p className="font-bold text-[#46634D]">{title}</p>
        </div>
        <div className="flex items-center">
          <Image height={26} width={24} src="/cartIcon.png" alt="icon" />
          <p className="text-xs text-[#274A45] pl-3">
            Soft Skills assessment aimed <br /> at validating etc...
          </p>
        </div>
        <div>
          <button className="px-3 py-2 w-full rounded uppercase bg-[#46634D] text-white">
            take the assessment
          </button>
        </div>
      </div>
      <div className="mt-6">
        <button
          className={`block ml-auto px-3 py-1 uppercase ${buttonColor}  text-xs rounded shadow text-white text-right tracking-widest`}
        >
          not started
        </button>
      </div>
    </div>
  );
};

export default Card;
