import {
  Flex, Square, Text, Box, Center,
} from '@chakra-ui/react'
import { useState } from 'react'
import { genModificador } from '../../utils/helpers'
import { Input } from './Input'

interface Props {
  name: string
}

const Atributo = (props: Props) => {
  const { name } = props

  const [value, setValue] = useState('')

  const onBlurInput = (_value: string) => {
    setValue(_value)
  }

  const modificador = genModificador(value)

  return (
    <Box bg="red.100">
      <Text>{name}</Text>
      <Flex align="center">
        <Square bg="gray.100" w={30} h={10} rounded={4}>
          <Input placeholder="0" onBlur={onBlurInput} />
          {value}
        </Square>
        <Square bg="gray.200" w={30} h={12} rounded={4}>
          {modificador}
        </Square>
      </Flex>
    </Box>
  )
}

export const Atributos = () => (
  <Center>
    <Atributo name="Força" />
    <Atributo name="Destreza" />
    <Atributo name="Constituição" />
    <Atributo name="Inteligência" />
    <Atributo name="Sabedoria" />
    <Atributo name="Carisma" />
  </Center>
)
