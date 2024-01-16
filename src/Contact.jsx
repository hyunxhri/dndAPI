import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import { Link } from 'react-router-dom'

const Contact = () => {

  return (
      <section className='landingPage'>
          <Sidebar/>
          <article className='w100flexcentered'>
          <div className='information-msg'>
              <h1 className='title-info dragonhunter-f8f8ff'>Contact us</h1>
              <hr/>
              <p className='info wonderwold-f8f8ff'>
              If you want to contact the developers you can send an email to <Link to="mailto:sbulmar842@g.educaand.es">sbulmar842@g.educaand.es</Link>. You will receive a response as quickly as possible.
              <br/><br/>
              If you prefer another way, you can find it on discord or telegram with the nickname: <b>sbulmar842</b>.
              <br/><br/>
              Thank you for being part of this project!
              </p>
          </div>
        </article>
      </section>
    )
  }

export default Contact