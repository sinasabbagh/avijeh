import React from 'react'

const isActive = (state, id) => state.indexOf(id) > -1

const FilterItem = ({ id, content, onClick, active }) => {
  return(
    <div className={`filter-item ${active ? 'clicked' : ''}`}
         id={id}
         onClick={() => onClick(id)}>{content}</div>
  )}

export { FilterItem, isActive }
