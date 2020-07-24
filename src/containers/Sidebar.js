import React from 'react'
import decode from 'jwt-decode'

import Channels from '../components/Channels'
import Teams from '../components/Teams'
import AddChannelModal from '../components/AddChannelModal'
import InvitePeopleModal from '../components/InvitePeopleModal'

import '../assets/modal.scss'

export default class Sidebar extends React.Component {
  state = {
    openAddChannelModal: false,
    openInvitePeopleModal: false,
  }

  toggleAddChannelModal = (e) => {
    if (e) {
      e.preventDefault()
    }
    this.setState((state) => ({
      openAddChannelModal: !state.openAddChannelModal,
    }))
  }

  toggleInvitePeopleModal = (e) => {
    if (e) {
      e.preventDefault()
    }
    this.setState((state) => ({
      openInvitePeopleModal: !state.openInvitePeopleModal,
    }))
  }

  render() {
    const { teams, team } = this.props
    const { openInvitePeopleModal, openAddChannelModal } = this.state

    let username = ''
    let isOwner = false
    try {
      const token = localStorage.getItem('token')
      const { user } = decode(token)

      username = user.username
      isOwner = user.id === team.owner
    } catch (err) {}

    return [
      <Teams key="team-sidebar" teams={teams} />,
      <Channels
        key="channels-sidebar"
        teamName={team.name}
        username={username}
        channels={team.channels}
        users={[
          { id: 1, name: 'slackbot' },
          { id: 2, name: 'user1' },
        ]}
        isOwner={isOwner}
        onAddChannelClick={this.toggleAddChannelModal}
        onInvitePeopleClick={this.toggleInvitePeopleModal}
        teamId={team.id}
      />,
      <AddChannelModal
        teamId={team.id}
        onClose={this.toggleAddChannelModal}
        open={openAddChannelModal}
        key="sidebar-add-channel-modal"
      />,
      <InvitePeopleModal
        teamId={team.id}
        onClose={this.toggleInvitePeopleModal}
        open={openInvitePeopleModal}
        key="invite-people-modal"
      />,
    ]
  }
}
