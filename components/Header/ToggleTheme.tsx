import { MoonIcon } from '@chakra-ui/icons';
import { GiSun } from 'react-icons/gi';

import {
  IconButton,
  IconButtonProps,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';

type ToggleThemeProps = Omit<IconButtonProps, 'aria-label'>;

const ToggleTheme = (props: ToggleThemeProps) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const iconColor = useColorModeValue('xiketic', 'princetonOrange');
  const SwitchIcon = useColorModeValue(MoonIcon, GiSun);

  if (!props) return <h1>error</h1>;

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        key={text}
        style={{ display: 'inline-block' }}
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 0, opacity: 0 }}
        transition={{ duration: 0.1 }}>
        <IconButton
          aria-label={`Switch to ${text} mode`}
          colorScheme={iconColor}
          icon={<SwitchIcon />}
          onClick={toggleColorMode}
          size={'lg'}
          isRound
          variant={'link'}></IconButton>
      </motion.div>
    </AnimatePresence>
  );
};

export default ToggleTheme;
