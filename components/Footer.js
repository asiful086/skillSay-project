import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div>
        <div className="block md:flex">
          {/* left */}
          <div className="flex-grow">
            <div className="flex items-center justify-center md:justify-start">
              <Image width={32.5} height={34.87} src="/logo.png" alt="logo" />
              <span className="text-[#274A45] text-4xl font-bold">
                SkillSay
              </span>
            </div>
          </div>
          {/* right */}
          <div>
            <div className="grid gap-7 justify-items-center text-center md:text-left mt-7 md:mt-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
              <div>
                <p className="uppercase text-sm text-[#274A45] font-semibold tracking-widest my-2">
                  programs
                </p>
                <p className="capitalize text-xs text-[#525C65] my-2">
                  {" "}
                  Executive Masters in Data Science, <br /> AI and Machine
                  Learning (EMDA)
                </p>
                <p className="capitalize text-xs text-[#525C65] my-2">
                  {" "}
                  Executive Masters in Data Analytics FinTech <br /> and DIgital
                  Banking (EMFD)
                </p>
                <p className="capitalize text-xs text-[#525C65] my-2">
                  {" "}
                  Post Graduate Program in Data Science, AI <br /> and Machine
                  Learning (PGPDA)
                </p>
                <p className="capitalize text-xs text-[#525C65] my-2">
                  {" "}
                  Data Analytics Engineer
                </p>
              </div>
              <div>
                <p className="uppercase text-sm text-[#274A45] font-semibold tracking-widest my-2">
                  Resources
                </p>
                <p className="capitalize text-xs text-[#525C65] my-2">
                  Skill Assessment
                </p>
                <p className="capitalize text-xs text-[#525C65] my-2">
                  Course Catalog
                </p>
                <p className="capitalize text-xs text-[#525C65] my-2">
                  Career Services
                </p>
                <p className="capitalize text-xs text-[#525C65] my-2">
                  Student Successr
                </p>
                <p className="capitalize text-xs text-[#525C65] my-2">
                  Scholarships
                </p>
              </div>
              <div>
                <p className="uppercase text-sm text-[#274A45] font-semibold tracking-widest my-2">
                  Company
                </p>
                <p className="capitalize text-xs text-[#525C65] my-2">About</p>
                <p className="capitalize text-xs text-[#525C65] my-2">Blog</p>
                <p className="capitalize text-xs text-[#525C65] my-2">Jobs</p>
                <p className="capitalize text-xs text-[#525C65] my-2">
                  Mentors
                </p>
              </div>
              <div>
                <p className="uppercase text-sm text-[#274A45] font-semibold tracking-widest my-2">
                  community
                </p>
                <p className="capitalize text-xs text-[#525C65] my-2">
                  Contact Us
                </p>
                <p className="capitalize text-xs text-[#525C65] my-2">
                  Help and FAQ
                </p>
                <p className="capitalize text-xs text-[#525C65] my-2">Jobs</p>
                <p className="capitalize text-xs text-[#525C65] my-2">Forum</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer part 2 */}
      <div className="border-t mt-2">
        <div className="block md:flex items-center mt-10 text-center md:text-left">
          {/* left */}
          <div className="block md:flex items-center text-sm text-[#525C65] mr-auto">
            <p className="px-2">© 2021 SkillSay.co.uk All Rights Reserved</p>
            <p className="px-2">Privacy Policy</p>
            <p className="px-2">Terms and Conditions</p>
          </div>
          {/* right */}
          <div className="flex items-center justify-center ">
            <div className="px-2">
              <Image
                src="/facebook.svg"
                alt="icon"
                height={20.37}
                width={10.58}
              />
            </div>
            <div className="px-2">
              <Image
                src="/twitter.svg"
                alt="icon"
                height={20.37}
                width={10.58}
              />
            </div>
            <div className="px-2">
              <Image
                src="/linkedin.svg"
                alt="icon"
                height={20.37}
                width={10.58}
              />
            </div>
            <div className="px-2">
              <Image
                src="/instagram.svg"
                alt="icon"
                height={20.37}
                width={10.58}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
