import React from 'react'
import { Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import Background from '../../components/Background'

function Profile() {
  return (
    <Background>
      <Text>Profile Page</Text>
    </Background>
  )
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu Perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon name='person' size={20} color={tintColor} />
  ),
}

export default Profile
