import { useState, useEffect } from 'react';
import { FlatList, Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { IResumeCategory } from '@utils/interfaces';
import { Balances, Categories } from '@utils/database';
import ResumeCategory from '@components/ResumeCategory';
import { Graphic } from '@components/Graphic';

import {
    Container,
    GroupButtonsHeader,
    ButtonNavigate,
    ListBalances,
    NewBalances,
    ButtonDate,
    GroupInput,
    ListRsume,
    TitleTransactions
} from './styles';

export function Home() {
    const navigation = useNavigation();
    const [resumes, setResumes] = useState<IResumeCategory[]>([])
    const [dateBalance, setDateBalance] = useState('01/08/2023')

    function handleListBalance() {
        navigation.navigate('listbalance')
    }

    function handleNewBalance() {
        navigation.navigate('balance')
    }

    function resumeBalancesCategory(dateBalance: string) {
        let sumCategory = 0;
        let arrBalanceCategories: IResumeCategory[] = []
        Categories.map(category => {
            sumCategory = 0
            const dataBalance = Balances
                .filter(balance => balance.datebalance === dateBalance)
                .filter(balance => balance.category === category.id)
            dataBalance.map(data => {
                sumCategory = sumCategory + data.price
            })
            const newData = {
                idcategory: category.id,
                iconcategory: category.icon,
                namecategory: category.name,
                colorcategory: category.color,
                balancecategory: sumCategory,
                datebalance: dateBalance
            }
            arrBalanceCategories.push(newData)
        })
        return arrBalanceCategories
    }

    useEffect(() => {
        setResumes(resumeBalancesCategory(dateBalance))
    }, [dateBalance])

    return (
        <Container>
            <GroupButtonsHeader>
                <ButtonNavigate onPress={handleListBalance}>
                    <ListBalances size={30} />
                </ButtonNavigate>

                <GroupInput>
                    <ButtonDate
                        title={dateBalance}
                        onPress={() => { }}
                    />
                </GroupInput>
                <ButtonNavigate onPress={handleNewBalance}>
                    <NewBalances size={30} />
                </ButtonNavigate>
            </GroupButtonsHeader>

            <Graphic resumesCategory={resumes} />

            <ListRsume>
                <TitleTransactions>RESUMO DO DIA {dateBalance}</TitleTransactions>
                <FlatList
                    data={resumes}
                    keyExtractor={item => item.idcategory.toString()}
                    renderItem={({ item }) => (
                        <ResumeCategory balanceCategory={item} />
                    )}
                    showsVerticalScrollIndicator={false}
                />
            </ListRsume>
        </Container>
    )
}
