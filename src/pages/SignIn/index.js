import React from 'react'
import { Image } from 'react-native'
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

function SignIn({ navigation }) {
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

        <SignLink>
          <SignLinkText onPress={() => navigation.navigate('SignUp')}>
            Criar conta gratuita
          </SignLinkText>
        </SignLink>
      </Container>
    </Background>
  )
}

SignIn.defaultProps = {
  navigation: {},
}
SignIn.propTypes = {
  navigation: PropTypes.func,
}

export default SignIn
