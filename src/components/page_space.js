import React from 'react'
import './space.css';


class PageSpace extends React.Component {
    render (){
        function handleMouseOver(e) {
            e.target.firstChild.style.color = 'black';
        }

        function handleMouseOut(e) {
            e.target.firstChild.style.color = 'white';
        }
        
        const class_name = "w-1/3 h-1/5 " + this.props.pagename + " space";
        
        return (
            <div className={class_name} onClick={this.props.handleClick} 
            onMouseOver={handleMouseOver} onMouseLeave={handleMouseOut} style={{ backgroundColor: this.props.color}}>
                <span className="page_text">{this.props.pagename}</span>
            </div>
        )
    }
    
}

export default PageSpace