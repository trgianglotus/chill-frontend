import React from 'react'
import styled from 'styled-components'
import { Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const ChannelWrapper = styled.div`
  padding-top: 10px;
  grid-column: 2;
  grid-row: 1 / 4;
  background-color: #4e3a4c;
  color: #958993;
`

const TeamNameHeader = styled.h1`
  color: #fff;
  font-size: 20px;
`

const SideBarList = styled.ul`
  width: 100%;
  list-style: none;
  padding-left: 0px;
`

const paddingLeft = 'padding-left: 10px'

const paddingRight = 'padding-right: 10px'

const SideBarListItem = styled.li`
  padding: 2px;
  ${paddingLeft};
  &:hover {
    background: #3e313c;
  }
`

const SideBarListHeader = styled.li`
  ${paddingLeft};
  ${paddingRight};
  display: flex;
  justify-content: space-between;
`

const InviteLink = styled.div`
  ${paddingLeft};
`

const PushLeft = styled.div`
  ${paddingLeft};
`

const Green = styled.span`
  color: #38978d;
`

const Bubble = ({ on = true }) => (on ? <Green>●</Green> : '○')

const channel = ({ id, name }, teamId) => (
  <Link
    to={`/view-team/${teamId}/${id}`}
    key={`channel-${id}`}
    style={{ color: 'inherit' }}
  >
    <SideBarListItem># {name}</SideBarListItem>
  </Link>
)

const user = ({ id, name }) => (
  <SideBarListItem key={`user-${id}`}>
    <Bubble /> {name}
  </SideBarListItem>
)

export default ({
  teamName,
  username,
  channels,
  users,
  isOwner,
  onAddChannelClick,
  teamId,
  onInvitePeopleClick,
  onDirectMessageClick,
}) => (
  <ChannelWrapper>
    <PushLeft>
      <TeamNameHeader>{teamName}</TeamNameHeader>
      {username}
    </PushLeft>
    <div>
      <SideBarList>
        <SideBarListHeader>
          Channels
          {isOwner && <Icon onClick={onAddChannelClick} name="add circle" />}
        </SideBarListHeader>
        {channels.map((c) => channel(c, teamId))}
      </SideBarList>
    </div>
    <div>
      <SideBarList>
        <SideBarListHeader>
          Direct Messages
          <Icon onClick={onDirectMessageClick} name="add circle" />
        </SideBarListHeader>
        {users.map(user)}
      </SideBarList>
    </div>
    {isOwner && (
      <InviteLink>
        <a href="#invite-people" onClick={onInvitePeopleClick}>
          + Invite People
        </a>
      </InviteLink>
    )}
  </ChannelWrapper>
)
