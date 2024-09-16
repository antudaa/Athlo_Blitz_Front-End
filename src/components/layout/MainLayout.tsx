import { Layout } from "antd";
import Navbar from "../Global/Navbar";
import FooterSection from "../Global/Footer";
import { Outlet, useLocation } from "react-router-dom";
import Container from "./Container";

const { Content } = Layout;

const MainLayout = () => {
    const location = useLocation();
    const isDashboard = location.pathname.startsWith('/admin') || location.pathname.startsWith('/user');

    return (
        <Layout>
            {
                isDashboard ? (
                    <>
                        <Outlet />
                    </>
                ) : (
                    <Container>
                        <Navbar />
                        <Content style={{ margin: '0px' }}>
                            <Outlet />
                        </Content>
                        <FooterSection />
                    </Container>
                )
            }
        </Layout>
    );
};

export default MainLayout;