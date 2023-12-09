// React
import { createRef, useState } from "react"

// Types
import { Option } from "./components/options/Options.types"

// Custom Hooks
import useOutsideClickHook from "../../custom-hooks/useOutsideClickHook"

function useSelectHook(onOptionChange: (option: Option) => void) {
	const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false)

	const optionsRef = createRef<HTMLUListElement>()

	useOutsideClickHook(optionsRef, setIsSelectOpen)

	const handleSelectOpen = () => {
		setIsSelectOpen(!isSelectOpen)
	}

	const handleOptionChange = (option: Option) => {
		onOptionChange(option)

		setIsSelectOpen(false)
	}

	return {
		optionsRef,
		isSelectOpen,
		handleSelectOpen,
		handleOptionChange,
	}
}

export default useSelectHook
