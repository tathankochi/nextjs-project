'use client'
import { Layout } from 'antd';

const AdminFooter = () => {
    const { Footer } = Layout;

    return (
        <>
            <Footer style={{ textAlign: 'center' }}>
                Xuân Lộc ©{new Date().getFullYear()} Created by @loc
            </Footer>
        </>
    )
}

export default AdminFooter;