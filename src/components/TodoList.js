/**
 * Created by shenlu on 17/2/28.
 */
import React from 'react'

const TODO_FILTERS = {
    'All': () => true,
    'Completed': todo => !todo.completed,
    'Active': todo => todo.completed
}
export default class TodoList extends React.Component{
    constructor(){
        super()
    }
    render(){
        const {listitem, deleteTodo, filter, completeTodo, completedCount, completeAll } = this.props
        let filetrtodo = listitem.filter(TODO_FILTERS[filter])
        let litm = filetrtodo.map((itemObj, inx)=>{
            return(
                <li key={'item_' + inx}>
                    <div className="view">
                        <input className="toggle"
                               type="checkbox"
                               checked={itemObj.completed}
                               onChange={ () => completeTodo(itemObj.id)}
                        />
                        <label onDoubleClick={()=>{}}>
                            {itemObj.text}
                        </label>
                        <button className="destroy"
                                onClick={() => deleteTodo(itemObj.id)}
                        />
                    </div>
                </li>
            )
        })
        return(
            <section className="main">
                <input className="toggle-all"
                       type="checkbox"
                       checked={completedCount === listitem.length}
                       onChange={completeAll} />
                <ul className="todo-list">
                    {litm}
                </ul>
            </section>
        )
    }
}