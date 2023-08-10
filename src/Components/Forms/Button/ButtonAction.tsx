import { Button } from 'react-native'

interface ButtonActionProps {
  onPress?: ()=>void;
}

export function ButtonAction({onPress}:ButtonActionProps) {
  return (
    <Button onPress={onPress} title='' />
  )
}