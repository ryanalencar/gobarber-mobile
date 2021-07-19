import React, { useRef, useState } from 'react'
import { Image, Button } from 'react-native'
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
import { useReducerAuth } from '../../store/hooks/auth'

function SignIn({ navigation }) {
  const [{ loading }, { dispatchLogin }] = useReducerAuth()

  const passwordRef = useRef()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit() {
    dispatchLogin({ email, password })
    // dispatchSignIn({ email, password })
  }

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
            value={email}
            onChangeText={setEmail}
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <FormInput
            icon='lock-outline'
            secureTextEntry
            placeholder='Digite sua senha secreta'
            ref={passwordRef}
            returnKeyType='send'
            value={password}
            onChangeText={setPassword}
            onSubmitEditing={handleSubmit}
          />
          <Button
            onPress={handleSubmit}
            title='Learn More'
            color='#841584'
            accessibilityLabel='Learn more about this purple button'
          />
          <SubmitButton loading={loading} onPress={handleSubmit}>
            Acessar
          </SubmitButton>
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
  navigation: PropTypes.object,
}

export default SignIn
