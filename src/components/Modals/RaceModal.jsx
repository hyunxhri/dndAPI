import React from 'react'

const RaceModal = ({ selectedItem, itemDetails, closeModal, createSimpleCategoryTable }) => {
  return (
    <article className="modal">
        <div className='modal-content'>
            <h2>{selectedItem.name}</h2> 
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
        </div>
            <button onClick={closeModal}>Close</button>
    </article>
  )
}

export default RaceModal