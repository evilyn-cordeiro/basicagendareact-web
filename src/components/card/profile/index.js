import React from 'react';
import { StyledFooter, StyledProfile, StyledProfileEnd, StyledAvatarName, StyleReport, Avatar, StyledProfileButton } from './style';

export default function ProfileContainer({
  name,
  avatar,
  onClick,
  ...props
}) {
  console.log(avatar);

  function handleButton(label) {
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
        <StyledProfileButton onClick={() => { handleButton("daily") }}>Daily</StyledProfileButton>
        <StyledProfileButton onClick={() => { handleButton("weekly") }}>Weekly</StyledProfileButton>
        <StyledProfileButton onClick={() => { handleButton("monthly") }}>Monthly</StyledProfileButton>
      </StyledProfileEnd>
    </StyledProfile>

  );
}