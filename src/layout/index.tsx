import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import layoutStyle from './index.module.scss'
import { useLocation, useNavigate } from 'react-router-dom'

const { Header, Footer, Content } = Layout

const headerStyle = {
    background: '#fff',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
    height:  '60px',
}
const contentStyle = {
    maxWidth: '1200px',
    margin: '0 auto'
}
const meauList = [
    { name: '首页', path: '/home' },
    { name: '文学', path: '/culture' },
    { name: '艺术', path: '/art' },
    { name: '后端', path: '/backend' },
    { name: '前端', path: '/frontend' }
]
const LayOut: React.FC = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const jump = (path: string) => navigate(path)

    return (
        <Layout className={layoutStyle.layout}>
            <Header style={headerStyle}>
                <ul className={layoutStyle['layout-nav']}>
                    {meauList.map((item) => (
                        <li key={item.name}>
                            <a onClick={() => jump(item.path)} className={location.pathname === item.path ? layoutStyle['active-link'] : ''}>{item.name}</a>
                        </li>
                    ))}
                </ul>
            </Header>
            <Content style={contentStyle}>
                <Outlet />
            </Content>
            <Footer>Footer</Footer>
        </Layout>
    )
}

export default LayOut