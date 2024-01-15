import { Form } from 'semantic-ui-react'

export default function CreateTicket() {
  return (
    <>
      <Form>
        <Form.Input
          placeholder='...'
          type='text'
          label='Title'
          labelPosition='left corner'
        />
        <Form.TextArea
          placeholder='Lorem ipsum dolor...'
          type='text'
          label='Description'
          labelPosition='left corner'
        />
      </Form>
    </>
  )
}
