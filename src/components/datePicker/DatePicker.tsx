import DatePicker, { type ReactDatePickerCustomHeaderProps } from 'react-datepicker'

import { format } from '@storybook/blocks'
import clsx from 'clsx'

import s from './datePicker.module.scss'

import SvgCalendar from '../../assets/icons/Calendar'
import { Typography } from './../typography'

type DatePickerProps = {
  className?: string
  endDate?: Date
  label?: string
  setEndDate?: (date: Date | null) => void
  setStartDate: (date: Date | null) => void
  startDate: Date
}

export const DatePickerComponent = (props: DatePickerProps) => {
  const { className, endDate, label, setEndDate, setStartDate, startDate } = props
  const isRange = endDate !== undefined

  const onChangeHandler = (dates: [Date | null, Date | null] | Date) => {
    if (Array.isArray(dates)) {
      const [start, end] = dates

      setStartDate(start)
      setEndDate?.(end)
    } else {
      setStartDate(dates)
    }
  }

  const classNames = {
    day: () => s.days,
  }

  return (
    <div className={s.box}>
      {label && <Typography variant={'regular_text14'}>label</Typography>}
      <DatePicker
        calendarClassName={s.calendar}
        className={clsx(s.datePicker, className)}
        dateFormat={'dd/MM/yyyy'}
        dayClassName={(date: Date) => s.days}
        endDate={endDate}
        icon={<SvgCalendar className={clsx(s.calendarIcon, className)} />}
        locale={'ru'}
        onChange={onChangeHandler}
        renderCustomHeader={renderCustomHeader}
        selected={startDate}
        selectsRange={isRange}
        showIcon
        startDate={startDate}
      />
    </div>
  )
}

const renderCustomHeader = ({
  changeMonth,
  changeYear,
  date,
  decreaseMonth,
  increaseMonth,
}: ReactDatePickerCustomHeaderProps) => {
  return (
    <div className={s.headerContainer}>
      <div>{format(date.getFullYear())}</div>
      <button onClick={decreaseMonth} type={'button'}>
        {'<'}
      </button>
      <button onClick={increaseMonth} type={'button'}>
        {'>'}
      </button>
    </div>
  )
}