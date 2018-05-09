import React, { Component } from 'react'
import { connect, Provider } from 'react-redux'
import * as EntryAction from '../actions/entry'
import Entry from '../components/Entry'

class EntryList extends Component {
  componentDidMount () {
    const { dispatch, entry } = this.props
    dispatch(EntryAction.fetchAllEntries())
  }

  render () {
    const { entry } = this.props

    const styleReloadButton = {
      margin: '1rem'
    }
    return (
      <div>
        {(() => {
          if (entry.isFetching) {
            return (
              <div style={styleReloadButton}>
                <i className="fa fa-spinner fa-pulse fa-2x" />
              </div>
            )
          } else {
            return (
              <div>
                <div style={styleReloadButton}>
                  FEED: {entry.currentFeed.name}{' '}
                  <button
                    className="button is-small"
                    aria-label="reload"
                    onClick={() =>
                      this.handleFetchCurrentFeed(entry.currentFeed)
                    }
                  >
                    <i className="fa fa-sync-alt" />
                  </button>
                </div>
                <ul>
                  {entry.items[entry.currentFeed.name].map((v, i) => {
                    return (
                      <Entry
                        key={i + 1}
                        id={i + 1}
                        title={v.title}
                        url={v.url}
                        bookmarkCount={v.bookmark_count}
                        published={v.published}
                        comments={v.comments}
                        commentOnClick={() =>
                          this.handleCommentClick(v.comments, v.title)
                        }
                      />
                    )
                  })}
                </ul>
              </div>
            )
          }
        })()}
      </div>
    )
  }

  handleFetchCurrentFeed (feed) {
    const { dispatch } = this.props
    dispatch(EntryAction.sendRequest())
    dispatch(EntryAction.fetchEntries(feed))
  }

  handleCommentClick (comments, title) {
    const { dispatch } = this.props
    dispatch(EntryAction.commentToggle(comments, title))
  }
}

function mapStateToProps (state) {
  const { entry } = state
  return {
    entry
  }
}

export default connect(mapStateToProps)(EntryList)
