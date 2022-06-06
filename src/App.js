import { useContext } from 'react';
import { SystemContext } from 'context';
import Routers from 'routes';
import 'antd/dist/antd.css';

function App() {
  const { loader } = useContext(SystemContext);
  return (
    <>
      <Routers />
    </>
  );
}

export default App;
