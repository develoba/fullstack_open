export function StatisticLine({text, value, isPercent=false}) {
    return (
        <tr>{text} {value} {isPercent ? "%" : ""}</tr>
    )
}