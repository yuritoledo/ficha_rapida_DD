import { Editable, EditablePreview, EditableInput } from '@chakra-ui/react'
import { FocusEvent, useState } from 'react'

interface Props {
  placeholder: string
  onBlur?(value: string): void
}

export const Input = (props: Props) => {
  const { placeholder } = props

  const [value, setValue] = useState('')

  const onBlur = (event: FocusEvent<HTMLInputElement>) => {
    props.onBlur?.(event.target.value)
  }

  return (
    <Editable
      onChange={setValue}
      value={value}
      placeholder={placeholder}
      borderBottomColor="purple.500"
      borderBottomWidth={2}
      borderBottomRadius={4}
    >
      <EditablePreview pl={2} pr={10} />
      <EditableInput onBlur={onBlur} />
    </Editable>
  )
}
