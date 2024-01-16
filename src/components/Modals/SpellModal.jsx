import React from 'react'
import FavButton from '../FavButton/FavButton'

const SpellModal = ({ selectedItem, itemDetails, closeModal, createSimpleCategoryTable }) => {
  return (
    <article className="modal">
      <div className='modal-content'>
        <h2>{selectedItem.name}</h2> 
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
      </div>
          <FavButton itemDetails={itemDetails} />
          <button onClick={closeModal}>Close</button>
    </article>
  )
}

export default SpellModal
