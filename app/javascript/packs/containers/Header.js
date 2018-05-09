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
            this.handleUpdateCurrentFeed(constants.FEED_LIST.ALL)
          }
        >
          {constants.FEED_LIST.ALL.name}
        </button>

        <button
          onClick={() =>
            this.handleUpdateCurrentFeed(constants.FEED_LIST.GENERAL)
          }
        >
          {constants.FEED_LIST.GENERAL.name}
        </button>
      </div>
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

export default connect(mapStateToProps)(Header)
