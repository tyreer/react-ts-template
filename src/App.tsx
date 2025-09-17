import { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from './theme'
import { Button, Card } from './components'

const AppContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.surface};
  min-height: 100vh;
`

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
`

const Logo = styled.img`
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
  
  &:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
`

const Title = styled.h1`
  font-size: 3.2em;
  line-height: 1.1;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 2rem;
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
`

const Description = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1rem;
`

const Code = styled.code`
  background-color: ${({ theme }) => theme.colors.border};
  padding: 0.2em 0.4em;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-family: 'Courier New', monospace;
`

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <LogoContainer>
          <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
            <Logo src="/vite.svg" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <Logo src="/src/assets/react.svg" alt="React logo" />
          </a>
        </LogoContainer>

        <Title>Vite + React + TypeScript</Title>

        <Card>
          <ButtonContainer>
            <Button onClick={() => setCount((count) => count + 1)}>
              Count is {count}
            </Button>
            <Button variant="secondary" onClick={() => setCount(0)}>
              Reset
            </Button>
            <Button variant="outline" onClick={() => setCount((count) => count - 1)}>
              Decrease
            </Button>
          </ButtonContainer>

          <Description>
            Edit <Code>src/App.tsx</Code> and save to test HMR
          </Description>
        </Card>

        <Description>
          This template includes React, Vite, TypeScript, Styled Components, and Vitest
        </Description>
      </AppContainer>
    </ThemeProvider>
  )
}

export default App
