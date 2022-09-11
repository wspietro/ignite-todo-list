import { GlobalStyles } from "./styles/GlobalStyles"
import { Header } from './components/Header'
import { MainTaskDashboard } from './components/MainTaskDashboard'

export function App() {
  return (
    <>
      <Header />
      <MainTaskDashboard />
      <GlobalStyles />
    </>
  );
};


