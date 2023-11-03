export interface UserProps {
    firstName: string
    lastName: string
    email: string
    photo: string
    status: string
}

export interface User {
    firstName: string
    lastName: string
    email: string
    photo: string
    status: string
}

export enum UserStatus {
    ONLINE = 'Online',
    OFFLINE = 'Offline',
    AWAY = 'Away',
    BUSY = 'Busy',
    DO_NOT_DISTURB = 'Do not disturb',
    IN_A_MEETING = 'In a meeting',
    OUT_OF_OFFICE = 'Out of office'
}

export enum StatusColor {
    GREEN = 'green',
    GRAY = 'gray',
    RED = 'red',
    ORANGE = 'orange',
    PURPLE = 'purple'
}
