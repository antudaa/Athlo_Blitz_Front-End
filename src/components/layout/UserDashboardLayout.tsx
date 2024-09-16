import { useState } from 'react';
import { Layout, Menu, Col, Row, Dropdown, Avatar, message } from 'antd';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Footer } from 'antd/es/layout/layout';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectCurrentUser } from '../../redux/features/auth/authSlice';
import { userPaths } from '../../routes/userRoute';
import shortLogo from '../../assets/Fav_Logo.png';
import longLogo from '../../assets/Site_Logo.png';
import { useMediaQuery } from 'react-responsive';
import WelcomeBanner from '../Global/WelcomeBanner';
import { FaHome } from "react-icons/fa";

const { Header, Sider, Content } = Layout;

const UserDashboard = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [collapsed, setCollapsed] = useState(false);
  const user = useSelector(selectCurrentUser);

  // Media query hook to detect screen size
  const isMediumScreen = useMediaQuery({ minWidth: 768 });

  const handleLogout = () => {
    dispatch(logout());
    message.success("Logged out successfully");
  };

  const Items = (
    <Menu>
      <Menu.Item key="profile" icon={<FaHome />}>
        <NavLink to={`/`}>Home</NavLink>
      </Menu.Item>
      <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  const menuItems = userPaths.map((route) => ({
    key: `/user/${route.path}`,
    icon: route.icon,
    label: <Link to={`/user/${route.path}`}>{route.name}</Link>,
  }))
  return (
    <Layout>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        width={isMediumScreen ? 300 : 150} // Adjust width based on screen size
        style={{ height: '100vh', position: 'sticky', top: '0', left: '0' }}
        theme='light'
      >
        <Link to='/' className="text-center p-3 mx-auto">
          {collapsed ? (
            <img className='w-[40px] mx-auto' src={shortLogo} alt="Short Logo" />
          ) : (
            <img className='w-[180px] mx-auto' src={longLogo} alt="Long Logo" />
          )}
        </Link>

        {/* Adding border below the logo */}
        <div className="border-b-[1px] border-gray-300 mb-4 w-3/5 md:w-4/5 mx-auto"></div>  {/* Border between logo and menu */}

        <Menu theme="light" mode="inline" selectedKeys={[location.pathname]} items={menuItems} />
      </Sider>

      <Layout>
        <Header className="bg-blue-50 shadow-md flex justify-between items-center px-4">
          <div className="text-sm md:text-xl font-semibold text-gray-700">Welcome Back, <span className='text-indigo-600'>{user?.name}!</span></div>
            <Dropdown
              overlayStyle={{ width: '180px', marginRight: '-40px' }}
              overlay={Items}
              trigger={['click']}
            >
              <Avatar
                src={user?.profileImage}
                icon={!user?.profileImage && <UserOutlined />}
                className="cursor-pointer border border-indigo-500 h-8 w-8 md:mr-10 rounded-full"
              />
            </Dropdown>
        </Header>
        
        <Content style={{ margin: '34px 36px 0' }}>
          <Row gutter={16}>
            <Col span={24}>
              <WelcomeBanner />
              <Outlet />
            </Col>
          </Row>
        </Content>

        <Footer className="text-center bg-gray-200 p-4 text-xs md:text-md">
          Athlo Blitz ©{new Date().getFullYear()} by Antu_Das
        </Footer>
      </Layout>
    </Layout>
  );
};

export default UserDashboard;
