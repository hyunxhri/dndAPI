import React, { useState, useEffect } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import "./Data.css"

const BASIC_URL = 'https://www.dnd5eapi.co'

const ClassRaces = ( { endpoint } ) => {

    const [data, setData] = useState([])
    const [images, setImages] = useState({})
    const [selectedItem, setSelectedItem] = useState(null)
    const [modalOpen, setModalOpen] = useState(false)
    const [itemDetails, setItemDetails] = useState(null)


    useEffect(() => {

      //Delete data and images to avoid printing incorrect information while the API does not provide us with the new information.
      setData([])
      setImages({})


        const fetchData = () => {
          fetch(`${BASIC_URL}/api/${endpoint}`)
            .then(response => {
              if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`)
              }
              return response.json()
            })
            .then(data => {
              console.log(data)
              setData(data.results)
              {endpoint != "spells" && setImagesByEndpoint(data.results)}
            })
            .catch(error => {
              console.error('Error fetching classes data:', error)
            })
        }
      
        fetchData()
      }, [endpoint])
    
    
      useEffect(() => {
        const fetchItemDetails = () => {
          if (selectedItem) {
            fetch(`${BASIC_URL}${selectedItem.url}`)
              .then(response => {
                if (!response.ok) {
                  throw new Error(`HTTP error! Status: ${response.status}`)
                }
                return response.json()
              })
              .then(details => {
                console.log(details)
                setItemDetails(details)
              })
              .catch(error => {
                console.error('Error fetching class details:', error)
              })
          }
        }
    
        fetchItemDetails()
      }, [selectedItem])
    
      const setImagesByEndpoint = (data) => {
        const imageObj = {}
        data.forEach(item => {
          imageObj[item.name] = `/src/assets/imgs/${endpoint}/${item.name}.png`
        })
        setImages(imageObj)
      }

      const openModal = (itemInfo) => {
        setSelectedItem(itemInfo)
        setModalOpen(true)
      }
    
      const closeModal = () => {
        setSelectedItem(null)
        setModalOpen(false)
        setItemDetails(null)
      }

      useEffect(() => {
        closeModal()
      }, [endpoint])

      const createSimpleCategoryTable = (property) => {
        return (
          <>
            <h3>{property}:</h3>
            <table>
              <tbody>
                {itemDetails[property].map((item, index) => (
                  <tr key={item.index ? item.index : index}>
                    <td>{item.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )
      }

    return (
        <section>
            <Sidebar/>
            <article className='gridautofill'>
            {data.map((item) => (
                <div key={item.index} className={endpoint !== "spells" ? 'class-item' : 'class-item class-item-spells'}  onClick={() => openModal(item)}>
                    <h2 className='dragonhunter-f8f8ff'>{item.name}</h2>
                    {endpoint != "spells" && <img src={images[item.name]} alt={`${item.name} image`} />}
                </div>
                ))}
            </article>
            {modalOpen && selectedItem && itemDetails && (
              <article className="modal">
                <div className='modal-content'>
                  <h2>{selectedItem.name}</h2> 
                  {endpoint === "classes" ? (
                    <>
                    {/*If endpoints is classes*/}
                    {itemDetails.spellcasting ? <h3> -- {itemDetails.spellcasting.spellcasting_ability.name}, HD : {itemDetails.hit_die} -- </h3> : <h3>-- HD : {itemDetails.hit_die} --</h3>}
                    <hr/>
                    {createSimpleCategoryTable('subclasses')}
                    {createSimpleCategoryTable('saving_throws')}
                    {createSimpleCategoryTable('proficiencies')}
                    <h3>Equipment :</h3>
                    <table>
                      <tbody>
                        {itemDetails.starting_equipment.map((startingEquipment) => (
                          <tr key={startingEquipment.equipment.index}>
                            <td>{startingEquipment.equipment.name}</td>
                            <td className='text-center'>{startingEquipment.quantity}</td>
                          </tr>
                        ))}
                        {itemDetails.starting_equipment_options.map((startingEquipmentOptions, index) => (
                          <tr key={index}>
                            <td colSpan="2">{startingEquipmentOptions.desc}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table> 
                    </>
                  ) : endpoint === 'races' ? (
                    <>
                      {/*If endpoints is races*/}
                      {<h3> -- Size : {itemDetails.size} / Speed : {itemDetails.speed} -- </h3>}
                      <p>{itemDetails.size_description}</p>
                      <p>{itemDetails.age}</p>
                      <p>{itemDetails.alignment}</p>


                      <h3>Ability bonuses</h3>
                      <table>
                        <tbody>
                          {itemDetails.ability_bonuses.map((ability) => (
                            <tr key={ability.ability_score.index}>
                              <td>{ability.ability_score.name}</td>
                              <td className='text-center'>{ability.bonus}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table> 
                      {createSimpleCategoryTable('languages')}
                      <p>{itemDetails.language_desc}</p>
                      {/*&& does not render if the condition is false*/}
                      {itemDetails.language_options && (
                        <>
                          <h3>Choose {itemDetails.language_options.choose} language from the list:</h3>
                          <table>
                            <tbody>
                              {itemDetails.language_options.from.options.map((option) => (
                                <tr key={option.item.index}>
                                  <td>{option.item.name}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </>
                      )}
                      {itemDetails.traits.length > 0 && createSimpleCategoryTable('traits')}
                      {itemDetails.starting_proficiencies.length > 0 && createSimpleCategoryTable('starting_proficiencies')}
                      
                    </>
                  ) : (
                    <>
                      {/*If endpoints is spells*/}
                      <ul>
                        {itemDetails.attack_type && <li>{itemDetails.attack_type}</li>}
                        {itemDetails.range && <li>{itemDetails.range}</li>}
                        {itemDetails.casting_time && <li>Casting time : {itemDetails.casting_time}</li>}
                        {itemDetails.damage && itemDetails.damage.damage_type && <li>Damage type : {itemDetails.damage.damage_type.name}</li>}
                        {itemDetails.duration && <li>Duration : {itemDetails.duration}</li>}
                        {itemDetails.ritual && <li>Ritual</li>}
                        {itemDetails.school && <li>School: {itemDetails.school.name}</li>}


                      </ul>
                      <p>{itemDetails.desc}</p>
                      {itemDetails.higher_level.length > 0 && <p>{itemDetails.higher_level}</p>}
                      <h3>Components:</h3>
                      <table>
                        <tbody>
                          <tr>
                          {itemDetails.components.map((component, index) => (
                              <td key={index} className='components'>{component}</td>
                          ))}
                          </tr>
                        </tbody>
                      </table>
                      {createSimpleCategoryTable('classes')}
                      {itemDetails.subclasses.length > 1 && createSimpleCategoryTable('subclasses')}
                    </>
                  )}
                  
                </div>
                  {itemDetails.spells && <button>Spells by class</button>}
                  {endpoint === "spells" && <button>Add To favs</button>}
                  <button onClick={closeModal}>Close</button>
              </article>
            )}
        </section>
    )
}

export default ClassRaces