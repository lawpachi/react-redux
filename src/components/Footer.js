/**
 * Created by shenlu on 17/2/28.
 */
import React from 'react'
import classnames from 'classnames'
export default class Footer extends React.Component {
    constructor(){
        super()
    }
    render(){
        const {onShow, filter, activeLength, onClearCompleted} = this.props
        let leftWord = '';

        return(
            <footer className="footer">
                <span className="todo-count">
                    <strong>{activeLength > 0 ? activeLength : 'No'}</strong> {activeLength > 0 ? 'item' : 'items'} left
                </span>
                <ul className="filters">
                    {
                        ['All', 'Active', 'Completed'].map((value, inx) => {
                            return (
                                <li key={'footer_' + inx}>
                                    <a  style={{ cursor: 'pointer' }}
                                        onClick={()=>{onShow(value)}}
                                        className={classnames({ selected: filter === value })}
                                    >{value}</a>
                                </li>
                            )
                        })
                    }
                </ul>
                <button className="clear-completed"
                        onClick={onClearCompleted} >
                    Clear completed
                </button>
            </footer>
        )
    }
}