
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import SingleContactSocial from "./SingleContactSocial";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/josemari-masangkay-v-458552182/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/jomasangkay" Icon={FiGithub} />
    </div>
  );
};

export default ContactSocial;
