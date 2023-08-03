'use client'

import React, { useState, } from 'react'
import ExpandMoreIcon from './icons/ExpandMoreIcon'
import ExpandLessIcon from './icons/ExpandLessIcon'
import SaveRunForm from './SaveRunForm'

const SaveRun = () => {
  const [expanded, setExpanded,] = useState(false)

  return (
    <section className='flex flex-col items-center justify-center mt-5 gap-5'>
      <div onClick={() => setExpanded(!expanded)} className='flex items-center gap-1 cursor-pointer'>
        <h3 className='text-xl font-500 text-center'>
            Save your last run
        </h3>
        {!expanded ? (
          <ExpandMoreIcon />
        ) : (
          <ExpandLessIcon />
        )}
      </div>
      {expanded && (
        <SaveRunForm />
      )}
    </section>
  )
}

export default SaveRun