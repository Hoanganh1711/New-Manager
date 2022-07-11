import {
    FormOutlined,
    UserOutlined,
    HomeFilled,
    HighlightOutlined,
    SnippetsOutlined,
    GlobalOutlined,
    SolutionOutlined
} from '@ant-design/icons';   
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { NavLink, useLocation } from "react-router-dom";
const { Sider } = Layout;

// components
// import FormList from './FormList';
// import User from './User';
// import SubMenu from 'antd/lib/menu/SubMenu';


const Sidebar = () => {
    
    const [collapsed, setCollapsed] = useState(false);
    const location = useLocation();
    
    const items = [
        {
            key: "home",
            icon: <HomeFilled />,
            title: "Trang chủ",
            link: "/"
        },
        {
            key: "ShowNews",
            icon: <GlobalOutlined />,
            title: "Tin tức",
            link: "./ShowNews"
        },
        {
            key: "userManagement",
            title: "User",
            children: [
                {
                    key: "UserInfo",
                    icon: <SolutionOutlined />,
                    title: "Thông tin cá nhân",
                    link: "./UserInfo"
                },
                {
                    key: "form",
                    icon: <FormOutlined />,
                    title: "Đăng tin",
                    link: "./PostNewForm"
                },
                {
                    key: "NewsManager",
                    icon: <SnippetsOutlined />,
                    title: "Quản lý bài viết",
                    link: "./NewsManager"
                },
            ]
        },
        // {
        //     key: "userManagement",
        //     title: "Addmin",
        //     children: [
        //         {
        //             key: "NewsManager",
        //             icon: <SnippetsOutlined />,
        //             title: "Quản lý bài viết",
        //             link: "./NewsManager"
        //         },
        //         {
        //             key: "ShowNews",
        //             icon: <GlobalOutlined />,
        //             title: "Tin tức",
        //             link: "./ShowNews"
        //         }
        //     ]
        // }
    ];

    return (
        <>
            <Sider style={{}} collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
                <Menu theme="dark" defaultSelectedKeys={[location.pathname]} mode="inline">
                    {items.map((item) =>
                        !item.children ? (
                            <Menu.Item key={item.key}>
                                <NavLink className="d-flex align-items-center" to={item.link}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </NavLink>
                            </Menu.Item>
                        ) : (
                            <Menu.SubMenu key={item.key} title={item.title} icon={<UserOutlined />}>
                                {item.children.map((child) =>
                                    <Menu.Item key={child.key}>
                                        <NavLink className="d-flex align-items-center" to={child.link}>
                                            {child.icon}
                                            <span>{child.title}</span>
                                        </NavLink>
                                    </Menu.Item>
                                )}
                            </Menu.SubMenu>
                        )
                    )}
                </Menu>
            </Sider>
        </>
    );
}

export default Sidebar