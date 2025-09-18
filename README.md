# Dev Template

A modern React development environment with TypeScript, Vite, Styled Components, and comprehensive testing setup.

## 🚀 Features

- **React 19** - Latest React with modern features
- **Vite** - Lightning-fast build tool and dev server
- **TypeScript** - Full type safety and IntelliSense
- **Styled Components** - CSS-in-JS with TypeScript support
- **Vitest** - Fast unit testing framework
- **React Testing Library** - Simple and complete testing utilities
- **ESLint** - Code linting and formatting

## 📦 What's Included

### Dependencies

- `react` & `react-dom` - React framework
- `styled-components` - CSS-in-JS styling
- `@types/styled-components` - TypeScript definitions

### Dev Dependencies

- `@vitejs/plugin-react` - Vite React plugin
- `typescript` - TypeScript compiler
- `vitest` - Testing framework
- `@testing-library/react` - React testing utilities
- `@testing-library/jest-dom` - Custom Jest matchers
- `@testing-library/user-event` - User interaction testing
- `jsdom` - DOM environment for testing
- `eslint` - Code linting

## 🛠️ Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start development server:**

   ```bash
   npm run dev
   ```

3. **Run tests:**

   ```bash
   npm test
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.tsx      # Example button component
│   ├── Button.test.tsx # Button component tests
│   ├── Card.tsx        # Example card component
│   ├── Card.test.tsx   # Card component tests
│   └── index.ts        # Component exports
├── theme/              # Styled Components theme
│   └── index.ts        # Theme configuration
├── test/               # Test configuration
│   └── setup.ts        # Test setup file
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── styled.d.ts         # Styled Components type definitions
```

## 🎨 Styling

This template uses Styled Components with a centralized theme system:

- **Theme Provider** - Wraps the entire app with theme context
- **TypeScript Support** - Full type safety for theme properties
- **Responsive Design** - Mobile-first approach with consistent spacing
- **Component Variants** - Easy-to-use prop-based styling

### Example Usage

```tsx
import styled from 'styled-components';

import { Button } from './components';

const Container = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.surface};
`;

function App() {
  return (
    <Container>
      <Button variant="primary" size="lg">
        Click me
      </Button>
    </Container>
  );
}
```

## 🧪 Testing

The project includes a comprehensive testing setup:

- **Vitest** - Fast test runner with Jest-compatible API
- **React Testing Library** - Simple and complete testing utilities
- **User Event** - Realistic user interaction simulation
- **JSDOM** - Browser-like environment for tests

### Running Tests

```bash
# Run tests in watch mode
npm test

# Run tests once
npm run test:run

# Run tests with UI
npm run test:ui
```

### Example Test

```tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button } from './Button';

test('button handles click events', async () => {
  const handleClick = vi.fn();
  const user = userEvent.setup();

  render(<Button onClick={handleClick}>Click me</Button>);

  await user.click(screen.getByRole('button'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm test` - Run tests in watch mode
- `npm run test:run` - Run tests once
- `npm run test:ui` - Run tests with UI
- `npm run lint` - Run ESLint

## 🔧 Configuration Files

- `vite.config.ts` - Vite configuration with Vitest setup
- `tsconfig.json` - TypeScript configuration
- `vitest.config.ts` - Vitest testing configuration
- `.gitignore` - Comprehensive git ignore rules

## 🚀 Ready to Go!

Your development environment is now ready. Start building your React application with:

- Type-safe components
- Modern styling with Styled Components
- Comprehensive testing setup
- Fast development and build processes

Happy coding! 🎉
