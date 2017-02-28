/**
 * Created by shenlu on 17/2/28.
 */
import React from 'react'
import classnames from 'classnames'
export default class Header extends React.Component {
    constructor(){
        super()
        this.state = {
            text:''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleSubmit(e){
        const {onSave} = this.props
        if(e.which === 13){
            onSave(this.state.text)
            this.state.text = ''
            this.setState(this.state)
        }
    }
    handleChange(e){
        this.state.text = e.currentTarget.value
        this.setState(this.state)
    }
    render(){
        return(
           <input  className = {classnames({'new-todo': 'newTodo'})}
                   placeholder="What needs to be done?"
                   autoFocus="true"
                   onChange={this.handleChange}
                   onKeyDown={this.handleSubmit}
                   value={this.state.text}
           />
        )
    }
}