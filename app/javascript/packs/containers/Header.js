import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as EntryAction from '../actions/entry'
import * as constants from '../constants/index'

class Header extends Component {
  render () {
    return (
      <div>
        <button
          onClick={() =>
            this.handleUpdateCurrentFeed(constants.FEED_LIST.ALL.id)
          }
        >
          {constants.FEED_LIST.ALL.name}
        </button>

        <button
          onClick={() =>
            this.handleUpdateCurrentFeed(constants.FEED_LIST.GENERAL.id)
          }
        >
          {constants.FEED_LIST.GENERAL.name}
        </button>
      </div>
    )
  }

  handleUpdateCurrentFeed (feedId) {
    const { dispatch } = this.props
    dispatch(EntryAction.fetchEntries(feedId))
    dispatch(EntryAction.updateCurrentFeed(feedId))
  }
}

function mapStateToProps (state) {
  const { entry } = state
  return {
    entry
  }
}

export default connect(mapStateToProps)(Header)
