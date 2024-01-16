import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Sidebar.css"
import { GiFireSpellCast, GiElfEar, GiAxeSword, GiDiceTwentyFacesTwenty, GiSpikedDragonHead, GiSpellBook, GiDungeonGate } from "react-icons/gi"
import updateUserLoggedInUsers from '../../updateUserLoggedInUsers'

const Sidebar = () => {
  const [isUserLogged, setIsUserLogged] = useState(false)
  const userLogged = JSON.parse(localStorage.getItem('UserLogged'))

  useEffect(() => {
    userLogged ? setIsUserLogged(true) :  setIsUserLogged(false)
  }, [userLogged])

  const disconnectUser = () => {
    updateUserLoggedInUsers()
    localStorage.removeItem('UserLogged')
    setIsUserLogged(false)
  }

    return(
      <aside className='sidebar'>
        <GiDiceTwentyFacesTwenty className="icon logo"/>
        <nav>
          <ul>
            <li>
              <GiDungeonGate className="icon"/>
              <Link className='dragonhunter-f8f8ff' to="/">Index</Link>
            </li>
            <hr/>
            <li>
              <GiAxeSword className="icon"/>
              <Link className='dragonhunter-f8f8ff' to="/classes">Class</Link>
            </li>
            <li>
              <GiElfEar className="icon"/>
              <Link className='dragonhunter-f8f8ff' to="/races">Races</Link>
            </li>
            <li>
              <GiFireSpellCast className="icon"/>
              <Link className='dragonhunter-f8f8ff' to="/spells">Spells</Link>
            </li>
            <hr/>
            {isUserLogged 
            ? (<>
                <li>
                <GiSpikedDragonHead className="icon"/>
                <Link className='dragonhunter-f8f8ff' to="/profile">Profile</Link>
                </li>
                <li>
                    <GiSpellBook className="icon"/>
                    <Link className='dragonhunter-f8f8ff' to="/contact">Contact us!</Link>
                </li>     
                <hr/>
                <li><Link onClick={disconnectUser} className='dragonhunter-f8f8ff' to="/">Disconnect</Link></li>
              </>)
             : (<>
                <li>
                    <GiSpellBook className="icon"/>
                    <Link className='dragonhunter-f8f8ff' to="/contact">Contact us!</Link>
                </li> 
                <hr/>
                <li><Link className='dragonhunter-f8f8ff' to="/login">Login</Link></li>
                <li><Link className='dragonhunter-f8f8ff' to="/register">Register</Link></li>     
              </>)}
          </ul>
        </nav>
      </aside>
    )
}

export default Sidebar