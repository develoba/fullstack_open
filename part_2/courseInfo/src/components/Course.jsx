import { Content } from "./Content";
import { Header } from "./Header";

export function Course({ course }) {
    return (
        <div>
            <Header title={course.name} />
            <Content parts={course.parts} />
        </div>
    )
}