import React, { Component } from 'react'
import { connect, Provider } from 'react-redux'
import * as EntryAction from '../actions/entry'
import Entry from '../components/Entry'

class EntryList extends Component {
  componentDidMount () {
    const { dispatch } = this.props
    dispatch(EntryAction.fetchAllEntries())
  }

  render () {
    const { entry } = this.props

    return (
      <div>
        {(() => {
          if (entry.isFetching) {
            return (
              <div>
                loading:
                <i class="fa fa-5x fa-spinner fa-spin"></i>
              </div>
            )
          } else {
            return (
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
                    />
                  )
                })}
              </ul>
            )
          }
        })()}
      </div>
    )
  }
}

function mapStateToProps (state) {
  const { entry } = state
  return {
    entry
  }
}

export default connect(mapStateToProps)(EntryList)
