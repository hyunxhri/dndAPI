import React from 'react'
import "./WelcomeMsg.css"

const WelcomeMsg = () => {
  return (
    <article className='w100flexcentered'>
        <div className='information-msg'>
            <h1 className='title-info dragonhunter-f8f8ff'>Welcome to Dungeons & Dragons</h1>
            <hr/>
            <p className='info wonderwold-f8f8ff'>
            In Dungeons & Dragons, the players form an adventuring party who explore fantasy worlds together as they embark on epic quests and level up in experience.  The Dungeon Master (also known as the DM) is the game's referee and storyteller. There's no winning or losing in D&D—at least, not in the conventional way.<br/><br/>
            In this website you can help yourself creating your character doing quickly searches.
            </p>
        </div>
    </article>
  )
}

export default WelcomeMsg