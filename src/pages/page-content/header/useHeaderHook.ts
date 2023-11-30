// React
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Helpers
import { setTitle } from './utils/utils'



function useHeaderHook() {

    const [currentTitle, setCurrentTitle] = useState<string | null>(null)

    const location = useLocation()

    useEffect(() => {
        const title = setTitle(location.pathname)

        setCurrentTitle(title.toLowerCase())
    }, [location.pathname])

    return { currentTitle }
}

export default useHeaderHook
