import React from 'react'
import { Container, Icon, Segment, Header, Grid} from 'semantic-ui-react';

export default function Users () {
    return (
        <Container style={{width: '50%', boxShadow: "3px 3px 2px rgba(0, 0, 0, 0.253)"}} text>
            <Segment.Group>
            <Segment><Icon name="address card"/> Rafaelito el Jugador de Azir</Segment>
            <Segment><Icon name="mail"/> azir@shurima.com </Segment>
            <Segment><Icon name="phone square"/> 1212121212 </Segment>
            <Segment><Icon name="user"/> rafaelbrabissimo </Segment>
            <Segment textAlign='center'>
                <Grid columns={2}>
                    <Grid.Column>
                        <Icon name="edit"/>
                    </Grid.Column>
                    <Grid.Column>
                        <Icon name="trash"/>
                    </Grid.Column>
                </Grid>
            </Segment>
            </Segment.Group>
        </Container>
    )
}