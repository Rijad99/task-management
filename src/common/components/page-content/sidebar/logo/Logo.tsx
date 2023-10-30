// CSS
import logoCSS from './Logo.module.scss'

// Logo
import logo from '../../../../images/logo/logo.png'



function Logo() {

    return (
        <div className={logoCSS.logo}>
            <img src={logo} alt='logo' />
        </div>
    )
}

export default Logo
