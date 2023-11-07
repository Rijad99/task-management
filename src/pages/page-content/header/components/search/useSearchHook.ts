// React
import { useState } from 'react'



function useSearchHook()  {
    const [search, setSearch] = useState<string>('')

    const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value)
    }

    return { search, handleSearch }
}

export default useSearchHook
