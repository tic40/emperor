import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as EntryAction from '../actions/entry'
import * as constants from '../constants/index'

class Nav extends Component {
  render () {
    const navTitle = {
      border: '1px solid #3273dc'
    }
    return (
      <nav
        className="navbar is-light"
        role="navigation"
        aria-label="main navigation"
      >
        <small className="navbar-item" style={navTitle}>
          Hatebu Client
        </small>

        <a
          className="navbar-item"
          onClick={() =>
            this.handleUpdateCurrentFeed(constants.FEED_LIST.ALL)
          }
        >
          {constants.FEED_LIST.ALL.name}
        </a>

        <a
          className="navbar-item"
          onClick={() =>
            this.handleUpdateCurrentFeed(constants.FEED_LIST.GENERAL)
          }
        >
          {constants.FEED_LIST.GENERAL.name}
        </a>

        <a
          className="navbar-item"
          onClick={() =>
            this.handleUpdateCurrentFeed(constants.FEED_LIST.SOCIAL)
          }
        >
          {constants.FEED_LIST.SOCIAL.name}
        </a>

        <a
          className="navbar-item"
          onClick={() =>
            this.handleUpdateCurrentFeed(constants.FEED_LIST.ECONOMICS)
          }
        >
          {constants.FEED_LIST.ECONOMICS.name}
        </a>

        <a
          className="navbar-item"
          onClick={() =>
            this.handleUpdateCurrentFeed(constants.FEED_LIST.LIFE)
          }
        >
          {constants.FEED_LIST.LIFE.name}
        </a>

        <a
          className="navbar-item"
          onClick={() =>
            this.handleUpdateCurrentFeed(constants.FEED_LIST.KNOWLEDGE)
          }
        >
          {constants.FEED_LIST.KNOWLEDGE.name}
        </a>

        <a
          className="navbar-item"
          onClick={() => this.handleUpdateCurrentFeed(constants.FEED_LIST.IT)}
        >
          {constants.FEED_LIST.IT.name}
        </a>

        <a
          className="navbar-item"
          onClick={() =>
            this.handleUpdateCurrentFeed(constants.FEED_LIST.FUN)
          }
        >
          {constants.FEED_LIST.FUN.name}
        </a>

        <a
          className="navbar-item"
          onClick={() =>
            this.handleUpdateCurrentFeed(constants.FEED_LIST.ENTERTAINMENT)
          }
        >
          {constants.FEED_LIST.ENTERTAINMENT.name}
        </a>

        <a
          className="navbar-item"
          onClick={() =>
            this.handleUpdateCurrentFeed(constants.FEED_LIST.GAME)
          }
        >
          {constants.FEED_LIST.GAME.name}
        </a>
      </nav>
    )
  }

  handleUpdateCurrentFeed (feed) {
    const { dispatch } = this.props
    // dispatch(EntryAction.sendRequest())
    // dispatch(EntryAction.fetchEntries(feed))
    dispatch(EntryAction.updateCurrentFeed(feed))
  }
}

function mapStateToProps (state) {
  const { entry } = state
  return {
    entry
  }
}

export default connect(mapStateToProps)(Nav)
