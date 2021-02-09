import React from 'react'
import { View } from 'react-native'
import theme from '../utils/theme'
import Button from './toolbox/button'
import Text from './toolbox/text'

export default function actionButton({ children, title, ...props }) {
    return (
        <Button
            style={{ elevation: 5 }}
            bg="white" borderRadius={100}
            height={45} {...props}>
  
            {children}
            {title && (
            <Text color={theme.colors.textParagraphSecond} 
            fontWeight="bold" fontSize={13} ml={5}>{title}</Text>)}
        </Button>
    )
}
