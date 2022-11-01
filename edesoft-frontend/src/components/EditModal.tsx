import React, { ReactElement } from 'react'
import { Button, Header, Image, Modal, Form } from 'semantic-ui-react'
import {ModalProps} from './AddModal'
import ModalForm from './ModalForm'


function EditModal(props: ModalProps) {
  const [open, setOpen] = React.useState(false)
  const {trigger , user} = props

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={trigger}
    >
      <Modal.Header>Edit User</Modal.Header>
      <Modal.Content>
       <ModalForm user={user} submitButton={() => setOpen(false)}/>
      </Modal.Content>
    </Modal>
  )
}

export default EditModal