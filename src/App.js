import "./App.css";
import "antd/dist/antd.css";
import { Layout } from "antd";
import AppHeader from "./components/common/AppHeader";
import AppFooter from "./components/common/AppFooter";
import AppHome from "./views/Home/AppHome";

const { Header, Content, Footer } = Layout;
function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <AppHome />
      </Content>
      <Footer>
        <AppFooter />
      </Footer>
    </Layout>
  );
}

export default App;
