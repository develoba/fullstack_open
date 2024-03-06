import { Part } from "./Part";

export function Content({ parts }) {
    return(
        <div>
            <Part part={parts[0]} />
            <Part part={parts[1]} />
            <Part part={parts[2]} />
        </div>
    )
}