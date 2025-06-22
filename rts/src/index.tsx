import { createRoot } from 'react-dom/client';

const App = () => {
  return (
    <div>
      <h1>hi world</h1>
    </div>
  );
};

const container = document.querySelector('#root');

if (container) {
  const root = createRoot(container); // 创建 React 18 的根
  root.render(<App />);
}
