import React, { Component } from 'react'
import { connect, Provider } from 'react-redux'
import * as EntryAction from '../actions/entry'
import Entry from '../components/Entry'

class EntryList extends Component {
  componentDidMount () {
    const { dispatch } = this.props
    dispatch(EntryAction.fetchEntries())
  }

  render () {
    const { entry } = this.props

    return (
      <div>
        <ul>
          {entry.items.map((v, i) => {
            return (
              <Entry
                key={i + 1}
                id={i + 1}
                title={v.title}
                url={v.url}
                bookmark_count={v.bookmark_count}
                published={v.published}
                comments={v.comments}
              />
            )
          })}
        </ul>
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
