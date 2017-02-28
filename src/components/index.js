/**
 * Created by shenlu on 17/2/28.
 */
import React from 'react'
import Header from './Header'
import TodoList from './TodoList'
import Footer from './Footer'
import { connect } from 'react-redux'


class  TodoComponent extends React.Component {
    constructor(){
        super()
        this.state = {
            filter : 'All'
        }
    }
    render() {
        const { dispatch, todos } = this.props
        const completedCount = todos.reduce((count, todo) =>
                todo.completed ? count + 1 : count,
            0
        )
        return(
            <section>
                <h1>ToDoMvc</h1>
                <Header
                    onSave = {(text) => {
                        dispatch({type:'save todo list',payload:text})
                    }}
                />
                <TodoList
                    listitem = {todos}
                    filter = {this.state.filter}
                    deleteTodo = {(id) => {
                        dispatch({type:'delect todo list',payload:id})
                    }}
                    completeTodo = {(id) => {
                        dispatch({type:'complete todo list',payload:id})
                    }}
                    completedCount = {completedCount}
                    completeAll = {() => {
                        dispatch({type:'complete all list'})
                    }}
                />
                <Footer
                    filter = {this.state.filter}
                    onShow = {(value) => {
                        this.state.filter = value;
                        this.setState(this.state)
                    }}
                    activeLength = {todos.length - completedCount}
                    onClearCompleted = {() =>{
                        dispatch({type:'clear completed list'})
                    }}

                />
            </section>
        )
    }
}
function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}
function mapDispatchToProps(dispatch) {
    return {
        dispatch: dispatch
}

}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoComponent)