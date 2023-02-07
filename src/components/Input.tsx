import type { PropsWithChildren } from 'react'

interface BaseInput extends PropsWithChildren {
  value: string,
  name?: string,
  placeholder?: string
  type?: string
  showMessage?: boolean
  onChange: (e: any) => any
}

const Input = (
  {
    value,
    name = 'Input',
    placeholder = '輸入點什麼吧',
    type = 'text',
    children = 'error',
    onChange,
    showMessage
  }: BaseInput) => {
  const messageStyle = showMessage
    ? 'block text-red-500 font-bold'
    : 'hidden'

  return (
    <div>
      <input
        type={type}
        value={value}
        name={name}
        className="border py-2 px-3 rounded-lg outline-none shadow-md"
        placeholder={placeholder}
        onChange={onChange}
      />
      <p className={`absolute text-left mt-2 ml-2 ${messageStyle}`}>{children}</p>
    </div>
  )
}


export default Input
