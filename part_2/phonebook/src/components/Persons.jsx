export function Persons({ persons, onDelete }) {
    return (
        <>
            {persons.map(person => {
                return (
                    <div key={person.id}>
                        {person.name} {person.number} <button onClick={() => onDelete(person.id)}>delete</button>
                    </div>
                )}
            )}
        </>
    )
}