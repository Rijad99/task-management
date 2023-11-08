// Types
import { MyTeamListProps } from "./MyTeamList.types"

// Components
import User from "../user/User"



function MyTeamList({ myTeam }: MyTeamListProps) {

    return (
        <div>
            {
                myTeam.map(user => {

                    return (
                        <User user={user} />
                    )
                })
            }
        </div>
    )
}

export default MyTeamList
