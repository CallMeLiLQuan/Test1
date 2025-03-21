"use client";

import {
  AppstoreOutlined,
  DashboardOutlined,
  EnvironmentOutlined,
  FileDoneOutlined,
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useState } from "react";

const { Header, Sider, Content } = Layout;

const menuItems = [
  { key: "/", label: "Dashboard", icon: <DashboardOutlined /> },
  { key: "/region", label: "Region", icon: <EnvironmentOutlined /> },
  { key: "/land", label: "Land", icon: <AppstoreOutlined /> },
  { key: "/area", label: "Area", icon: <HomeOutlined /> },
  { key: "/employee", label: "Employee", icon: <TeamOutlined /> },
  { key: "/task", label: "Task", icon: <FileDoneOutlined /> },
  { key: "/owner", label: "Owner", icon: <UserOutlined /> },
];

type AppLayoutProps = {
  children: ReactNode;
};

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState<boolean>(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} trigger={null}>
        <div
          className="logo"
          style={{ color: "white", textAlign: "center", padding: "16px" }}
        >
          Quản lý đất
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[pathname]}
          onClick={({ key }) => router.push(key)}
          items={menuItems}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            background: "#fff",
            padding: "0 16px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{ fontSize: "16px", marginRight: "16px" }}
          />
          <span style={{ fontSize: "20px" }}>Dashboard</span>
        </Header>
        <Content
          style={{ margin: "16px", padding: "24px", background: "#fff" }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
