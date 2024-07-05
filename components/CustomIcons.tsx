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
import {
  ComponentWithAs,
  Icon,
  IconProps,
  useColorModeValue,
} from '@chakra-ui/react';

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

  const borderColor = useColorModeValue(
    'night.DEFAULT',
    'light_sky_blue.DEFAULT'
  );

  const specificIcon = iconMapping[createIconName];
  if (!specificIcon) {
    throw new Error(`Icon ${createIconName} not found.`);
  } else {
    return <Icon as={specificIcon} boxSize={iconSize} color={borderColor} />;
  }
};

export default DynamicIcon;
