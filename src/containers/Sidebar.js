import React from 'react'
import { graphql } from 'react-apollo'
import findIndex from 'lodash/findIndex'
import decode from 'jwt-decode'

import Channels from '../components/Channels'
import Teams from '../components/Teams'
import AddChannelModal from '../components/AddChannelModal'
import { allTeamsQuery } from '../graphql/team'
import '../assets/modal.scss'

export default class Sidebar extends React.Component {
  state = {
    openAddChannelModal: false,
  }

  handleCloseAddChannelModal = () => {
    this.setState({ openAddChannelModal: false })
  }

  handleAddChannelClick = () => {
    this.setState({ openAddChannelModal: true })
  }

  render() {
    const { teams, team } = this.props
    let username = ''
    try {
      const token = localStorage.getItem('token')
      const { user } = decode(token)

      username = user.username
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
        onAddChannelClick={this.handleAddChannelClick}
        teamId={team.id}
      />,
      <AddChannelModal
        teamId={team.id}
        onClose={this.handleCloseAddChannelModal}
        open={this.state.openAddChannelModal}
        key="sidebar-add-channel-modal"
      />,
    ]
  }
}
