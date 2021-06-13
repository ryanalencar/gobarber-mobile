import React from 'react'
import { Text } from 'react-native'

import Background from '../../components/Background'
import Button from '../../components/Button'
import Input from '../../components/Input'

function SignIn() {
  return (
    <Background>
      <Text> SignIn Works!!!</Text>
      <Input icon='add-chart' placeholder='Digite seu telefone' />
      <Button>Teste</Button>
    </Background>
  )
}

export default SignIn
