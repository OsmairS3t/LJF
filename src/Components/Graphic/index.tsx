import { useState, useEffect } from 'react';
import DatePicker from 'react-native-date-picker';
import { VictoryPie, VictoryTooltip } from 'victory-native'
import { IBalance, IResumeBalance } from '@utils/interfaces';
import { Balances, Category, ResumeBalances } from '@utils/database';

import {
    Container,
    Block
} from './styles';
import { InputForm } from '@components/Forms/InputForm';
import { Button } from 'react-native'

export function Graphic() {
    const [dataResume, setDataResume] = useState<IResumeBalance[]>([])
    const [resume, setResume] = useState<IResumeBalance[]>(ResumeBalances)
    const [date, setDate] = useState(new Date())

    function SearchNameCategory(id: number) {
        const nameCategory = Category.find(cat => cat.id === id);
        return nameCategory ? nameCategory.name : ''
    }

    function SearchColorCategory(id: number) {
        const colorCategory = Category.find(cat => cat.id === id);
        return colorCategory ? colorCategory.color : '#fff'
    }

    function SumCategoryByBalanceFiltered(id: number, balances: IBalance[]) {
        const sumCategory = balances.filter(balance => balance.category === id);
        let sumCat = 0;
        sumCategory.map(sc => {
            sumCat = sumCat + sc.price
        })
        return sumCat
    }

    function ListResume(dateResume: string) {

        const resumeListed = Balances.filter(balance => balance.datebalance === dateResume);
        //resumeListed.map(rl => {
        //    setDataResume({
        //        id: rl.id,
        //        name: SearchNameCategory(rl.category),
        //        value: rl.price,
        //        datebalance: '01/08/2023',
        //        color: SearchColorCategory(rl.id)
        //    })
        //})
        console.log(resumeListed)
    }

    useEffect(() => {
        ListResume('10/08/2023')
    }, [])

    return (
        <Container>
            <Block>
            </Block>
            <VictoryPie
                data={resume}
                width={290}
                x='name'
                y='value'
                colorScale={resume.map(res => res.color)}
                animate={{
                    duration: 2000,
                    easing: "bounce"
                }}
                style={{
                    labels: {
                        fill: '#fff'
                    },
                    data: {
                        fillOpacity: 0.8,
                        stroke: ({ datum }) => datum.color,
                        strokeWidth: 1
                    }
                }}
                labelComponent={
                    <VictoryTooltip
                        renderInPortal={false}
                        flyoutStyle={{
                            fill: ({ datum }) => datum.color
                        }}
                    />
                }
            />
        </Container>
    )
}