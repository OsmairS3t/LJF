import { Title } from "./styles"

interface ButtonProps {
    title: String;
}
export function ButtonTitle({ title }: ButtonProps) {
    return (
        <Title>{title}</Title>
    )
}