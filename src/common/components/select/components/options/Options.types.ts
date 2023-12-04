export interface OptionsProps {
  options: Option[];
  isSelectOpen: boolean;
  onOptionChange: (option: Option) => void;
}

export interface Option {
  id: string | number | null;
  value: string;
  icon?: string;
}
