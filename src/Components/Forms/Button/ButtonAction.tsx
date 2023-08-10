import { Button, ButtonProps } from 'react-native'

interface ButtonActionProps extends ButtonProps {
  onPress?: () => void;
}

export function ButtonAction({ onPress }: ButtonActionProps) {
  return (
    <Button onPress={onPress} title='' />
  )
}