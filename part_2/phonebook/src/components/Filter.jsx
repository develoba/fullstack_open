export function Filter({ newFilter, handleFilter, filteredPersons}) {
    return (
        <>
            <div>
                filter shown with <input value={newFilter} onChange={handleFilter} />
            </div>
            {filteredPersons.map(filteredPerson => <p key={filteredPerson.name}>{filteredPerson.name} {filteredPerson.number}</p>)}
        </>
    )
}