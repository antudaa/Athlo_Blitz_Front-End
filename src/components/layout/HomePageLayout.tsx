import { Layout } from "antd";
import Navbar from "../Global/Navbar";
import FooterSection from "../Global/Footer";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

const HomePageLayout = () => {
    return (
        <Layout>
            <Navbar />
            <Content style={{ margin: '0px' }}>
                <Outlet />
            </Content>
            <FooterSection />
        </Layout>
    );
};

export default HomePageLayout;