import { PropsWithChildren } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface CounterProps extends PropsWithChildren {
  min: number
  max: number
}

const Counter = ({...props}: CounterProps) => {
  const { min, max } = props;

  const count = useSelector((state: Record<string, number>) => state.value)
  const dispatch = useDispatch()

  const handleAdd = () => {
    count >= max ? '' : dispatch({type: 'INCREMENT'})
  }

  const handleMiuns = () => {
    count <= min ? '' : dispatch({type: 'DECREASE'})
  }

  return (
    <>
      <div
        className='h-full flex-center text-center bg-gray-200 / 50 rounded-xl text-lg'
      >
        <div
          className={`plus basis-1/3 h-full flex-center ${count > min ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'}`}
          onClick={handleMiuns}
        >
          <svg width="12" height="4" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><path d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z" id="a"/></defs><use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#a"/></svg>
        </div>
        <div className='basis-1/3 h-full flex-center'>{count}</div>
        <div
          className={`minus basis-1/3 h-full flex-center ${count >= max ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
          onClick={handleAdd}
        >
          <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><path d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z" id="b"/></defs><use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#b"/></svg>
        </div>
      </div>
      <ToastContainer autoClose={2000} />
    </>
  )
}

export default Counter;