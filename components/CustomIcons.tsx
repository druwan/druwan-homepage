import {
  angularIcon,
  auth0Icon,
  bootstrapIcon,
  chakrauiIcon,
  cypressIcon,
  dockerIcon,
  expressIcon,
  fakerIcon,
  hibernateIcon,
  javaIcon,
  jestIcon,
  keycloakIcon,
  leafletIcon,
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
  expressIcon,
  fakerIcon,
  hibernateIcon,
  javaIcon,
  jestIcon,
  keycloakIcon,
  leafletIcon,
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

const DynamicIcon = ({ iconTitle }: { iconTitle: string }) => {
  const createIconName = iconTitle
    .toLowerCase()
    .split(' ')
    .join('')
    .concat('Icon');

  const specificIcon = iconMapping[createIconName];
  if (!specificIcon) {
    throw new Error(`Icon ${createIconName} not found.`);
  } else {
    return <Icon as={specificIcon} />;
  }
};

export default DynamicIcon;
