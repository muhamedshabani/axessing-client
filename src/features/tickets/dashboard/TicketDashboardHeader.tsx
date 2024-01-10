import { Header } from 'semantic-ui-react'
import { Workspace } from '../../../app/models/workspace'

interface Props {
  workspace?: Workspace
}

export const TicketDashboardHeader = ({ workspace }: Props) => {
  return (
    <>
      <Header as='h1' className='ui header'>
        {workspace?.name}
      </Header>
      <Header as='h3' className='ui header'>
        {workspace?.description}
      </Header>
      <div className='ui four column grid'>
        <div className='row'>
          <div className='column'>
            {workspace?.collaborators?.map((collaborator) => (
              <img src={collaborator.profileURL} width={25} height={25} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
