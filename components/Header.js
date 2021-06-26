import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/outline";

const Header = () => {
  return (
    <>
      <div className="block md:flex items-center">
        {/* left */}
        <div className="md:mr-auto">
          <div className="flex items-center justify-center md:justify-start">
            <Image width={32.5} height={34.87} src="/logo.png" alt="logo" />
            <span className="text-[#274A45] text-4xl font-bold">SkillSay</span>
          </div>
        </div>
        {/* right */}
        <div className="flex items-center justify-center mt-5 md:mt-0">
          {/* menus */}
          <div className="px-2 hidden lg:block ">
            <p className="text-base text-[#525C65] flex items-center capitalize whitespace-nowrap">
              Programs{" "}
              <span className="hidden lg:block">
                {" "}
                <ChevronDownIcon className="h-5" />{" "}
              </span>
            </p>
          </div>
          <div className="px-2">
            <p className="text-base text-[#525C65] flex items-center capitalize whitespace-nowrap">
              for business{" "}
              <span className="hidden lg:block">
                {" "}
                <ChevronDownIcon className="h-5" />{" "}
              </span>
            </p>
          </div>
          <div className="px-2 hidden sm:block ">
            <p className="text-base text-[#525C65] flex items-center capitalize whitespace-nowrap">
              skillSay.AI{" "}
              <span className="hidden lg:block">
                {" "}
                <ChevronDownIcon className="h-5" />{" "}
              </span>
            </p>
          </div>
          <div className="px-2">
            <p className="text-base text-[#525C65] flex items-center capitalize whitespace-nowrap">
              job board{" "}
            </p>
          </div>
          <div className="px-2 hidden sm:block ">
            <p className="text-base text-[#525C65] flex items-center capitalize whitespace-nowrap">
              our story{" "}
            </p>
          </div>
          <div className="px-2">
            <p className="text-base text-[#525C65] flex items-center capitalize whitespace-nowrap">
              sign in{" "}
            </p>
          </div>
          <button className="hidden sm:block  uppercase bg-[#46634D] text-xs rounded p-2 text-white whitespace-nowrap">
            contact us
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
