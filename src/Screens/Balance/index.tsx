import { useEffect, useState } from 'react';
import { Platform, Switch, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';

import Highlight from '@components/Highlight';
import { Select } from '@components/Forms/Select';
import { InputForm } from '@components/Forms/InputForm';
import { Button } from '@components/Forms/Button';

import {
    Container,
    Form,
    ContainerButton,
    GroupSwitch,
    TextSwitch,
    GroupImage,
    BtnImage,
    BtnImageText
} from './styles';
import { ImagePickerAsset } from 'expo-image-picker/build/ImagePicker.types';

export function Balance() {
    const [typeTransformed, setTypeTransformed] = useState('Entrada')
    const [type, setType] = useState<string>('income')
    const [imgComprove, setImgComprove] = useState<string>('/assets/farol.png')
    const [isEnabled, setIsEnabled] = useState(false);
    const navigation = useNavigation();

    function handleBack() {
        navigation.navigate('home')
    }

    function handleSwitch() {
        if (type === 'income') {
            setType('outcome')
            setIsEnabled(!isEnabled)
            setTypeTransformed('Saída')
        } else {
            setType('income')
            setIsEnabled(!isEnabled)
            setTypeTransformed('Entrada')
        }
    }

    async function LoadImage() {
        if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
            if (status !== 'granted') {
                alert('Permission denied!')
            }
        }
    }

    useEffect(() => {
        LoadImage();
    }, [])

    const PickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        })

        console.log(result)
        if (!result.canceled) {
            setImgComprove(result.assets[0].uri)
        }
    }

    return (
        <Container>
            <Form>
                <Highlight onPress={handleBack} title='Incluir Lançamentos' />
                <Select placeholder='Categoria' />
                <InputForm placeholder='Descrição' />
                <InputForm placeholder='Valor' />
                <GroupSwitch>
                    <TextSwitch>
                        {typeTransformed}
                    </TextSwitch>
                    <Switch
                        trackColor={{ false: '#792ec5', true: '#4b86eb' }}
                        thumbColor={isEnabled ? '#777' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={handleSwitch}
                        value={isEnabled}
                    />
                </GroupSwitch>
                <GroupImage>
                    <BtnImage onPress={PickImage}>
                        <BtnImageText>Carregar Imagem</BtnImageText>
                    </BtnImage>
                    <Image source={{ uri: imgComprove }} style={{
                        width: 200,
                        height: 200
                    }} />
                </GroupImage>
            </Form>
            <ContainerButton>
                <Button.root>
                    <Button.title title="Incluir" />
                </Button.root>
            </ContainerButton>
        </Container>
    )
}

