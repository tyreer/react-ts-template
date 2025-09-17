import styled from 'styled-components'

interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'outline'
    size?: 'sm' | 'md' | 'lg'
    children: React.ReactNode
    onClick?: () => void
    disabled?: boolean
}

const StyledButton = styled.button<{ $variant: string; $size: string }>`
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  
  ${({ $variant, theme }) => {
        switch ($variant) {
            case 'primary':
                return `
          background-color: ${theme.colors.primary};
          color: white;
          &:hover:not(:disabled) {
            background-color: ${theme.colors.secondary};
          }
        `
            case 'secondary':
                return `
          background-color: ${theme.colors.surface};
          color: ${theme.colors.text};
          border: 1px solid ${theme.colors.border};
          &:hover:not(:disabled) {
            background-color: ${theme.colors.border};
          }
        `
            case 'outline':
                return `
          background-color: transparent;
          color: ${theme.colors.primary};
          border: 1px solid ${theme.colors.primary};
          &:hover:not(:disabled) {
            background-color: ${theme.colors.primary};
            color: white;
          }
        `
            default:
                return ''
        }
    }}
  
  ${({ $size, theme }) => {
        switch ($size) {
            case 'sm':
                return `
          padding: ${theme.spacing.sm} ${theme.spacing.md};
          font-size: 0.875rem;
        `
            case 'lg':
                return `
          padding: ${theme.spacing.md} ${theme.spacing.xl};
          font-size: 1.125rem;
        `
            default:
                return `
          padding: ${theme.spacing.sm} ${theme.spacing.lg};
          font-size: 1rem;
        `
        }
    }}
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    children,
    onClick,
    disabled = false,
}) => {
    return (
        <StyledButton
            $variant={variant}
            $size={size}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </StyledButton>
    )
}
