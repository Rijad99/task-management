export interface UserProps {
    firstName: string
    lastName: string
    email: string
    photo: string
    status: string
}

export interface User {
    id: string | number
    firstName: string
    lastName: string
    email: string
    photo: string
    status: UserStatus
}

export enum UserStatus {
    ONLINE = 'online',
    OFFLINE = 'offline',
    AWAY = 'away',
    BUSY = 'busy',
    DO_NOT_DISTURB = 'doNotDisturb',
    IN_A_MEETING = 'inAMeeting',
    OUT_OF_OFFICE = 'outOfOffice'
}

export enum StatusColor {
    GREEN = 'green',
    GRAY = 'gray',
    RED = 'red',
    ORANGE = 'orange',
    PURPLE = 'purple'
}
