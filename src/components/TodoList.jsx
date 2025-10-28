import { useState } from 'react' // 内置的hook函数
import TodoForm from './TodoForm'
import Todos from './Todos'
function TodoList() {
    const[hi,setHi] = useState('这是我的第一个vite + react项目');
    const [title,setTitle] = useState('Todo_list项目') 
    const [count,setCount] = useState(0) 
    // 数据 -》 变化 -》 数据状态 -> 自动刷新页面 -》数据驱动（drive）页面
    // 数据 ↓
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: 'todo',
            completed: false,
        },
        {
            id: 2,
            title: 'todo2',
            completed: false,
        }
    ]) 

/**
 * 添加新待办事项的处理函数
 * @param {string} text - 待添加的待办事项内容
 */
const handleAdd = (text) =>{
    // 使用展开运算符创建新的待办事项数组
    // 并在其中添加一个新的待办事项对象
    setTodos([
        ...todos, // 保留原有的所有待办事项
        {
            id:todos.length+1, // 新待办事项的ID为当前数组长度+1
            title:text, // 设置待办事项的标题为传入的文本
            completed:false, // 新添加的待办事项默认为未完成状态
        }

    ]);
    // 更新计数器，使其增加1
    setCount(count + 1);
}

    return (
        <div className="container">
            <h1>{title}</h1>
            <h2>{hi}</h2>
            <TodoForm onAdd={handleAdd}/>
            <Todos todos={todos} count={count}/>
        </div>
    )
}


export default TodoList