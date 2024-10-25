import Link from "next/link";
import { BiLogoLinkedin } from "react-icons/bi";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const personalData = {
  name: "Aditya Kumar",
  email: "neelaadityakumar@gmail.com",
  phone: "+91 7979096043",
  github: "https://github.com/neelaadityakumar",
  linkedIn: "https://www.linkedin.com/in/neelaadityakumar/",
  leetcode: "https://leetcode.com/neelaadityakumar/",
};
function Contact() {
  return (
    <div
      id="contact"
      className="w-full flex justify-center text-gray-200 font-bold"
    >
      <div>
        <div className="mt-8 flex items-center gap-5 lg:gap-10">
          <Link href={`mailto:${personalData.email}`}>
            <MdEmail
              className="bg-[#153040] p-3 rounded-full hover:border hover:border-[#64ffda] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
              size={48}
              color="#64ffda"
            />{" "}
          </Link>

          <Link href={`tel:${personalData.phone}`}>
            <IoMdCall
              className="bg-[#153040] p-3 rounded-full hover:border hover:border-[#64ffda] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
              size={48}
              color="#64ffda"
            />{" "}
          </Link>

          <Link target="_blank" href={personalData.github}>
            <IoLogoGithub
              className="bg-[#153040] p-3 rounded-full hover:border hover:border-[#64ffda] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
              size={48}
              color="#64ffda"
            />
          </Link>
          <Link target="_blank" href={personalData.linkedIn}>
            <BiLogoLinkedin
              className="bg-[#153040] p-3 rounded-full hover:border hover:border-[#64ffda] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
              size={48}
              color="#64ffda"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
