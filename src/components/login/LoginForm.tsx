import React, { FC, useReducer } from 'react'
import useLogin from '../../hooks/useLogin'
import Button from '@components/button/Button'
import profileStore from '../../store/profileStore'

type State = {
  username: string
  password: string
  usernameTouched: boolean
  passwordTouched: boolean
}

type Action =
  | { type: 'setUsername'; payload: string }
  | { type: 'setPassword'; payload: string }
  | { type: 'setUsernameTouched' }
  | { type: 'setPasswordTouched' }

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'setUsername':
      return { ...state, username: action.payload }
    case 'setPassword':
      return { ...state, password: action.payload }
    case 'setUsernameTouched':
      return { ...state, usernameTouched: true }
    case 'setPasswordTouched':
      return { ...state, passwordTouched: true }
    default:
      return state
  }
}

const LoginForm: FC<{ onClose: () => void }> = ({ onClose }) => {
  const { setUser } = profileStore()
  const initialState: State = {
    username: '',
    password: '',
    usernameTouched: false,
    passwordTouched: false,
  }

  const [state, dispatch] = useReducer(reducer, initialState)
  const { mutate, isLoading, isError, data } = useLogin()

  const handleSubmit = (e: React.FormEvent) => {
    e?.preventDefault()
    if (!(state.username.trim() === '' || state.password.trim() === '')) {
      mutate(
        { username: state.username, password: state.password },
        {
          onSuccess: data => {
            setUser(data)
            onClose()
          },
        },
      )
    }
  }

  return (
    <form
      className="min-h-[400px] bg-white max-w-[400px] flex flex-col justify-center gap-6 rounded-lg p-10"
      onSubmit={handleSubmit}
    >
      <div>
        <input
          type="text"
          value={state.username}
          placeholder="username is admin"
          onChange={e =>
            dispatch({ type: 'setUsername', payload: e.target.value })
          }
          onBlur={() => dispatch({ type: 'setUsernameTouched' })}
          className={`border p-2 rounded-md focus:outline-none${
            state.usernameTouched && state.username.trim() === ''
              ? ' border-red-500'
              : ''
          }`}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="password is admin"
          value={state.password}
          onChange={e =>
            dispatch({ type: 'setPassword', payload: e.target.value })
          }
          onBlur={() => dispatch({ type: 'setPasswordTouched' })}
          className={`border p-2 rounded-md focus:outline-none${
            state.usernameTouched && state.username.trim() === ''
              ? ' border-red-500'
              : ''
          }`}
        />
      </div>
      <Button
        title={'login'}
        className="flex justify-center "
        onClickAction={handleSubmit}
        disabled={state.username.trim() === '' || state.password.trim() === ''}
      />
      <div className="text-center">
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error logging in</p>}
        {data?.authenticated && <p>{data.message}</p>}
      </div>
    </form>
  )
}

export default LoginForm
