import {
    Container, Label, InputSelect, PlaceHolder, Icon
} from './styles';

interface Props {
    label?: string;
}
export default function Select({ label }: Props) {
    return (
        <Container>
            <Label>{label}</Label>
            <InputSelect>
                <PlaceHolder>Selecione...</PlaceHolder>
                <Icon />
            </InputSelect>
        </Container>
    )
}
