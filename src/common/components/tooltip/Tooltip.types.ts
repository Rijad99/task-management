export interface TooltipProps {
  text: string
  children: React.ReactElement
  position: TooltipPosition
  tooltipContainerClasses?: string
  tooltipClasses?: string
}

export enum TooltipPosition {
  TOP = "top",
  LEFT = "left",
  BOTTOM = "bottom",
  RIGHT = "right",
}
