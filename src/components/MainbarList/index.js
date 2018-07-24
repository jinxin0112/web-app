import React from 'react'
import Bar from './Bar'

const MainbarList = ({bars, onclick}) => (
    <div className={'mainbar'}>
        <div className={'mainbar-branding'}>
            <a href="#">
                <img src="https://www.arqui9.com/wp-content/uploads/2016/06/arqui9-logo.png" alt="Arqui9 Visualisation // London // United Kingdom"/>
            </a>
        </div>
        <ul className={'mainbar-list'}>
            {
                bars.map((item, index)=>(
                    <Bar 
                        key={`bar_${index}`}
                        {...item} 
                        onclick={onclick}
                    />))
            }
        </ul>
    </div>
)

export default MainbarList