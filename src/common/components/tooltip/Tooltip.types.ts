export interface TooltipProps {
    text: string
    position: TooltipPosition
}

export enum TooltipPosition {
    TOP = 'top',
    LEFT = 'left',
    BOTTOM = 'bottom',
    RIGHT = 'right'
}
