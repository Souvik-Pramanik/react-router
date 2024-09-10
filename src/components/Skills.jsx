import { Link,Outlet } from "react-router-dom";
const Skills = () =>
{
    return (
        <div className="skills">
            <ul>
                <Link to="/skills/design">UX & UI</Link>
                <Link to="/skills/webfrontend">Frontend</Link>
                <Link to ="/skills/webbackend">Backend</Link>
                <Link to ="/skills/database">Database</Link>
                <Outlet />
            </ul>
        </div>
    )
}
export default Skills;