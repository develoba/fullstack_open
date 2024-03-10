import { Part } from './Part'
import { Total } from './Total'

export function Content({ parts }) {
    return (
        <div>
            {parts.map(part => <Part key={part.id} part={part} />)}
            <Total parts={parts} />
        </div>
    )
}