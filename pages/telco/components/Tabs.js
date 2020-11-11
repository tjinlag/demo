import React, { useState } from 'react'
import { Button, ButtonGroup } from 'reactstrap';

const Tabs = ({ items, onItemClick }) => {
  const [activeIdx, setActiveIdx] = useState(1);
  if (!items || !items.length) return null;

  const handleClick = (idx) => () => {
    setActiveIdx(idx);
    onItemClick(idx);
  }

  return (
    <ButtonGroup color="red">
      { items.map((item, idx) => (
        <Button
          id={idx}
          color='info'
          active={idx === activeIdx}
          outline
          onClick={handleClick(idx)}
        >{item.content}</Button>
      ))}
    </ButtonGroup>
  )
}

Tabs.defaultProps = {
  items: [],
}

export default Tabs
