import React, { ChangeEvent } from 'react';

const onChange = (e: React.ChangeEvent) => {
  console.log(e);
};
const onDragStart = () => {
  console.log('dragging');
};
const EventComponents = () => {
  return (
    <div>
      EventComponents
      <input onChange={onChange} />
      <div draggable onDragStart={onDragStart}>
        Drag
      </div>
    </div>
  );
};

export default EventComponents;
