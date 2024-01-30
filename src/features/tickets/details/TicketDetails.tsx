import { useState } from 'react'
import {
  ModalHeader,
  ModalDescription,
  ModalContent,
  ModalActions,
  Button,
  Header,
  Image,
  Modal,
} from 'semantic-ui-react'
import { Ticket } from '../../../app/models/ticket'

interface Props {
  ticket: Ticket
}

export default function TicketDetails({ ticket }: Props) {
  const [open, setOpen] = useState(false)

  const toEuropeanDateTime = (fulldate: string) => {
    let date = fulldate.split('T')[0].split('-').join('.')
    let reversed = date.slice(8, 10) + date.slice(4, 8) + date.slice(0, 4)

    let time = fulldate.split('T')[1].slice(0, 5)

    return reversed + ' at ' + time
  }

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Open ticket</Button>}
    >
      <ModalHeader>{ticket?.title}</ModalHeader>
      <ModalContent image>
        <Image
          size='medium'
          src='https://react.semantic-ui.com/images/avatar/large/rachel.png'
          wrapped
        />
        <ModalDescription>
          <Header as='h2'>
            Created: {toEuropeanDateTime(ticket?.createdDate)}
          </Header>
          <p>{ticket?.description}</p>
        </ModalDescription>
      </ModalContent>
      <ModalActions>
        <Button color='black' onClick={() => setOpen(false)}>
          Close
        </Button>
      </ModalActions>
    </Modal>
  )
}
