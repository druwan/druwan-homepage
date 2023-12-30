import dynamic from 'next/dynamic';
import { IconType } from 'react-icons/lib';

const CustomIcons = ({
  iconTitle,
  iconLibrary,
}: {
  iconTitle: string;
  iconLibrary: string;
}) => {
  let createIconName = `${iconLibrary}${
    iconTitle.charAt(0).toUpperCase() + iconTitle.slice(1).toLowerCase()
  }`;

  createIconName = createIconName.replace(' ', '');

  // Outliers
  switch (createIconName) {
    case 'SiNextjs':
      createIconName = 'SiNextdotjs';
    default:
      createIconName;
  }

  const MyIcon: React.ComponentType = dynamic(async () => {
    const importedIcon: IconType = await import(
      `react-icons/${iconLibrary.toLowerCase()}/`
    );
    console.log(`${importedIcon[createIconName as keyof IconType]}`);

    return importedIcon[createIconName as keyof IconType];
  });

  return <MyIcon />;
};

export default CustomIcons;
