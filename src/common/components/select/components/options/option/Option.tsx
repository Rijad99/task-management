import React from 'react';

import { OptionProps } from './Option.types';
import optionsCSS from '../Options.module.scss';

export function Option({ id, value, icon, onOptionChange }: OptionProps) {
  const renderIcon = icon && <img src={icon} />;

  return (
    <li key={id} className={optionsCSS.option} onClick={onOptionChange}>
      {renderIcon} {value}
    </li>
  );
}
