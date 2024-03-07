import { StatisticLine } from "./StatisticLine"

export function Statistics({good, bad, neutral}) {
    const total = good + bad + neutral
    const average = (good - bad) / total
    const positive = (good/total) * 100

    if(good !== 0 && bad !== 0 && neutral !== 0) {
        return (
            <table>
                <tbody>
                    <StatisticLine text="good" value={good} />
                    <StatisticLine text="neutral" value={neutral} />
                    <StatisticLine text="bad" value={bad} />
                    <StatisticLine text="total" value={total} />
                    <StatisticLine text="average" value={average} />
                    <StatisticLine text="positive" value={positive} isPercent={true} />
                </tbody>
            </table>
        )
    }
    return (
        <div>
            the app is used by geeving feedback of all types
        </div>
    )
}