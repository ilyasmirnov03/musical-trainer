import { Link } from "react-router-dom";
import { routes } from "../../constants/routes.const";

export default function Header() {
  return (
    <header>
        <nav>
            <ul>
                {routes.map((route, index) => {
                    return <li key={index}><Link to={route.path}>{route.name}</Link></li>
                })}
            </ul>
        </nav>
    </header>
  )
}
