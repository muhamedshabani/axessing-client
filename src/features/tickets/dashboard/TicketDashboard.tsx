import { useEffect, useState } from 'react'
import { Ticket } from '../../../app/models/ticket'
import axios from 'axios'
import { Grid, Header } from 'semantic-ui-react'
import { TicketList } from './TicketList'
import { TicketDashboardHeader } from './TicketDashboardHeader'
import { Workspace } from '../../../app/models/workspace'
import { stages } from '../../../app/models/enums/stages'
import TicketDetails from '../details/TicketDetails'

export default function TicketDashboard(): JSX.Element {
  const [workspace, setWorkspace] = useState<Workspace>()
  const [tickets, setTickets] = useState<Ticket[]>([])

  useEffect(() => {
    axios
      .get<Ticket[]>(
        'http://localhost:5000/api/ticket?workspaceid=1&backlog=false'
      )
      .then((response) => {
        setTickets(response.data)
      })
    axios
      .get<Workspace>('http://localhost:5000/api/workspace?id=1')
      .then((response) => {
        setWorkspace(response.data)
      })
  }, [])

  tickets.forEach((t) => console.log(t.stage))

  return (
    <div style={{ marginTop: '3em', marginLeft: '2em' }}>
      <TicketDashboardHeader workspace={workspace} />
      <Grid className=''>
        {stages.map((stage) => (
          <Grid.Column className={'ticketColumn'} key={stage} width='3'>
            <Header
              as='h4'
              style={{ borderBottom: '5px solid rgb(235, 228, 203)' }}
            >
              {stage}
            </Header>
            <TicketList tickets={tickets.filter((t) => t.stage == stage)} />
          </Grid.Column>
        ))}
      </Grid>
    </div>
  )
}
