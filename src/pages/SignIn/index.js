import React, { useRef } from 'react'
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
  const passwordRef = useRef()

  const handleSubmit = () => {}

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
            returnKeyType='next'
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <FormInput
            icon='lock-outline'
            secureTextEntry
            placeholder='Digite sua senha secreta'
            ref={passwordRef}
            returnKeyType='send'
            onSubmitEditing={handleSubmit}
          />
          <SubmitButton onPress={handleSubmit}>Acessar</SubmitButton>
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
