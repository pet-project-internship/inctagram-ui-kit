import { type Meta, type StoryObj } from '@storybook/react'

import { Button } from '../button/button'
import { Cards } from './Cards'

const meta = {
  component: Cards,
  tags: ['autodocs'],
  title: 'Components/Cards',
} satisfies Meta<typeof Cards>

export default meta
type Story = StoryObj<typeof Cards>
export const Default = {
  args: {
    children: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus commodi cum delectus
        dignissimos doloribus facere facilis illo minima molestiae nemo nesciunt nobis quasi,
        quisquam sapiente totam veniam voluptates? Ducimus, perspiciatis.
        <p />
        <Button fullWidth variant={'primary'}>
          Click me
        </Button>
      </>
    ),
  },
} satisfies Story
