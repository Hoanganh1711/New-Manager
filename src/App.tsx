import { Layout } from 'antd';
import 'antd/dist/antd.css';
import { Route, Routes } from 'react-router-dom';
import PostNewForm from './components/PostNewForm';
import Sidebar from './Sidebar';
import NewsManager from './components/User/NewsManager';
import ShowNews from './components/ShowNews';
import './App.css';
import UserInfo from './components/User/UserInfo';
import { Header } from 'antd/lib/layout/layout';

const { Content, Footer } = Layout;

const App = () => {
  // const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout style={{ minHeight: '100vh' }}>

      <Sidebar />

      <Layout className="site-layout">
        {/* <Header className="site-layout-background" style={{ padding: 0 }} /> */}
        <Content style={{ margin: '0 16px' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>

            <Routes>
              <Route path="/PostNewForm" element={<PostNewForm />} />
              <Route path="/NewsManager" element={<NewsManager />} />
              <Route path="/ShowNews" element={<ShowNews />} />
              <Route path="/UserInfo" element={<UserInfo />} />
            </Routes>
            
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;