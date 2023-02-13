import React, { useState, useEffect } from 'react'
import type { TodoItemType } from '@/common/types'
import Input from '@/components/Input'
import Button from '@/components/Button'
import TodoItem from './TodoItem'


const TodoList = () => {
  const [todos, setTodos] = useState<TodoItemType[] | any>([])
  const [inputValue, setInputValue] = useState<string>('')
  const [currentTodo, setCurrentTodo] = useState<TodoItemType | any>({})
  const [errMessage, setErrMessage] = useState<boolean>(false)
  const [editTodo, setEditTodo] = useState<boolean>(false)

	const handleInputValue = (e: { keyCode: number; target: { value: React.SetStateAction<string> } }) => {
		// console.log(e)
		if(e.keyCode === 13) {
			setTodos([...todos, {
				id: new Date().getTime(),
				todo: e?.target.value
			}])
			handleClearCache()
		}
		setInputValue(e?.target.value)
	}

  const handleAddTodo = (): void => {
    if(!inputValue) {
      setErrMessage(true)
      return
    } else {
      setTodos([...todos, {
        id: new Date().getTime(),
        todo: inputValue
      }])
      handleClearCache()
      setErrMessage(false)
    }
  }


  const handleEditTodo = (id: number): void => {
    const editItem = todos.find((todo: { id: number }) => {
      return todo.id === id
    })
    setCurrentTodo(editItem)
    setEditTodo(true)
  }

  const handleUpdateTodo = (): void => {
    const updatedItem = todos.map((todo: TodoItemType) => {
      return {
        ...todo,
        todo: todo.id === currentTodo.id ? inputValue : todo.todo
      }
    });

    setTodos(updatedItem)
		handleClearCache()
    setEditTodo(false)
  }

  const handleDeleteTodo = (id: number): void => {
    const removeItem = todos.filter((todo: { id: number }) => {
      return todo.id !== id
    })
    setTodos(removeItem)
		handleClearCache()
  }

	const handleCancelEditTodo = () => {
		setEditTodo(false)
		handleClearCache()
	}

	const handleClearCache = () => {
		setInputValue('')
    setCurrentTodo('')
	}

  useEffect(() => {
    if(currentTodo.id) {
      setInputValue(`${currentTodo.todo}`)
    }
  }, [currentTodo]);

  return (
    <div className='todo-list mx-auto w-full'>
      <div className={`todo-list__input-panel mx-auto flex justify-around ${editTodo ? 'w-[30%]' : 'w-80'}`}>
        <Input
          value={inputValue}
          placeholder='請輸入代辦事項'
          onChange={(e) => handleInputValue(e)}
          showMessage={errMessage}
        >內容不可為空!</Input>
				<div>
					<Button
						size='md'
						type='basic'
						onClick={() => editTodo ? handleUpdateTodo() : handleAddTodo()}
					>{editTodo ? '確認修改' : '新增'}</Button>
				</div>
				<div className={`${editTodo ? 'block': 'hidden'}`}>
					<Button
						size='md'
						type='secondary'
						onClick={() => handleCancelEditTodo()}
					>取消</Button>
				</div>
      </div>
      <br />
      <TodoItem
        todos={todos}
        editingTodo={currentTodo}
        onEditTodo={handleEditTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </div>
  )
}

export default TodoList
