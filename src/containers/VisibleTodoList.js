import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'


const mapStateToProps = (state) => ({
  todos: state.todos
})

const VisibleTodoList = connect(
  mapStateToProps
)(TodoList)


export default VisibleTodoList
