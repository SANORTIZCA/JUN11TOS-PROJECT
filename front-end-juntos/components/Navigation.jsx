import Link from "next/link";
import "./Navigation.css"

function Navigation (){
    return (
    <nav className="navigation">


         <h1>JU11TOS</h1>


      <ul >
        <li>
          <Link href="/">Inicio</Link>
        </li>
        <li>
        <Link href="/busqueda">Busqueda</Link>
        </li>
        <li>
        <Link href="/ayuda">Ayuda</Link>
        </li>
        <li>
        <Link href="/contacto">Contacto</Link>
        </li>
        <li>
        <Link href="/ingreso">Ingresar</Link>
        </li>
        <li>
        <Link href="/registro">Registrarse</Link>
        </li>
      </ul>
    </nav>
    )
}

export default Navigation;
