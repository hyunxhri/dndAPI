import React, { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import ArticleText from './components/ArticleText'
import { Link } from 'react-router-dom'
import PaginatedData from './components/PaginatedData/PaginatedData'
import Search from './components/Search/Search'
import SpellModal from './components/Modals/SpellModal'
import DataDetailsFetching from './components/Fetch/DataDetailsFetching'
import UserInfoProfile from './components/UserInfoProfile'
import "./components/Search/Search.css"

const Profile = () => {
  const [userLogged, setUserLogged] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [spellsFiltered, setSpellsFiltered] = useState('')
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)
  const [itemDetails, setItemDetails] = useState(null)

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('UserLogged'))
    setUserLogged(user)
  }, [])

  const title = (
    <>You're not logged in</>
  )

  const text = (
    <>
      If you want a profile you must <Link to="/register">register</Link> or <Link to="/login">log in</Link> with your account.
    </>
  )

  const renderItem = (item) => (
    <div key={item.index} className='class-item class-item-spells' onClick={() => openModal(item)}>
      <h2 className='dragonhunter-f8f8ff'>{item.name}</h2>
    </div>
  )

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
    <>
          <section className='landingPage'>
            <Sidebar/>
          {userLogged ? 
            <>
              <article className='w100flexstart'>
                <UserInfoProfile user={userLogged}/>
                <div className="gridautofill no-padding">
                  <Search data={userLogged.favs} setSpellsFiltered={setSpellsFiltered} setCurrentPage={setCurrentPage}/>
                  <PaginatedData data={spellsFiltered.length !== 0 ? spellsFiltered : userLogged.favs} itemsPerPage={28} renderItem={renderItem} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                </div>
              </article>
                  <DataDetailsFetching selectedItem={selectedItem} setItemDetails={setItemDetails} />
                  {modalOpen && selectedItem && itemDetails && (
                    <SpellModal selectedItem={selectedItem} itemDetails={itemDetails} closeModal={closeModal} createSimpleCategoryTable={createSimpleCategoryTable} />
                  )}
            </> :
            <>
              <ArticleText title={title} text={text}/>
            </>
          }
          </section>
    </>
  )

}

export default Profile