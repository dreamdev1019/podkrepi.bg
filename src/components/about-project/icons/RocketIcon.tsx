import React from 'react'
import { SvgIcon, SvgIconProps } from '@mui/material'

import theme from 'common/theme'

export default function RocketIcon({ ...props }: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 60 60">
      <path d="M30,30c3.1,0,5.6-3.4,5.6-7.5S33.1,15,30,15s-5.6,3.4-5.6,7.5S26.9,30,30,30z" />
      <path
        d="M50.5,39.9L44.8,33c-0.7-12.7-3.6-20.6-6.6-25.5c-1.8-2.8-3.6-4.7-5-5.8c-0.5-0.4-1.1-0.8-1.7-1.2
          c-0.2-0.1-0.3-0.2-0.5-0.3C30.7,0.1,30.4,0,30.1,0c-0.3,0-0.7,0.1-1,0.3c-0.2,0.1-0.3,0.2-0.5,0.3c-0.6,0.4-1.2,0.8-1.7,1.3
          c-1.4,1.2-3.2,3-4.9,5.9c-3,5-6,12.9-6.7,25.3l-5.6,6.8l0,0c-1.3,1.7-2.1,3.7-2.1,5.9v12.4c0,1.1,0.8,1.9,1.9,1.9
          c0.6,0,1.2-0.3,1.5-0.8l4.2-5.6c0.6-0.8,1.6-1.5,2.8-2.1c0.8-0.4,1.5-0.7,2.4-1.1l0.7-0.3c2.6,1.6,5.8,2.4,9,2.4s6.3-0.8,9-2.4
          c0.2,0.1,0.5,0.2,0.7,0.3c0.8,0.3,1.5,0.7,2.4,1.1c1.3,0.6,2.2,1.3,2.8,2.1l4.2,5.6c0.6,0.8,1.8,1,2.6,0.4c0.5-0.3,0.8-0.9,0.8-1.5
          V45.7C52.5,43.6,51.8,41.5,50.5,39.9z M16.3,48.1c-1.4,0.7-3,1.7-4.1,3.2l-0.9,1.1v-6.7c0-1.3,0.4-2.5,1.2-3.5l2.5-3.1v0.2
          c0,3.2,1.1,5.9,2.8,8C17.3,47.6,16.8,47.9,16.3,48.1z M37.7,46.5c-2,1.5-4.8,2.3-7.7,2.3s-5.7-0.8-7.7-2.3
          c-2.1-1.5-3.5-3.9-3.5-7.1c0-15.7,3.2-24.7,6.3-29.7c1.5-2.5,3-4,4.1-5c0.3-0.3,0.6-0.5,0.9-0.7l0,0c0.2,0.1,0.5,0.3,0.9,0.6
          C32,5.5,33.5,7,35,9.5c3,5,6.3,13.9,6.3,29.9C41.3,42.6,39.9,44.9,37.7,46.5z M48.7,52.5l-0.9-1.1c-1.1-1.5-2.6-2.5-4.1-3.2
          c-0.5-0.2-1.1-0.5-1.6-0.8c1.7-2.1,2.8-4.8,2.8-8v-0.2l2.5,3.1c0.8,1,1.2,2.2,1.2,3.5L48.7,52.5L48.7,52.5z"
      />
      <path
        d="M35.6,53.9c-1.8,0.3-3.7,0.5-5.5,0.5c-1.9,0-3.8-0.2-5.5-0.5l4,5.4c0.6,0.8,1.8,1,2.6,0.4c0.1-0.1,0.3-0.2,0.4-0.4
          L35.6,53.9z"
      />
    </SvgIcon>
  )
}
