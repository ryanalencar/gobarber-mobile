import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Name } from '../../../components/Appointment/styles'

import Background from '../../../components/Background'
import api from '../../../services/api'
import { Avatar, Container, Provider, ProvidersList } from './styles'

export default function SelectProvider({ navigation }) {
  const [providers, setProviders] = useState([])

  useEffect(() => {
    async function loadProviders() {
      const response = await api.get('providers')
      setProviders(response.data)
    }

    loadProviders()
  }, [])

  return (
    <Background>
      <Container>
        <ProvidersList
          data={providers}
          keyExtractor={(provider) => String(provider.id)}
          renderItem={({ item: provider }) => (
            <Provider
              onPress={() =>
                navigation.navigate('SelectDateTime', { provider })
              }
            >
              <Avatar
                source={{
                  uri: provider.avatar
                    ? provider.avatar_url
                    : 'https://pics.freeicons.io/uploads/icons/png/6882831431553666420-512.png',
                }}
              />
              <Name>{provider.name}</Name>
            </Provider>
          )}
        />
      </Container>
    </Background>
  )
}

SelectProvider.navigationOptions = ({ navigation }) => ({
  title: 'Selecione o prestador',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Dashboard')
      }}
    >
      <Icon name='chevron-left' size={20} color='#fff' />
    </TouchableOpacity>
  ),
})
