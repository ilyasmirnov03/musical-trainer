import { Outlet } from "react-router-dom";
import Header from "./@global/header";

export default function App() {
  return (
    <>
        <Header></Header>
        <main>
            <Outlet></Outlet>
        </main>
    </>
  )
}
