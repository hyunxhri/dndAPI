// ClassRaces.js
import React, { useState } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import DataFetching from './components/Fetch/DataFetching'
import DataDetailsFetching from './components/Fetch/DataDetailsFetching'
import ClassModal from './components/Modals/ClassModal'
import RaceModal from './components/Modals/RaceModal'
import SpellModal from './components/Modals/SpellModal'
import path from "./env/env"

import "./App.css"
const Data = ({ endpoint }) => {
  const [data, setData] = useState([])
  const [images, setImages] = useState({})
  const [selectedItem, setSelectedItem] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [itemDetails, setItemDetails] = useState(null)

  const setImagesByEndpoint = (data) => {
    const imageObj = {}
    data.forEach(item => {
      imageObj[item.name] = `${path}/assets/imgs/${endpoint}/${item.name}.png`
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
      <Sidebar />
      <article className='gridautofill'>
      {data.map((item) => (
      <div key={item.index} className={endpoint !== "spells" ? 'class-item' : 'class-item class-item-spells'} onClick={() => openModal(item)}>
        <h2 className='dragonhunter-f8f8ff'>{item.name}</h2>
        {endpoint !== "spells" && <img src={images[item.name]} alt={`${item.name} image`} />}
      </div>
      ))}
      </article>
      <DataFetching endpoint={endpoint} setData={setData} setImages={setImages} setImagesByEndpoint={setImagesByEndpoint} />
      <DataDetailsFetching selectedItem={selectedItem} setItemDetails={setItemDetails} endpoint={endpoint} />
      {modalOpen && selectedItem && itemDetails && (
        <>
            {endpoint === "classes" ? 
                <ClassModal selectedItem={selectedItem} itemDetails={itemDetails} closeModal={closeModal} createSimpleCategoryTable={createSimpleCategoryTable} />
            : endpoint === "races" ? 
                <RaceModal selectedItem={selectedItem} itemDetails={itemDetails} closeModal={closeModal} createSimpleCategoryTable={createSimpleCategoryTable} />
            :   <SpellModal selectedItem={selectedItem} itemDetails={itemDetails} closeModal={closeModal} createSimpleCategoryTable={createSimpleCategoryTable} />
            }
        </>
      )}
    </section>
  )
}

export default Data
