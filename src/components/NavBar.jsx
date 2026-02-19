import { Link } from 'react-router-dom'

function NavBar(){
    return(
        <div>
            <div className="flex flex-row  justify-center bg-black/90 p-1 gap-4 fixed w-full top-0 z-10">                
                <Link to="/" className="cursor-pointer hover:bg-gray-900 p-2">Início</Link>               
                <Link to="/sobre" className="cursor-pointer hover:bg-gray-900 p-2">Sobre</Link>
            </div>
        </div>
    )
}

export default NavBar