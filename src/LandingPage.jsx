import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import ArticleText from './components/ArticleText'
const LandingPage = () => {

  const title = (
    <>Welcome to Dungeons & Dragons</>
  )

  const text = (
    <>
      In Dungeons & Dragons, the players form an adventuring party who explore fantasy worlds together as they embark on epic quests and level up in experience.  The Dungeon Master (also known as the DM) is the game's referee and storyteller. There's no winning or losing in D&D—at least, not in the conventional way.
      <br/><br/>
      In this website you can help yourself creating your character doing quickly searches.
    </>
  )

  return (
    <section className='landingPage'>
        <Sidebar/>
        <ArticleText title={title} text={text}/>
    </section>
  )
}

export default LandingPage