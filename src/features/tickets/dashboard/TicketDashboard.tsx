import { useEffect, useState } from 'react'
import { Ticket } from '../../../app/models/ticket'
import axios from 'axios'
import { Grid, Header } from 'semantic-ui-react'
import { TicketList } from './TicketList'
import { TicketDashboardHeader } from './TicketDashboardHeader'
import { Workspace } from '../../../app/models/workspace'
import { stages } from '../../../app/models/enums/stages'
import styles from './Ticket.module.css'

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

  return (
    <div className={styles.main}>
      <TicketDashboardHeader workspace={workspace} />
      <Grid>
        {stages.map((stage) => (
          <Grid.Column key={stage} width='3'>
            <Header as='h4' className={styles.line}>
              {stage}
            </Header>
            <TicketList tickets={tickets.filter((t) => t.stage == stage)} />
          </Grid.Column>
        ))}
      </Grid>
    </div>
  )
}
