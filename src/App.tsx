import './App.css'
import { useRoutes } from 'react-router-dom'
import { routes } from '@/router'
import useRouteGuard from '@/router/useRouteGuard'

function App() {
    useRouteGuard()
    // 根据路由表生成对应路由
    const element = useRoutes(routes)
    
    return (
        <div className='App'>
           {element}
        </div>
    )
}

export default App
