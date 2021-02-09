import React from 'react'
import { TextInput } from 'react-native'
import styled from 'styled-components'
import {compose , color , size , typography , space , borderRadius, border,layout } from 'styled-system'
import theme from '../../utils/theme'

const Input = styled(TextInput).attrs(props => ({
    placeholderTextColor:theme.colors[props.placeholderTextColor] || '#999'
}))(compose(
    typography,
    color,
    size,
    space,
    borderRadius,
    layout,
    border
))

export default Input

