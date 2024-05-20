// React
import React from 'react';

// CSS
import optionsCSS from './Options.module.scss';

// Types
import { OptionsProps } from './Options.types';

// Framer motion
import { motion } from 'framer-motion';

// Options hook
import useOptionsHook from './useOptionsHook';
import { Option } from './option/Option';

function Options(props: OptionsProps) {
  const { optionsVariant, handleOptionChange } = useOptionsHook(props.onOptionChange);

  const options = props.options.map((option) => (
    <Option key={option.id} id={option.id} value={option.value} icon={option.icon} onOptionChange={() => handleOptionChange(option)} />
  ));

  const animateSelect = props.isSelectOpen ? optionsVariant.visible : optionsVariant.hidden;

  return (
    <motion.ul
      className={optionsCSS.optionsList}
      initial={{
        opacity: 0,
        transform: 'translateY(-20px)',
        pointerEvents: 'none',
      }}
      animate={animateSelect}
    >
      {options}
    </motion.ul>
  );
}

export default Options;
