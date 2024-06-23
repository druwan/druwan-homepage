import dynamic from 'next/dynamic';
import { IconType } from 'react-icons/lib';
import { FaGithub, FaLinkedin, FaJava } from 'react-icons/fa';
import { GiNinjaVelociraptor } from 'react-icons/gi';
import { TfiEmail } from 'react-icons/tfi';
import {
  SiAngular,
  SiAuth0,
  SiBootstrap,
  SiChakraui,
  SiCypress,
  SiDocker,
  SiExpress,
  SiHibernate,
  SiJest,
  SiKeycloak,
  SiLeaflet,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

const iconMapping: { [key: string]: IconType } = {
  FaGithub,
  FaLinkedin,
  FaJava,
  GiNinjaVelociraptor,
  TfiEmail,
  SiAngular,
  SiAuth0,
  SiBootstrap,
  SiChakraui,
  SiCypress,
  SiDocker,
  SiExpress,
  SiHibernate,
  SiJest,
  SiKeycloak,
  SiLeaflet,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
};

const CustomIcons = ({
  iconTitle,
  iconLibrary = 'Si',
}: {
  iconTitle: string;
  iconLibrary: 'Fa' | 'Gi' | 'Si' | 'Tfi';
}) => {
  let createIconName = `${iconLibrary}${
    iconTitle.charAt(0).toUpperCase() + iconTitle.slice(1).toLowerCase()
  }`;

  createIconName = createIconName.replace(' ', '');

  // Outlier
  if (createIconName === 'SiNextjs') {
    createIconName = 'SiNextdotjs';
  } else if (createIconName === 'SiJava') {
    createIconName = 'FaJava';
  } else if (createIconName === 'SiFaker') {
    createIconName = 'GiNinjaVelociraptor';
  }

  const MyIcon = dynamic(() => {
    const SpecificIcon = iconMapping[createIconName];
    if (!SpecificIcon) {
      throw new Error(`Icon ${createIconName} not found.`);
    }
    return Promise.resolve(SpecificIcon);
  });

  return <MyIcon />;
};

export default CustomIcons;
