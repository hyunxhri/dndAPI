import React from 'react'

const ArticleText = ({ title, text }) => {
  return (
    <article className='w100flexcentered'>
        <div className='information-msg'>
            <h1 className='title-info dragonhunter-f8f8ff'>{title}</h1>
            <hr/>
            <p className='info wonderwold-f8f8ff'>
            {text}
            </p>
        </div>
    </article>
  )
}

export default ArticleText