import { Outlet } from 'react-router-dom';
import Layout from './components/Layouts/Layout';
import HomePage from './pages/Home';

function App() {
  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
}

export default App;
