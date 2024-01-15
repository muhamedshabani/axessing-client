import React from 'react'
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
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Show Modal</Button>}
    >
      <ModalHeader>{ticket?.title} Lorem ipsum dolor sit amet.</ModalHeader>
      <ModalContent image>
        <Image
          size='medium'
          src='https://react.semantic-ui.com/images/avatar/large/rachel.png'
          wrapped
        />
        <ModalDescription>
          <Header as='h2'>Created: {ticket?.createdDate}</Header>
          <p>
            {ticket?.description} Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Beatae quibusdam dolorum, eaque officiis
            repudiandae excepturi earum molestiae nobis vitae consequatur.
          </p>
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
