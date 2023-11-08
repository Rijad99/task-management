// React
import { useContext } from 'react'

// CSS
import myTeamCSS from './MyTeam.module.scss'

// Components
import Accordion from '../../../../common/components/accordion/Accordion'
import MyTeamList from './components/my-team-list/MyTeamList'

// Data
import { myTeam } from './utils/my-team-mock-data'

// Context
import { LocalizationContext } from '../../../../common/context/LocalizationContext'



function MyTeam() {
    const { localization } = useContext(LocalizationContext)

    return (
        <Accordion title={localization.MyTeam}>
            <MyTeamList myTeam={myTeam} />
        </Accordion>
    )
}

export default MyTeam
