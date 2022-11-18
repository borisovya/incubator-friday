import React from 'react'

import { NavLink } from 'react-router-dom'

import { Button } from '../../../../common/button/Button'
import { PATH } from '../../../../common/pages/Pages'
import { useAppDispatch } from '../../../../utils/hooks'
import { setPasswordResetAC } from '../../auth-reducer'
import s from '../PasswordRecovery.module.css'

type CheckEmailPropsType = {
  email: string
}

export const CheckEmail: React.FC<CheckEmailPropsType> = ({ email }) => {
  const dispatch = useAppDispatch()

  return (
    <>
      <h1>Check Email</h1>
      <p className={s.description}>{`We’ve sent an Email with instructions to ${email}`}</p>
      <NavLink className={s.login_link} to={PATH.LOGIN}>
        <Button
          onClick={() => {
            dispatch(setPasswordResetAC(false))
          }}
          className={s.btn}
        >
          Back to login
        </Button>
      </NavLink>
    </>
  )
}
