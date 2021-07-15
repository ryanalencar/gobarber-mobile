import React from 'react'
import { Image, Text } from 'react-native'
import PropTypes from 'prop-types'

import Background from '../../components/Background'

import {
  Container,
  FormInput,
  SubmitButton,
  Form,
  SignLink,
  SignLinkText,
} from './styles'
import logo from '../../assets/logo.png'

function SignUp({ navigation }) {
  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            icon='person-outline'
            autoCorrect={false}
            autoCapitalize='none'
            placeholder='Nome completo'
          />
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
          <SubmitButton onPress={() => {}}>Criar</SubmitButton>
        </Form>

        <SignLink>
          <SignLinkText onPress={() => navigation.navigate('SignIn')}>
            Já possui uma conta? Entrar
          </SignLinkText>
        </SignLink>
      </Container>
    </Background>
  )
}

SignUp.defaultProps = {
  navigation: {},
}
SignUp.propTypes = {
  navigation: PropTypes.func,
}

export default SignUp
