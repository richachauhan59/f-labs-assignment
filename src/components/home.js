import React from 'react'
import './home.css'

const home = () => {
    return (
        <div>
            <div
            style={{
                background: `url('${process.env.PUBLIC_URL}/bg.jpg')`,
                width:'1440px',
                height:'790px', 
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
            >
                    <span className="Omega">Omega</span>                                
                    <span className="Demos-Pages-Support" >Demos  </span>
                    <span className="Demos-Pages-Support" > Pages </span>
                    <span className="Demos-Pages-Support" > Support </span>
                    <div>
                        <img style={{marginLeft:"200px"}} src="oval.png" alt="image"/>
                    </div>
                    <div className="Bring-more-leads-for" >
                        Bring more leads for your bussiness fast
                    </div>
                    <div className="Create-custom-landin">
                    Create custom landing pages with Omega that convert more visitors than any website. With lots of unique blocks, you can easily build a page without coding.
                    </div>
                    <div className="Rectangle">
                        <div className="email-84" ></div>
                        <div className="Email-address" >Email address</div>
                        <div className="BG" >
                            <div className="Get-Started" > Get Started</div>
                        </div>
                    </div>
                    <div className="Oval-Copy" >
                        <img src="path.png" className="Path" />

                        <div className="Conversion" >
                            Conversation
                        </div>
                        <div className="thirtyNine" >
                            39%
                        </div>
                    </div>
            </div>
            
        </div>
    )
}

export default home