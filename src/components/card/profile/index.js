import React from 'react';
import { useState } from 'react/cjs/react.development';
import { StyledFooter, StyledProfile, StyledProfileEnd, StyledAvatarName, StyleReport, Avatar, StyledProfileButton } from './style';

export default function ProfileContainer({
  name,
  avatar,
  onClick,
  ...props
}) {
  const [isActive, setisActive] = useState('daily');

  function handleButton(label) {
    setisActive(label)
    if (onClick) onClick(label);
  }

  return (
    <StyledProfile>
      <StyledFooter>
        <Avatar src={avatar} alt="avatar" />
        <StyledAvatarName>
          <StyleReport>Report For</StyleReport>
          {name}
        </StyledAvatarName>
      </StyledFooter>
      <StyledProfileEnd>
        <StyledProfileButton active={isActive === 'daily' ? true : false} onClick={() => { handleButton("daily") }}>Daily</StyledProfileButton>
        <StyledProfileButton active={isActive === 'weekly' ? true : false} onClick={() => { handleButton("weekly") }}>Weekly</StyledProfileButton>
        <StyledProfileButton active={isActive === 'monthly' ? true : false} onClick={() => { handleButton("monthly") }}>Monthly</StyledProfileButton>
      </StyledProfileEnd>
    </StyledProfile >

  );
}