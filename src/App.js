import React from 'react';
import { StylePlay, StyleSelfCare, StyleSocial, StyleSports, StyleStudy, StyleWork, Container, Row, StyledProfile, } from './styles';
import IconSelfCare, { IconElipse, IconPlay, IconSocial, IconSports, IconStudy, IconWork } from './components/icon';
import ProfileContainer from './components/card/profile';

export default function App() {
  return (
    <Container>
      <ProfileContainer />
      <Row>
        <StyleWork
          icon={<IconWork />}
          title=" Work"
          hours="32hrs"
          subtitle="Last Week - 36hrs"
        />
        <StylePlay
          icon={<IconPlay />}
          title=" Play"
          hours="10hrs"
          subtitle="Last Week - 8hrs"
        />
        <StyleStudy
          icon={<IconStudy />}
          title="Study"
          hours="4hrs"
          subtitle="Last Week - 7hrs"
        />
        <StyleSports
          icon={<IconSports />}
          title=" Sports"
          hours="20hrs"
          subtitle="Last Week - 35hrs"
        />
        <StyleSocial
          icon={<IconSocial />}
          title=" Social"
          hours="5hrs"
          subtitle="Last Week - 10hrs"
        />
        <StyleSelfCare
          icon={<IconSelfCare />}
          title=" SelfCare"
          hours="2hrs"
          subtitle="Last Week - 2hrs"
        />
      </Row>
    </Container>
  );
}