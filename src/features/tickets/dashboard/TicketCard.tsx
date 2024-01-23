import { Ticket } from '../../../app/models/ticket'
import { Card, CardContent, Icon } from 'semantic-ui-react'
import TicketDetails from '../details/TicketDetails'

interface Props {
  ticket: Ticket
}

export const TicketCard = ({ ticket }: Props) => {
  return (
    <Card key={ticket.id}>
      <CardContent as='h3' header={ticket.title} />
      <CardContent description={ticket.description.slice(0, 30) + '...'} />
      <CardContent extra>
        <Icon name='user' />
        {ticket.collaborators ? ticket.collaborators[0].fullname : 'MS'}
      </CardContent>
      <TicketDetails ticket={ticket} />
    </Card>
  )
}
