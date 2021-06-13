import React from 'react'
import { Text } from 'react-native'

import Background from '../../components/Background'
import Input from '../../components/Input'

function SignIn() {
  return (
    <Background>
      <Text> SignIn Works!!!</Text>
      <Input icon='call' placeholder='Digite seu telefone' />
    </Background>
  )
}

export default SignIn
