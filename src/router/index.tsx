import { lazy, ReactNode } from 'react'
import Layout from '@/layout'
import { Navigate } from 'react-router-dom'

const LoginPage = lazy(() => import('@/pages/Login'))
const Home = lazy(() => import('@/pages/Home'))

export interface RouteConfig {
    path: string
    element: ReactNode
    auth: boolean
    children?: RouteConfig[]
    redirect?: string
}

export const routes:RouteConfig[] = [
    { path: '/login', element: <LoginPage />, auth: false },
    {
        path: '/',
        // 实现路由重定向
        element: <Navigate to='/home' />,
        auth: false
    },
    {
        path: '/',
        element: <Layout />,
        auth: true,
        children: [
            { path: '/home', element: <Home />, auth: true }
        ]
    }
]
