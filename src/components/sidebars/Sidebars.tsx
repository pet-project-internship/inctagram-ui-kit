import s from './sidebars.module.scss'

import { Typography } from '../'
import {
  BookmarkOutline,
  HomeOutline,
  LogOut,
  MessageCircleOutline,
  PersonOutline,
  PlusSquareOutline,
  Search,
  TrendingUp,
} from '../../assets/icons'

export const Sidebars = () => {
  return (
    <div className={s.box}>
      <div className={s.content}>
        <ul>
          <Typography as={'li'} variant={'medium_text14'}>
            <HomeOutline /> Home
          </Typography>
          <Typography as={'li'} variant={'medium_text14'}>
            <PlusSquareOutline /> Create
          </Typography>
          <Typography as={'li'} variant={'medium_text14'}>
            <PersonOutline /> My Profile
          </Typography>
          <Typography as={'li'} variant={'medium_text14'}>
            <MessageCircleOutline /> Messenger
          </Typography>
          <Typography as={'li'} variant={'medium_text14'}>
            <Search /> Search
          </Typography>
          <ul></ul>
          <Typography as={'li'} variant={'medium_text14'}>
            <TrendingUp /> Statistics
          </Typography>
          <Typography as={'li'} variant={'medium_text14'}>
            <BookmarkOutline /> Favorites
          </Typography>
          <ul></ul>
          <ul></ul>
          <Typography as={'li'} variant={'medium_text14'}>
            <LogOut /> Log Out
          </Typography>
        </ul>
      </div>
    </div>
  )
}
