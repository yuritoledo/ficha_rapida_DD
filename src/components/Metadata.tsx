import {
  Center,
  Circle,
  Text,
} from '@chakra-ui/react'
import { Input } from './Input'

export const Metadata = () => (
  <Center>
    <Input placeholder="Nome" />
    <Input placeholder="Classe" />
    <Input placeholder="Raça" />
    <Input placeholder="Antecedente" />
    <Input placeholder="Alinhamento" />
    <Circle bg="red.100">
      <Text>
        1
      </Text>
    </Circle>
  </Center>
)
