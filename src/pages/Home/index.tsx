import homeStyle from './index.module.scss'
import { io } from 'socket.io-client'
import { Button, Input } from 'antd'
import { useState, useEffect } from 'react'

const Home = () => {
    // const socket = io('http://localhost:3001')
    // useEffect(() => {
    //     socket.on('message', (data) => {
    //         console.log(data)
    //     })
    // }, [])

    const [message, setMessage] = useState('')

    return (
        <div className={homeStyle.home}>
            <div className={homeStyle['home-left']}>
                <Input value={message} onChange={(e) => setMessage(e.target.value)} placeholder="请输入" style={{ width: 300, margin: '10px 0' }} />
                <br />
                {/* <Button type="primary" onClick={() => { socket.emit('message', { message }) }}>按钮</Button> */}
            </div>
            <div>
            </div>
        </div>
    )
}

export default Home