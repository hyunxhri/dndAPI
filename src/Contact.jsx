import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import { Link } from 'react-router-dom'
import ArticleText from './components/ArticleText'

const Contact = () => {
  const title = (
    <>Contact us!</>
  )
  const text = (
    <>
      If you want to contact the developers you can send an email to <Link to="mailto:sbulmar842@g.educaand.es">sbulmar842@g.educaand.es</Link>. You will receive a response as quickly as possible.
      <br/><br/>
      If you prefer another way, you can find it on discord or telegram with the nickname: <b>sbulmar842</b>.
      <br/><br/>
      Thank you for being part of this project!
    </>
  )

  return (
      <section className='landingPage'>
          <Sidebar/>
          <ArticleText title={title} text={text}/>
      </section>
    )
  }

export default Contact