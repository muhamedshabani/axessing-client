import { Card, CardContent, Icon, List } from 'semantic-ui-react'
import { Ticket } from '../../../app/models/ticket'

interface Props {
  tickets: Ticket[]
  stage: string
}

export const TicketList = ({ tickets, stage }: Props) => {
  return (
    <List>
      {tickets.map((ticket) =>
        ticket.stage == stage ? (
          <Card key={ticket.id}>
            <CardContent header={ticket.title} />
            <CardContent description={ticket.description} />
            <CardContent extra>
              <Icon name='user' />2 collaborators
            </CardContent>
          </Card>
        ) : null
      )}
    </List>
  )
}
