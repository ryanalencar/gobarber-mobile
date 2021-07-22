import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { Container, Left, Avatar, Info, Name, Time } from './styles'

function Appointment() {
  return (
    <Container>
      <Left>
        <Avatar
          source={{
            uri: 'https://pics.freeicons.io/uploads/icons/png/6882831431553666420-512.png',
          }}
        />
        <Info>
          <Name>Ryan Alencar</Name>
          <Time>em 3 horas</Time>
        </Info>
      </Left>
      <TouchableOpacity onPress={() => {}}>
        <Icon name='event-busy' size={20} color='#f64c75' />
      </TouchableOpacity>
    </Container>
  )
}

export default Appointment
