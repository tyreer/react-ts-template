#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get component name from command line arguments
const rawInput = process.argv[2];

if (!rawInput) {
  console.error('Error: Please provide a component name');
  console.log('Usage: node scripts/bootstrap-component.js <ComponentName>');
  console.log('Examples:');
  console.log('  npm run bootstrap button');
  console.log('  npm run bootstrap my-button');
  console.log('  npm run bootstrap myButton');
  console.log('  npm run bootstrap my_component');
  console.log('  npm run bootstrap MyComponent');
  process.exit(1);
}

// Convert input to PascalCase
function toPascalCase(input) {
  return (
    input
      // Split by common separators (hyphens, underscores, spaces, camelCase)
      .split(/[-_\s]+|(?=[A-Z])/)
      // Filter out empty strings
      .filter((word) => word.length > 0)
      // Capitalize first letter of each word
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      // Join words together
      .join('')
  );
}

const componentName = toPascalCase(rawInput);

// Validate that we have a valid component name
if (!componentName || componentName.length === 0) {
  console.error('Error: Could not generate a valid component name from input');
  process.exit(1);
}

console.log(`📝 Converting "${rawInput}" to "${componentName}"`);

const componentsDir = path.join(__dirname, '..', 'src', 'components');
const componentFile = path.join(componentsDir, `${componentName}.tsx`);
const testFile = path.join(componentsDir, `${componentName}.test.tsx`);
const indexFile = path.join(componentsDir, 'index.ts');

// Component template
const componentTemplate = `import styled from 'styled-components';

import type { ReactNode } from 'react';

import ErrorBoundary from './ErrorBoundary';

interface ${componentName}Props {
  children: ReactNode;
}

const Styled${componentName} = styled.div\`
  border: 5px dashed blue;
\`;

export default function ${componentName}({ children }: ${componentName}Props) {
  return (
    <ErrorBoundary>
      <Styled${componentName}>{children}</Styled${componentName}>
    </ErrorBoundary>
  );
}
`;

// Test template
const testTemplate = `import { render, screen } from '@testing-library/react';

import ${componentName} from './${componentName}';

describe('${componentName}', () => {
  it('renders Hello World text', () => {
    render(
      <${componentName}>
        <h1>Hello World</h1>
      </${componentName}>
    );
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });
});
`;

// Check if component already exists
if (fs.existsSync(componentFile)) {
  console.error(`Error: Component ${componentName} already exists`);
  process.exit(1);
}

try {
  // Create component file
  fs.writeFileSync(componentFile, componentTemplate);
  console.log(`✅ Created ${componentName}.tsx`);

  // Create test file
  fs.writeFileSync(testFile, testTemplate);
  console.log(`✅ Created ${componentName}.test.tsx`);

  // Read current index.ts content
  let indexContent = '';
  if (fs.existsSync(indexFile)) {
    indexContent = fs.readFileSync(indexFile, 'utf8');
  }

  // Add new export to index.ts
  const newExport = `export { default as ${componentName} } from './${componentName}';`;

  // Check if export already exists
  if (indexContent.includes(newExport)) {
    console.log(`⚠️  Export for ${componentName} already exists in index.ts`);
  } else {
    // Add the new export
    const updatedIndexContent =
      indexContent + (indexContent ? '\n' : '') + newExport;
    fs.writeFileSync(indexFile, updatedIndexContent);
    console.log(`✅ Added ${componentName} export to index.ts`);
  }

  console.log(`\n🎉 Successfully bootstrapped ${componentName} component!`);
  console.log(`\nFiles created:`);
  console.log(`  - src/components/${componentName}.tsx`);
  console.log(`  - src/components/${componentName}.test.tsx`);
  console.log(`  - Updated src/components/index.ts`);
} catch (error) {
  console.error('Error creating component:', error.message);
  process.exit(1);
}
