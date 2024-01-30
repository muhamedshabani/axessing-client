import { Grid, Header, Icon } from 'semantic-ui-react'
import { Workspace } from '../../../app/models/workspace'
import CreateTicket from '../create/CreateTicket'

interface Props {
  workspace?: Workspace
}

export const TicketDashboardHeader = ({ workspace }: Props) => {
  return (
    <>
      <Grid>
        <Grid.Column width='12'>
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
                  <Icon
                    key={collaborator.id}
                    icon='user'
                    width={25}
                    height={25}
                  />
                ))}
              </div>
            </div>
          </div>
        </Grid.Column>
        <Grid.Column width='4'>
          <CreateTicket collaborators={workspace?.collaborators!} />
        </Grid.Column>
      </Grid>
    </>
  )
}
