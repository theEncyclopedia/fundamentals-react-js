import { TodoProvider } from "./context/TodoContext";
import TodoMainSection from "./sections/TodoMainSection";

const ContextDetailApp = () => {
  return (
    <TodoProvider>
      <TodoMainSection />
    </TodoProvider>
  );
};

export default ContextDetailApp;
