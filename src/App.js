import Login from "./pages/Login";
import "./App.css";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";

function App() {
  if (!localStorage.getItem("username")) return <Login />;

  return (
    <ChatEngine
      height="100vh"
      projectID="467ac5c7-a3d2-4a59-9c0a-fbd9f0aa2188"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
