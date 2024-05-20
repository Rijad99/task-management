export interface OptionProps {
  id: string | number | null;
  value: string;
  icon?: string | undefined;
  onOptionChange: () => void;
}
