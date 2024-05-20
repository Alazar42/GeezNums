import { View, Text, Pressable, Button } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const LoginPage = () => {
  return (
    <View>
      <Text>LoginPage</Text>
      <Link href='/register' asChild>
        <Pressable>
          <Button title='Register' />
        </Pressable>
      </Link>
    </View>
  )
}

export default LoginPage