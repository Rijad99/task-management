// CSS
import formControlCSS from "./FormControl.module.scss"
import utilsCSS from "../../../scss/utils.module.scss"

// Components
import Svg from "../../svg/Svg"

// Types
import { FormControlProps } from "./FormControl.types"

// ENUMS
import { SvgColors } from "../../svg/Svg.types"

function FormControl({
	type,
	name,
	placeholder,
	value,
	id,
	label,
	icon,
	disabled,
	additionalClasses,
	onInput,
}: FormControlProps) {
	return (
		<div className={formControlCSS.formControl}>
			{label && <label>{label}</label>}
			{icon && (
				<Svg
					path={icon}
					width="21"
					height="19"
					viewBox="0 -0.5 19 19"
					color={SvgColors.NEUTRAL}
					additionalClasses={utilsCSS.mr05}
				/>
			)}
			<input
				type={type}
				name={name}
				placeholder={placeholder}
				value={value}
				spellCheck="false"
				autoComplete="off"
				id={id}
				disabled={disabled}
				className={`${formControlCSS.input} ${
					additionalClasses && additionalClasses
				}`}
				onInput={onInput}
			/>
		</div>
	)
}

export default FormControl
