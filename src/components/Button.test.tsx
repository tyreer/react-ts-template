import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider } from 'styled-components'
import { theme } from '../theme'
import { Button } from './Button'

const renderWithTheme = (component: React.ReactElement) => {
    return render(
        <ThemeProvider theme={theme}>
            {component}
        </ThemeProvider>
    )
}

describe('Button', () => {
    it('renders with default props', () => {
        renderWithTheme(<Button>Click me</Button>)
        expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument()
    })

    it('renders with different variants', () => {
        const { rerender } = renderWithTheme(<Button variant="primary">Primary</Button>)
        expect(screen.getByRole('button', { name: 'Primary' })).toBeInTheDocument()

        rerender(
            <ThemeProvider theme={theme}>
                <Button variant="secondary">Secondary</Button>
            </ThemeProvider>
        )
        expect(screen.getByRole('button', { name: 'Secondary' })).toBeInTheDocument()

        rerender(
            <ThemeProvider theme={theme}>
                <Button variant="outline">Outline</Button>
            </ThemeProvider>
        )
        expect(screen.getByRole('button', { name: 'Outline' })).toBeInTheDocument()
    })

    it('renders with different sizes', () => {
        const { rerender } = renderWithTheme(<Button size="sm">Small</Button>)
        expect(screen.getByRole('button', { name: 'Small' })).toBeInTheDocument()

        rerender(
            <ThemeProvider theme={theme}>
                <Button size="lg">Large</Button>
            </ThemeProvider>
        )
        expect(screen.getByRole('button', { name: 'Large' })).toBeInTheDocument()
    })

    it('handles click events', async () => {
        const handleClick = vi.fn()
        const user = userEvent.setup()

        renderWithTheme(<Button onClick={handleClick}>Click me</Button>)

        await user.click(screen.getByRole('button', { name: 'Click me' }))
        expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('can be disabled', () => {
        renderWithTheme(<Button disabled>Disabled</Button>)
        expect(screen.getByRole('button', { name: 'Disabled' })).toBeDisabled()
    })

    it('does not call onClick when disabled', async () => {
        const handleClick = vi.fn()
        const user = userEvent.setup()

        renderWithTheme(<Button onClick={handleClick} disabled>Disabled</Button>)

        await user.click(screen.getByRole('button', { name: 'Disabled' }))
        expect(handleClick).not.toHaveBeenCalled()
    })
})
