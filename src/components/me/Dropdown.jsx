import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './dropdown.css'
import { useState } from 'react'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

export const Dropdown = (props) => {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
  };

  const formatDescription = (desc) => {
    const parts = desc.split(/(\*\*.*?\*\*)/); // Split using **bold** markers
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index}>{part.substring(2, part.length - 2)}</strong>;
      } else {
        return part;
      }
    });
  };

  return (
    <div className='d-flex flex-column caixa mt-2'>
      <div className='d-flex flex-row drop'>
        <span>{props.title}</span>
        <div className='right'>
          <span className='me-2 fw-lighter'>{props.date}</span>
          <button onClick={handleClick}>
            <FontAwesomeIcon icon={!isOpen ? faAngleDown : faAngleUp} />
          </button>
        </div>
      </div>
      {isOpen && <div className='bottom mt-3'>{formatDescription(props.desc)}</div>}
    </div>
  );
};