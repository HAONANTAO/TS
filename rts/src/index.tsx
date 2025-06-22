import { createRoot } from 'react-dom/client';
import GuestList from './state/GuestList';
const App = () => {
  return (
    <div>
      <GuestList />
    </div>
  );
};

const container = document.querySelector('#root');

if (container) {
  const root = createRoot(container); // 创建 React 18 的根
  root.render(<App />);
}
