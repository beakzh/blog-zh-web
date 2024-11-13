import { message } from 'antd'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const useRouteGuard = () => {
    const token = localStorage.getItem('token')
    const location = useLocation()
    const navigate = useNavigate()        
    useEffect(() => {
        if (!token && location.pathname !== '/login') {
            message.error('请先登录')
            navigate('/login')
        }else if (token && location.pathname === '/login') {            
            navigate('/', { replace: true })
        }
    },[token, location.pathname])
}

export default useRouteGuard