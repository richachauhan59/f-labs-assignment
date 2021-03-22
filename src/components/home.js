import React from 'react'
import styles from './home.css'

const home = () => {
    const back = "/home/richachauhan59/Masai/f-labs-assignment/public/bg.jpg"
    return (
        <div>
            <div
            style={{
                width:'1440px',
                height:'790px', 
                background: `url('${process.env.PUBLIC_URL}/bg.jpg')`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'cover',
            }}
            >
                <h1>Richa chauhan</h1> 
            </div>
            
        </div>
    )
}

export default home