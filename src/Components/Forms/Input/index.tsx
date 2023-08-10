
import {
    Container, Label, InputText
} from './styles';

interface Props {
    label?: string;
}
export default function Input({ label }: Props) {
    return (
        <Container>
            <Label>{label}</Label>
            <InputText />
        </Container>
    )
}
