export interface UserProps {
    firstName: string
    lastName: string
    email: string
    photo: string
    status: string
    onStatusChange: (userStatus: UserStatus) => void
}

export enum UserStatus {
    ONLINE = 'online',
    OFFLINE = 'offline',
    AWAY = 'away',
    BUSY = 'busy',
    DO_NOT_DISTURB = 'do not disturb',
    IN_A_MEETING = 'in a meeting',
    OUT_OF_OFFICE = 'out of office'
}
