import React, { useMemo } from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { formatRelative, parseISO } from 'date-fns'
import pt from 'date-fns/locale/pt'

import api from '../../../services/api'
import Background from '../../../components/Background'
import { Container, Avatar, Name, Time, SubmitButton } from './styles'

export default function ConfirmAppointment({ navigation }) {
  const provider = navigation.getParam('provider')
  const time = navigation.getParam('time')

  const dateFormatted = useMemo(
    () => formatRelative(parseISO(time), new Date(), { locale: pt }),
    [time]
  )

  async function handleAddAppointment() {
    await api.post('appointments', {
      provider_id: provider.id,
      date: time,
    })

    navigation.navigate('Dashboard')
  }

  return (
    <Background>
      <Container>
        <Avatar
          source={{
            uri: provider.avatar
              ? provider.avatar_url
              : 'https://pics.freeicons.io/uploads/icons/png/6882831431553666420-512.png',
          }}
        />
        <Name>{provider.name}</Name>
        <Time>{dateFormatted}</Time>
        <SubmitButton onPress={handleAddAppointment}>
          Confirmar agendamento
        </SubmitButton>
      </Container>
    </Background>
  )
}

ConfirmAppointment.navigationOptions = ({ navigation }) => ({
  title: 'Confirmar agendamento',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack()
      }}
    >
      <Icon name='chevron-left' size={20} color='#fff' />
    </TouchableOpacity>
  ),
})
