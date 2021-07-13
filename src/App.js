import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID='b4198e88-d501-49d4-8fd8-6fc0a4d41981'
      userName='simulview123'
      userSecret='123'
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;