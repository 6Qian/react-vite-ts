// 列表的渲染
import TodoForm from "./TodoForm";
function Todos(props) {
  // 利用参数拿到父组件传来的数据状态
  const todos = props.todos;
  const count = props.count;
  console.log(props + '/////');
  
  return( 
    <ul>
    {   //数据绑定 data binding
      // 数据驱动
      // 发生改变后 自动地改变界面
      todos.map((todo,index)=>(
          <li key={todo.id}>{todo.title + '-' + count} {index+1}</li>
      ))   // 利用map循环更新
  }

  </ul>
  
  )
}

export default Todos;