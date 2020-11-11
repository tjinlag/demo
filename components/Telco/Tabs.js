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
    <div className="text-center">
      <ButtonGroup color="red">
        { items.map((item, idx) => (
          <Button
            key={idx}
            color='info'
            active={idx === activeIdx}
            outline
            onClick={handleClick(idx)}
            style={{ width: 200 }}
          >{item.content}</Button>
        ))}
      </ButtonGroup>
    </div>
  )
}

Tabs.defaultProps = {
  items: [],
}

export default Tabs
