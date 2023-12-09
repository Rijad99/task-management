// React
import { Dispatch, RefObject, SetStateAction, useEffect } from "react"

function useOutsideClickHook(
	ref: RefObject<HTMLElement>,
	refSetStateCallback: Dispatch<SetStateAction<boolean>>,
) {
	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (ref.current && !ref.current.contains(e.target as Node)) {
				refSetStateCallback(false)
			}
		}

		document.addEventListener("click", handleClickOutside, true)

		return () => {
			document.removeEventListener("click", handleClickOutside, true)
		}
	}, [])
}

export default useOutsideClickHook
