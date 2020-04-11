import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import './AppHeader.css';

const AppHeader = () => (
    <Layout.Header className="app-header">
          {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">nav 1</Menu.Item>
          </Menu> */}
          <p className="header-title">Covid Dashboard</p>
    </Layout.Header>
)

export default AppHeader;



