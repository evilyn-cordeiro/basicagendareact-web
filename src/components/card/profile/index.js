import React from 'react';
import { StyledFooter, StyledProfile, StyledProfileEnd, StyledAvatarName, StyleReport, Avatar } from './style';

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
        <button onClick={() => { handleButton("daily") }}>Daily</button>
        <button onClick={() => { handleButton("weekly") }}>Weekly</button>
        <button onClick={() => { handleButton("monthly") }}>Monthly</button>
      </StyledProfileEnd>
    </StyledProfile>

  );
}