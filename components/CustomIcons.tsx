import dynamic from 'next/dynamic';
import { IconType } from 'react-icons/lib';

const CustomIcons = ({
  iconTitle,
  iconLibrary = 'Si',
}: {
  iconTitle: string;
  iconLibrary: 'Fa' | 'Si' | 'Tfi';
}) => {
  let createIconName = `${iconLibrary}${
    iconTitle.charAt(0).toUpperCase() + iconTitle.slice(1).toLowerCase()
  }`;

  createIconName = createIconName.replace(' ', '');

  // Outlier
  if (createIconName === 'SiNextjs') {
    createIconName = 'SiNextdotjs';
  }

  const MyIcon = dynamic(async () => {
    let importedIcons;
    switch (iconLibrary) {
      case 'Fa':
        importedIcons = await import('react-icons/fa');
        break;
      case 'Si':
        importedIcons = await import('react-icons/si');
        break;
      case 'Tfi':
        importedIcons = await import('react-icons/tfi');
        break;
      default:
        throw new Error(`Unsupported icon lib: ${iconLibrary}`);
    }
    return importedIcons[createIconName as keyof IconType];
  });

  return <MyIcon />;
};

export default CustomIcons;
