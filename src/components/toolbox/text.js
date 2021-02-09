import React from 'react'
import styled from 'styled-components'
import { Text as T} from 'react-native'
import { compose, color, size, space, border , borderRadius, typography } from 'styled-system'

const Text = styled(T)(compose(
    typography,
    color,
    space,
    size, 
    border,
))

export default Text