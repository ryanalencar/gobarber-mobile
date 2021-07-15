import React from 'react'
import { Image, Text } from 'react-native'

import Background from '../../components/Background'

import {
  Container,
  FormInput,
  SubmitButton,
  Form,
  SignLinkText,
} from './styles'
import logo from '../../assets/logo.png'

function SignIn() {
  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            icon='mail-outline'
            keyboardType='email-address'
            autoCorrect={false}
            autoCapitalize='none'
            placeholder='Digite seu email'
          />
          <FormInput
            icon='lock-outline'
            secureTextEntry
            placeholder='Digite sua senha secreta'
          />
          <SubmitButton onPress={() => {}}>Acessar</SubmitButton>
        </Form>

        {/* <SignLink>
          <SignLinkText />
        </SignLink> */}
      </Container>
    </Background>
  )
}

export default SignIn
