import {
  angularIcon,
  auth0Icon,
  bootstrapIcon,
  chakrauiIcon,
  cypressIcon,
  dockerIcon,
  emailIcon,
  expressIcon,
  fakerIcon,
  githubIcon,
  hibernateIcon,
  javaIcon,
  jestIcon,
  keycloakIcon,
  leafletIcon,
  linkedinIcon,
  mongodbIcon,
  moonorbitIcon,
  nextjsIcon,
  postgresqlIcon,
  reactIcon,
  springbootIcon,
  sunIcon,
  tailwindcssIcon,
  typescriptIcon,
} from '../components/SVGIcons';
import { ComponentWithAs, Icon, IconProps } from '@chakra-ui/react';

const iconMapping: { [key: string]: ComponentWithAs<'svg', IconProps> } = {
  angularIcon,
  auth0Icon,
  bootstrapIcon,
  chakrauiIcon,
  cypressIcon,
  dockerIcon,
  emailIcon,
  expressIcon,
  fakerIcon,
  githubIcon,
  hibernateIcon,
  javaIcon,
  jestIcon,
  keycloakIcon,
  leafletIcon,
  linkedinIcon,
  mongodbIcon,
  moonorbitIcon,
  nextjsIcon,
  postgresqlIcon,
  reactIcon,
  springbootIcon,
  sunIcon,
  tailwindcssIcon,
  typescriptIcon,
};

const DynamicIcon = ({
  iconTitle,
  iconSize = '1.25rem',
}: {
  iconTitle: string;
  iconSize?: string;
}) => {
  const createIconName = iconTitle
    .toLowerCase()
    .split(' ')
    .join('')
    .concat('Icon');

  const specificIcon = iconMapping[createIconName];
  if (!specificIcon) {
    throw new Error(`Icon ${createIconName} not found.`);
  } else {
    return <Icon as={specificIcon} boxSize={iconSize} />;
  }
};

export default DynamicIcon;
