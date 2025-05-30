import type { IconType } from "react-icons";

interface Props {
  text: string;
  Image: IconType;
}


const SingleInfo = ({ text, Image }: Props) => {
  return (
    <div className="flex gap-4 items-center justify-start">
      <Image className="text-3xl" />
      <p>{text}</p>
    </div>
  );
};

export default SingleInfo;
