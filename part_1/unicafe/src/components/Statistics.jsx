export function Statistics({good, bad, neutral}) {
    const total = good + bad + neutral
    const average = (good - bad) / total
    const positive = (good/total) * 100

    if(good !== 0 && bad !== 0 && neutral !== 0) {
        return (
            <div>
                <p>good {good}</p>
                <p>neutral {neutral}</p>
                <p>bad {bad}</p>
                <p>all {total}</p>
                <p>average {average}</p>
                <p>positive {positive} %</p>
            </div>
        )
    }
    return (
        <div>
            the app is used by geeving feedback of all types
        </div>
    )
}