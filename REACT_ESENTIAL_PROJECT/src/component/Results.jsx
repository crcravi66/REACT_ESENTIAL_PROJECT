import { calculateInvestmentResults } from '../util/investment'


export default function Results({ input }) {
    const resultDatas = calculateInvestmentResults(input)
    console.log(resultDatas)
    return <p>Results...</p>
}