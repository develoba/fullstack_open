export function Total({ parts }) {
    const total = parts.reduce(
        (sum, currentValue) => sum + currentValue.exercises,
        0
    )

    return (
        <p><strong>total of {total} exercises</strong></p>
    )
}