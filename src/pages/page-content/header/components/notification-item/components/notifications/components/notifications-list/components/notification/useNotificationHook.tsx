// React
import { useContext } from "react"

// CSS
import notificationCSS from "./Notification.module.scss"

// Types
import { Notification } from "./Notification.types"

// Context
import { LocalizationContext } from "../../../../../../../../../../../common/context/LocalizationContext"

function useNotificationHook(notification: Notification) {
	const { localization } = useContext(LocalizationContext)

	const colors = ["green", "red", "blue", "orange"]
	let typeText = ""

	switch (notification.type) {
		case "completion":
			typeText = localization.completed.toLowerCase()
			break

		case "mention":
			typeText = localization.mentionedYouIn
			break

		case "requestToEdit":
			typeText = localization.wantsToEdit
			break

		case "added":
			typeText = localization.addedAFile
			break
	}

	const description = (
		<>
			<span
				className={notificationCSS.user}
			>{`${notification.user.firstName} ${notification.user.lastName} `}</span>
			<span>{typeText} </span>
			<span className={notificationCSS.task}>{notification.task}</span>
		</>
	)

	const userInitials = `${notification.user.firstName.substring(
		0,
		1,
	)}${notification.user.lastName.substring(0, 1)}`
	const initialsCircleColor = colors[Math.floor(Math.random() * colors.length)]

	return {
		localization,
		description,
		userInitials,
		initialsCircleColor,
	}
}

export default useNotificationHook
