import s from './header.module.scss'

import { Button, Select } from '../'
import { FlagRussia, FlagUnitedKingdom, OutlineBell } from '../../assets/icons'

type HeaderProps = {
  isAuth: boolean
}
export const Header = ({ isAuth }: HeaderProps) => {
  const options = [
    {
      label: (
        <div className={s.flagContainer}>
          <FlagUnitedKingdom /> &nbsp; <span> English</span>
        </div>
      ),
      value: 'value1',
    },
    {
      label: (
        <div className={s.flagContainer}>
          <FlagRussia />
          &nbsp;
          <span>Russian</span>
        </div>
      ),
      value: 'value2',
    },
  ]

  return isAuth ? (
    <header className={s.header}>
      <div className={s.logo}>Somegram</div>
      <div className={s.register}>
        <div className={s.bell}>
          <OutlineBell />
        </div>

        <Select
          className={s.select}
          options={options}
          placeholder={
            <div className={s.flagContainer}>
              <FlagUnitedKingdom /> &nbsp; <span> English</span>
            </div>
          }
        />
      </div>
    </header>
  ) : (
    <header className={s.header}>
      <div className={s.logo}>Somegram</div>
      <div className={s.register}>
        <Select
          className={s.select}
          options={options}
          placeholder={
            <div className={s.flagContainer}>
              <FlagUnitedKingdom /> &nbsp; <span> English</span>
            </div>
          }
        />
        <div className={s.buttons}>
          <Button variant={'primary'}>Sign up</Button> <Button variant={'primary'}>Sign up</Button>
        </div>
      </div>
    </header>
  )
}
