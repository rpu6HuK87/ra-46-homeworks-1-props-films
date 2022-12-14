import React from 'react'
import {Star} from './Star'

export const Stars = ({count}) => {
  return (
    <ul class="card-body-stars u-clearfix">
      {count && Number.isInteger(count) && count > 0 && count < 6
        ? Array.from({length: count}).map((star) => <Star />)
        : null}
    </ul>
  )
}
