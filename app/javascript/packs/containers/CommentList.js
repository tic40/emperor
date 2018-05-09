import React, { Component } from 'react'
import { connect, Provider } from 'react-redux'
import * as EntryAction from '../actions/entry'
import moment from 'moment'

class CommentList extends Component {
  render () {
    const { entry } = this.props
    const styleTitle = {
      flexShrink: 1
    }

    return (
      <div>
        {(() => {
          if (entry.isCommentOpen) {
            return (
              <div>
                <div className="modal is-active">
                  <div className="modal-background" />
                  <div className="modal-card">
                    <header className="modal-card-head">
                      <p className="modal-card-title" style={styleTitle}>
                        Comments for [{entry.commentTitle}]
                      </p>
                    </header>
                    <section className="modal-card-body">
                      <ul>
                        {entry.commentList.map((v, i) => {
                          var userLink = 'http://b.hatena.ne.jp/' + v.user
                          return (
                            <li key={i}>
                              <p>
                                {i + 1}: {v.body}
                              </p>
                              <p className="has-text-right">
                                <small>by <a href={userLink} target="_blank" rel="noopener">{v.user}</a> | {moment(v.timestamp).fromNow()}</small>
                              </p>
                            </li>
                          )
                        })}
                      </ul>
                    </section>
                    <footer className="modal-card-foot">
                      <button
                        className="button"
                        aria-label="Close"
                        onClick={() => this.commentToggle()}
                      >
                        Close
                      </button>
                    </footer>
                  </div>
                </div>
              </div>
            )
          }
        })()}
      </div>
    )
  }

  commentToggle () {
    const { dispatch } = this.props
    dispatch(EntryAction.commentToggle())
  }
}

function mapStateToProps (state) {
  const { entry } = state
  return {
    entry
  }
}

export default connect(mapStateToProps)(CommentList)
