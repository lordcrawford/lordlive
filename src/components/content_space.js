import React from 'react'

import './space.css';


class ContentSpace extends React.Component {
    render (){
        const class_name = "w-1/3 h-1/5 " + this.props.color + " space" ;
        
        return (
            <div className={class_name}>
                {this.props.children}
            </div>
        )
    }
    
}

export default ContentSpace