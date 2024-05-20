// ENUMS
import { SvgColors } from '../../../../../../../../../common/components/svg/Svg.types';

export const getPriorityIconColor = (priority: number) => {
  switch (priority) {
    case 1:
      return SvgColors.GREEN;

    case 2:
      return SvgColors.ORANGE;

    case 3:
      return SvgColors.RED;
  }
};
