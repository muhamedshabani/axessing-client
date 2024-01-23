import { List } from 'semantic-ui-react'
import { Ticket } from '../../../app/models/ticket'
import { TicketCard } from './TicketCard'

interface Props {
  tickets: Ticket[]
}

export const TicketList = ({ tickets }: Props) => {
  return (
    <List>
      {tickets.map((ticket) => (
        <TicketCard ticket={ticket} />
      ))}
    </List>
  )
}
