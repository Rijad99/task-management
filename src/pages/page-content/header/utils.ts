export const setTitle = (location: string) => {
    let title = ''

    if (location.includes('-')) {
        title = location.substring(1, location.length).split('-').map(word => word[0].toUpperCase() + word.substring(1, word.length)).join(' ')

    } else {
        title = location.substring(1, location.length)[0].toUpperCase() + location.substring(2, location.length)
    }

    return title
}
