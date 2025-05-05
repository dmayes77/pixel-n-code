import * as Fa5Icons from "react-icons/fa";
import * as Fa6Icons from "react-icons/fa6";
import * as MdIcons from "react-icons/md";
import * as LucideIcons from "react-icons/lu";
import * as FcIcons from "react-icons/fc";
import * as FiIcons from "react-icons/fi";
import * as TbIcons from "react-icons/tb";
import * as IonIcons5 from "react-icons/io5";

export default function Icon({
  name,
  set = "lui", // default variant is lucide
  size = 24,
  className = "text-white",
}) {
  // Map each variant name to its corresponding icon library
  const iconSets = {
    lui: LucideIcons,
    fa5: Fa5Icons,
    fa6: Fa6Icons,
    mdi: MdIcons,
    fci: FcIcons,
    fii: FiIcons,
    tbi: TbIcons,
    io5: IonIcons5,
  };

  const selectedSet = iconSets[set.toLowerCase()];
  if (!selectedSet) {
    console.warn(
      `❌ Icon set "${set}" not found. Available sets are: ${Object.keys(
        iconSets
      ).join(", ")}.`
    );
    return null;
  }

  const IconComponent = selectedSet[name];
  if (!IconComponent) {
    console.warn(`❌ Icon "${name}" not found in the ${set} icon set.`);
    return null;
  }

  return <IconComponent size={size} className={className} />;
}
