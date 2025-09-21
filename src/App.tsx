import Card from './components/Card';

function ThrowError({ shouldThrow }: { shouldThrow: boolean }) {
  if (shouldThrow) {
    throw new Error('Test error message');
  }
  return <div>No error</div>;
}

function App() {
  return (
    <div>
      <Card>
        <ThrowError shouldThrow={true} />
      </Card>
    </div>
  );
}

export default App;
