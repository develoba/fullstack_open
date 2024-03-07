export function StatisticLine({text, value, isPercent=false}) {
    return (
        <p>{text} {value} {isPercent ? "%" : ""}</p>
    )
}