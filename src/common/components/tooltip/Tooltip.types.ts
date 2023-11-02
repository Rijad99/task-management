export interface TooltipProps {
    text: string
    position: TooltipPosition
    children: React.ReactElement
    tooltipContainerClasses?: string
    tooltipClasses?: string
}

export enum TooltipPosition {
    TOP = 'top',
    LEFT = 'left',
    BOTTOM = 'bottom',
    RIGHT = 'right'
}
