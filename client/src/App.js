import './styles/App.css';

import { NewTask } from './components/NewTask';
import { UserRegister } from './pages/UserRegister';
import { UserHome } from './pages/UserHome';
function App() {
  return (
    <>
      {/* <UserRegister /> */}
      {/* <NewTask /> */}
      <UserHome />
    </>
  );
}

export default App;
