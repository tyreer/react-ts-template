import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../theme'
import { Card } from './Card'

const renderWithTheme = (component: React.ReactElement) => {
    return render(
        <ThemeProvider theme={theme}>
            {component}
        </ThemeProvider>
    )
}

describe('Card', () => {
    it('renders children content', () => {
        renderWithTheme(
            <Card>
                <p>Card content</p>
            </Card>
        )
        expect(screen.getByText('Card content')).toBeInTheDocument()
    })

    it('renders with default props', () => {
        renderWithTheme(
            <Card>
                <div>Test content</div>
            </Card>
        )
        expect(screen.getByText('Test content')).toBeInTheDocument()
    })

    it('renders with different padding sizes', () => {
        const { rerender } = renderWithTheme(
            <Card padding="sm">
                <div>Small padding</div>
            </Card>
        )
        expect(screen.getByText('Small padding')).toBeInTheDocument()

        rerender(
            <ThemeProvider theme={theme}>
                <Card padding="lg">
                    <div>Large padding</div>
                </Card>
            </ThemeProvider>
        )
        expect(screen.getByText('Large padding')).toBeInTheDocument()
    })

    it('renders with different shadow sizes', () => {
        const { rerender } = renderWithTheme(
            <Card shadow="sm">
                <div>Small shadow</div>
            </Card>
        )
        expect(screen.getByText('Small shadow')).toBeInTheDocument()

        rerender(
            <ThemeProvider theme={theme}>
                <Card shadow="lg">
                    <div>Large shadow</div>
                </Card>
            </ThemeProvider>
        )
        expect(screen.getByText('Large shadow')).toBeInTheDocument()
    })
})
