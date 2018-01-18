import React from 'react'
import {Type} from 'styled-curls'
import Highlight from './Highlight'


export default function ({language = 'js', ...props}) {
  return Type({
    nodeType: 'div',
    face: 'mono',
    bw: 1,
    bc: 'darkGrey',
    bg: 'darkestGrey',
    ...props,
    children: (
      <Highlight language={language}>
        {props.children}
      </Highlight>
    )
  })
}
