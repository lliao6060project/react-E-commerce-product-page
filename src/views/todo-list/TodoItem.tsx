import React from 'react'
import type { PropsWithChildren } from 'react'
import type { TodoItemType } from '@/common/types'
import Button from '@/components/Button'

interface TodoItemProps {
  todos: TodoItemType,
  editingTodo: TodoItemType
  onDeleteTodo: (id: number) => void
  onEditTodo: (id: number) => void
}

interface ContentProps extends PropsWithChildren {
  id: number
}

const TodoItem = ({todos, editingTodo, onEditTodo, onDeleteTodo }: TodoItemProps) => {
  const Title = ({children}: PropsWithChildren) => {
    return (
      <p className='w-100 text-center text-lg font-bold'>{children}</p>
    )
  }

  const TodoText = ({id, children}: ContentProps) => {
    const isEditingContent = editingTodo.id === id
    const activeClass = isEditingContent ? `underline decoration-sky-500 decoration-2 underline-offset-8` : ''
    return (
      <div className={`flex-center w-100 text-center ${activeClass}`}>{children}</div>
    )
  }
  return (
    <div className='w-3/5 mx-auto mt-5'>
      <ul>
        <li className='px-2 py-2 flex justify-between border-b-2 bg-gray-500 text-white'>
          <Title>CreatAt</Title>
          <Title>Todo</Title>
          <Title>Actions</Title>
        </li>
        <li className={`${!todos.length ? 'relative block min-h-[100px] border-l-2 border-r-2 border-b-2': 'hidden'}`}>
          <p className='h-full align-center flex items-center'>NO TODO</p>
        </li>
        {
          todos.map((todoItem: TodoItemType, idx: number) => (
            <li
              className='relative px-2 py-2 flex justify-between text-center border-l-2 border-r-2 border-b-2'
              key={todoItem.id}
            >
              <div className='w-full flex-center'>
              {(new Date(todoItem.id as number)).toLocaleString()}
              </div>
              <div className='w-full flex-center'>
                <TodoText id={(todoItem.id as number)}>{todoItem.todo}</TodoText>
              </div>
              <div className='w-full flex-center'>
                <div className='w-4/5 flex justify-around'>
                  <Button
                    size='md'
                    type='primary'
                    action={() => onEditTodo(todoItem.id as number)}
                  >Edit</Button>

                  <Button
                    size='md'
                    type='delete'
                    action={() => onDeleteTodo(todoItem.id as number)}
                  >Delete</Button>
                </div>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default TodoItem
