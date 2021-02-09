import React from 'react'
import styled from 'styled-components'
import { View } from 'react-native'
import { compose, color, size, space, border ,
     borderRadius,layout, flexbox,shadow } from 'styled-system'

const Box = styled(View)(compose(
    color,
    space,
    size, 
    layout,
    flexbox,
    border,
    borderRadius,
    shadow
))

export default Box