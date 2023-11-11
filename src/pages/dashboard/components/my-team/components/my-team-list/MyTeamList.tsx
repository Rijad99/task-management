// Types
import { MyTeamListProps } from "./MyTeamList.types"

// Components
import TeamUser from "../team-user/TeamUser"



function MyTeamList({ myTeam }: MyTeamListProps) {

    return (
        <div>
            {
                myTeam.map(user => {

                    return (
                        <TeamUser key={user.id} user={user} />
                    )
                })
            }
        </div>
    )
}

export default MyTeamList
