import { useState } from 'react'

import {
    Container,
    Label,
    BgContainer,
    SwContainerLeft,
    SwContainerRight,
    SwTextLeft,
    SwTextRight
} from './styles'

interface SwichtProps {
    isEnabled: boolean;
    setIsEnabled: Function;
}

export function Switcher({ isEnabled, setIsEnabled }: SwichtProps) {
    const [enabled, setEnabled] = useState(isEnabled);

    function toggleSwitch() {
        setEnabled(!enabled)
        setIsEnabled(enabled)
    }

    return (
        <Container>
            <Label>Tipo:</Label>
            <BgContainer>
                <SwContainerLeft isEnabled={enabled} onPress={toggleSwitch}>
                    <SwTextLeft>Entrada</SwTextLeft>
                </SwContainerLeft>
                <SwContainerRight isEnabled={enabled} onPress={toggleSwitch}>
                    <SwTextRight>Saida</SwTextRight>
                </SwContainerRight>
            </BgContainer>
        </Container>
    )
}