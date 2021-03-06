import React from 'react'

import Channels from '../components/Channels'
import Teams from '../components/Teams'
import AddChannelModal from '../components/AddChannelModal'
import InvitePeopleModal from '../components/InvitePeopleModal'
import DirectMessageModal from '../components/DirectMessageModal'

import '../assets/modal.scss'

export default class Sidebar extends React.Component {
  state = {
    openAddChannelModal: false,
    openInvitePeopleModal: false,
    openDirectMessageModel: false,
  }

  toggleAddChannelModal = (e) => {
    if (e) {
      e.preventDefault()
    }
    this.setState((state) => ({
      openAddChannelModal: !state.openAddChannelModal,
    }))
  }

  toggleDirectMessageModal = (e) => {
    if (e) {
      e.preventDefault()
    }
    this.setState((state) => ({
      openDirectMessageModel: !state.openDirectMessageModel,
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
    const { teams, team, username } = this.props
    const {
      openInvitePeopleModal,
      openAddChannelModal,
      openDirectMessageModel,
    } = this.state
    return [
      <Teams key="team-sidebar" teams={teams} />,
      <Channels
        key="channels-sidebar"
        teamName={team.name}
        username={username}
        channels={team.channels}
        users={team.directMessageMembers}
        isOwner={team.admin}
        onAddChannelClick={this.toggleAddChannelModal}
        onInvitePeopleClick={this.toggleInvitePeopleModal}
        onDirectMessageClick={this.toggleDirectMessageModal}
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
      <DirectMessageModal
        teamId={team.id}
        onClose={this.toggleDirectMessageModal}
        open={openDirectMessageModel}
        key="sidebar-direct-message-modal"
      />,
    ]
  }
}
