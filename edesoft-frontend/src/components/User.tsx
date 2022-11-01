import React from 'react'
import { Container, Icon, Segment, Grid, Button} from 'semantic-ui-react';
import DeleteModal from './DeleteModal';
import EditModal from './EditModal'
import './User.css';

interface Name {
    firstname: string
    lastname: string
  }

export interface UserType {
    name: Name
    email: string
    username: string
    phone: string
    id: number
  }

export interface UserProps {
    user: UserType
}

export default function User({user}: UserProps ) {
    return (
        <Container style={{width: '50%', boxShadow: "3px 3px 2px rgba(0, 0, 0, 0.253)", marginBottom: '20px'}} text>
            <Segment.Group>
            <Segment><Icon name="address card"/> {user.name.firstname} {user.name.lastname} </Segment>
            <Segment><Icon name="mail"/> {user.email} </Segment>
            <Segment><Icon name="phone square"/> {user.phone} </Segment>
            <Segment><Icon name="user"/> {user.username} </Segment>
            <Segment textAlign='center'>
                <Grid columns={2}>
                    <Grid.Column>
                        <EditModal trigger={<Icon name="edit" className='edit-icon'/>} user={user}/>
                    </Grid.Column>
                    <Grid.Column>
                        <DeleteModal trigger={<Icon name="user delete" className="delete-icon"/>} user={user} />
                    </Grid.Column>
                </Grid>
            </Segment>
            </Segment.Group>
        </Container>
    )
}