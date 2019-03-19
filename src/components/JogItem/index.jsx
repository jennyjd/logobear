import React from 'react';

const JogItem = ({jog}) => {
  return (
    <div key={jog.id}>{jog.id}</div>
  );
}

export default JogItem;