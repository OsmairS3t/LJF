import {
    Container,
    ButtonHighlightIcon,
    Icon,
    GroupTitle,
    Title
} from './styles'

interface HighlightProps {
    title: string;
    onPress: () => void;
}

export default function Highlight({ title, onPress }: HighlightProps) {
    return (
        <Container>
            <ButtonHighlightIcon onPress={onPress}>
                <Icon />
            </ButtonHighlightIcon>
            <GroupTitle>
                <Title>{title}</Title>
            </GroupTitle>
        </Container>
    )
}