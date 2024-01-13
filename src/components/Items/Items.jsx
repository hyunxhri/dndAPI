import React, { useState, useEffect } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import "./Items.css"

const Classes = ( { endpoint } ) => {

    const [data, setData] = useState([])
    const [images, setImages] = useState({})

    useEffect(() => {

      //Delete data and images to avoid printing incorrect information while the API does not provide us with the new information.
      setData([])
      setImages({})

        const fetchData = () => {
          fetch(`https://www.dnd5eapi.co/api/${endpoint}`)
            .then(response => {
              if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`)
              }
              return response.json()
            })
            .then(data => {
              console.log(data)
              setData(data.results)
            })
            .catch(error => {
              console.error('Error fetching classes data:', error)
            })
        }

        const setImagesByEndpoint = () => {
          if (endpoint === 'races') {
            setImages({
              'Dragonborn': '/src/assets/imgs/races/Dragonborn.png',
              'Dwarf': '/src/assets/imgs/races/Dwarf.png',
              'Elf': '/src/assets/imgs/races/Elf.png',
              'Gnome': '/src/assets/imgs/races/Gnome.png',
              'Half-Elf': '/src/assets/imgs/races/Half-Elf.png',
              'Half-Orc': '/src/assets/imgs/races/Half-Orc.png',
              'Halfling': '/src/assets/imgs/races/Halfling.png',
              'Human': '/src/assets/imgs/races/Human.png',
              'Tiefling': '/src/assets/imgs/races/Tiefling.png',
            })
          } else if (endpoint === 'classes') {
            setImages({
              'Bard': '/src/assets/imgs/classes/Bard.png',
              'Barbarian': '/src/assets/imgs/classes/Barbarian.png',
              'Cleric': '/src/assets/imgs/classes/Cleric.png',
              'Druid': '/src/assets/imgs/classes/Druid.png',
              'Fighter': '/src/assets/imgs/classes/Fighter.png',
              'Monk': '/src/assets/imgs/classes/Monk.png',
              'Paladin': '/src/assets/imgs/classes/Paladin.png',
              'Ranger': '/src/assets/imgs/classes/Ranger.png',
              'Rogue': '/src/assets/imgs/classes/Rogue.png',
              'Sorcerer': '/src/assets/imgs/classes/Sorcerer.png',
              'Warlock': '/src/assets/imgs/classes/Warlock.png',
              'Wizard': '/src/assets/imgs/classes/Wizard.png',
            })
          }
        }
      
        fetchData()
        setImagesByEndpoint()
      }, [endpoint])
    
    

    return (
        <section>
            <Sidebar/>
            <article className='gridautofill'>
            {data.map((item) => (
                <div key={item.index} className='class-item'>
                    <h2 className='dragonhunter-f8f8ff'>{item.name}</h2>
                    <img src={images[item.name]} alt={`${item.name} image`} />
                </div>
                ))}
            </article>
        </section>
    )
}

export default Classes