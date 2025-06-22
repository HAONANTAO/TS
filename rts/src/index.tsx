import { createRoot } from 'react-dom/client';
import UserSearch from './state/UserSearch';
import EventComponents from "./events/EventComponents"
const App = () => {
  return (
    <div>
      <EventComponents />
    </div>
  );
};

const container = document.querySelector('#root');

if (container) {
  const root = createRoot(container); // 创建 React 18 的根
  root.render(<App />);
}
