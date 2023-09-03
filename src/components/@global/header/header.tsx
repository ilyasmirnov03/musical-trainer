import { Link } from "react-router-dom";
import { routes } from "../../../constants/routes.const";
import './header.css';

export default function Header() {
  return (
    <header className="header">
        <nav>
            <ul className="list">
                {routes.map((route, index) => {
                    return <li key={index}><Link to={route.path}>{route.name}</Link></li>
                })}
            </ul>
        </nav>
    </header>
  )
}
