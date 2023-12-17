import * as Io from "react-icons/io";
import * as Md from "react-icons/md";
import * as Pi from "react-icons/pi";
import * as Im from "react-icons/im";

interface Props {
  icon: string;
  className?: string;
}

const GetIcon = ({ icon, className }: Props) => {
  const getIcon = (iconName: string) => {
    const iconsMap = new Map();
    iconsMap.set("Io", Io);
    iconsMap.set("Md", Md);
    iconsMap.set("Pi", Pi);
    iconsMap.set("Im", Im);

    return iconsMap.get(iconName.substring(0, 2));
  };

  const icons = getIcon(icon);
  const TheIcon = icons[icon];

  return <TheIcon className={className} />;
};

export default GetIcon;
