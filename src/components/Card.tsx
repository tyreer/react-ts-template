import styled from 'styled-components'

interface CardProps {
    children: React.ReactNode
    padding?: 'sm' | 'md' | 'lg'
    shadow?: 'sm' | 'md' | 'lg'
}

const StyledCard = styled.div<{ $padding: string; $shadow: string }>`
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  
  ${({ $padding, theme }) => {
        switch ($padding) {
            case 'sm':
                return `padding: ${theme.spacing.sm};`
            case 'lg':
                return `padding: ${theme.spacing.xl};`
            default:
                return `padding: ${theme.spacing.md};`
        }
    }}
  
  ${({ $shadow, theme }) => {
        switch ($shadow) {
            case 'sm':
                return `box-shadow: ${theme.shadows.sm};`
            case 'lg':
                return `box-shadow: ${theme.shadows.lg};`
            default:
                return `box-shadow: ${theme.shadows.md};`
        }
    }}
`

export const Card: React.FC<CardProps> = ({
    children,
    padding = 'md',
    shadow = 'md',
}) => {
    return (
        <StyledCard $padding={padding} $shadow={shadow}>
            {children}
        </StyledCard>
    )
}
