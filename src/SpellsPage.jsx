import React, { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Search from './components/Search/Search'
import DataFetching from './components/Fetch/DataFetching'
import DataDetailsFetching from './components/Fetch/DataDetailsFetching'
import SpellModal from './components/Modals/SpellModal'
import PaginatedData from './components/PaginatedData/PaginatedData'

const Data = ({ endpoint }) => {
  const [data, setData] = useState([])
  const [selectedItem, setSelectedItem] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [itemDetails, setItemDetails] = useState(null)
  const [filteredData, setFilteredData] = useState([])  
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    // Reset currentPage to 1 when the endpoint changes
    setCurrentPage(1)
  }, [endpoint])

  const openModal = (itemInfo) => {
    setSelectedItem(itemInfo)
    setModalOpen(true)
  }

  const closeModal = () => {
    setSelectedItem(null)
    setModalOpen(false)
    setItemDetails(null)
  }

  const handleSearch = (searchTerm) => {
    // Check if the name of the item has the search them in it.
    const filtered = data.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    console.log(filtered)
    setFilteredData(filtered)

    // Reset the number page when search.
    setCurrentPage(1)
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

  const renderItem = (item) => (
    <div key={item.index} className='class-item class-item-spells' onClick={() => openModal(item)}>
      <h2 className='dragonhunter-f8f8ff'>{item.name}</h2>
    </div>
  )

  return (
    <section>
      <Sidebar />
      <article className='gridautofill'>
        <Search onSearch={handleSearch} />
        { filteredData.length != 0 ?
            <PaginatedData data={filteredData} itemsPerPage={28} renderItem={renderItem} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        :
            <PaginatedData data={data} itemsPerPage={28} renderItem={renderItem} currentPage={currentPage} setCurrentPage={setCurrentPage}/>  
        }
      </article>
      <DataFetching endpoint={endpoint} setData={setData} setImages={() => ''} setImagesByEndpoint={() => ''} />
      <DataDetailsFetching selectedItem={selectedItem} setItemDetails={setItemDetails} endpoint={endpoint} />
      {modalOpen && selectedItem && itemDetails && (
        <SpellModal selectedItem={selectedItem} itemDetails={itemDetails} closeModal={closeModal} createSimpleCategoryTable={createSimpleCategoryTable} />
      )}
    </section>
  )
}

export default Data
