import { Link } from 'react-router-dom'
import "./Sidebar.css"
import { GiFireSpellCast, GiElfEar, GiAxeSword, GiDiceTwentyFacesTwenty   } from "react-icons/gi";

const Sidebar = () => {
    return(
      <aside className='sidebar'>
        <GiDiceTwentyFacesTwenty className="icon logo"/>
        <nav>
          <ul>
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
            <li><Link className='dragonhunter-f8f8ff' to="/login">Login</Link></li>
            <li><Link className='dragonhunter-f8f8ff' to="/register">Register</Link></li>
          </ul>
        </nav>
      </aside>
    )
}

export default Sidebar