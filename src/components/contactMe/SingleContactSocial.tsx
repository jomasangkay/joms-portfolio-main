import type { IconType } from "react-icons";

interface Props {
  Icon: IconType;
  link: string;
}

const SingleContactSocial = ({ Icon, link }: Props) => {
  return (
    <div className="text-2xl h-12 w-12 border border-orange text-orange rounded-full p-3 flex items-center justify-center hover:bg-cyan hover:text-white hover:cursor-pointer transition-all duration-200">
      <a onClick={() => {window.open(link,'_blank')}} className="cursor-pointer">
        <Icon />
      </a>
    </div>
  );
};

export default SingleContactSocial;
