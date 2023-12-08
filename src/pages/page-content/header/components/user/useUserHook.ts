// React
import { createRef, useContext, useState } from "react"

// Types
import { DropdownItem } from "../../../../../common/components/dropdown/components/dropdown-item/DropdownItem.types"

// Context
import { UserContext } from "../../../../../common/context/user-context/UserContext"

function useUserHook() {
  const [isUserStatusDropdownOpen, setIsUserStatusDropdownOpen] =
    useState<boolean>(false)

  const { user, setUser } = useContext(UserContext)

  const handleChangeStatus = (item: DropdownItem) => {
    setUser({
      ...user,
      status: item.actionName,
    })

    setIsUserStatusDropdownOpen(false)
  }

  const handleStatusDropdownOpen = () => {
    setIsUserStatusDropdownOpen(!isUserStatusDropdownOpen)
  }

  return {
    isUserStatusDropdownOpen,
    setIsUserStatusDropdownOpen,
    handleChangeStatus,
    handleStatusDropdownOpen,
  }
}

export default useUserHook
