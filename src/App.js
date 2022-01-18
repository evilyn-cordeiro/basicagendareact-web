import React, { useState } from 'react';
import { StylePlay, StyleSelfCare, StyleSocial, StyleSports, StyleStudy, StyleWork, Container, Row, StyledProfile, } from './styles';
import IconSelfCare, { IconElipse, IconPlay, IconSocial, IconSports, IconStudy, IconWork } from './components/icon';
import ProfileContainer from './components/card/profile';
import { data } from './constants';


export default function App() {
  const [selected, setSelected] = useState("daily")
  function handleClick(label) {
    setSelected(label)
  }

  function getname(key) {
    switch (key) {
      case 'daily':
        return "Last Day - "
      case 'weekly':
        return "Last Week - "
      default:
        return "Last Month - "
    }
  }

  return (
    <Container>
      <ProfileContainer
        avatar={require('./others/img/image-jeremy.png')}
        name="Jeremy Robson"
        /**
         *propagação da função 
         *  */
        onClick={(value) => { handleClick(value) }}
      />
      <Row>
        <StyleWork
          icon={<IconWork />}
          title={data[0].title}
          hours={`${data[0].timeframes[selected].current}hrs`}
          subtitle={`${data[0].timeframes[selected].previous}hrs`}
          status={getname(selected)}
        />
        <StylePlay
          icon={<IconPlay />}
          title={data[1].title}
          hours={`${data[1].timeframes[selected].current}hrs`}
          subtitle={`${data[1].timeframes[selected].previous}hrs`}
          status={getname(selected)}
        />
        <StyleStudy
          icon={<IconStudy />}
          title={data[2].title}
          hours={`${data[2].timeframes[selected].current}hrs`}
          subtitle={`${data[2].timeframes[selected].previous}hrs`}
          status={getname(selected)}
        />
        <StyleSports
          icon={<IconSports />}
          title={data[3].title}
          hours={`${data[3].timeframes[selected].current}hrs`}
          subtitle={`${data[3].timeframes[selected].previous}hrs`}
          status={getname(selected)}
        />
        <StyleSocial
          icon={<IconSocial />}
          title={data[4].title}
          hours={`${data[4].timeframes[selected].current}hrs`}
          subtitle={`${data[4].timeframes[selected].previous}hrs`}
          status={getname(selected)}
        />
        <StyleSelfCare
          icon={<IconSelfCare />}
          title={data[5].title}
          hours={`${data[5].timeframes[selected].current}hrs`}
          subtitle={`${data[5].timeframes[selected].previous}hrs`}
          status={getname(selected)}
        />
      </Row>
    </Container>
  );
}

