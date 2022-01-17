import React from 'react';
import { StyleCardApp } from './styles';
import IconSelfCare, { IconElipse, IconPlay } from './components/icon';


export default function App() {
  return (
    <div>
      <StyleCardApp
        icon={<IconPlay />}
        title="Play"
        hours="10hrs"
        subtitle="lest week - 8hrs"
      />
    </div>

  );
}