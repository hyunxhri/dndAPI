import React from 'react'
import { useNavigate } from 'react-router-dom'

const ClassModal = ({ selectedItem, itemDetails, closeModal, createSimpleCategoryTable }) => {

    const navigate = useNavigate()

    const handleSpellsByClassClick = async (classIndex) => {
        try {
          const response = await fetch(`https://www.dnd5eapi.co/api/classes/${classIndex}/spells`)
          const data = await response.json()
          navigate(`/spells/${classIndex}`, { state: { spells: data } })
        } catch (error) {
          console.error('Error fetching class spells:', error)
        }
      }
      
  return (
    <article className="modal">
      <div className='modal-content'>
        <h2>{selectedItem.name}</h2> 
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
        </div>
        {itemDetails.spells && <button onClick={() => handleSpellsByClassClick(selectedItem.index)}>Spells by class</button>}
        <button onClick={closeModal}>Close</button>
    </article>
    )
}

export default ClassModal
