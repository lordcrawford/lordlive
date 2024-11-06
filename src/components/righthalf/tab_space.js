import React from 'react'
import './space.css';


class TabSpace extends React.Component {
    componentDidMount() {
        let tabs = ['projects', 'art', 'about', 'writing']
        for(const tab of tabs){
            if (window.location.pathname === '/' + tab) {
                const projectElement = document.querySelector('.' + tab + '.space');
                if (projectElement) {
                    projectElement.firstChild.classList.add('underline');
                    projectElement.firstChild.style.fontWeight = '400';
                }else{
                    projectElement.firstChild.classList.remove('underline');
                    projectElement.firstChild.style.fontWeight = '100';
                }
            }
        }
      }

    render (){
        function handleMouseOver(e) {
            let tab_name = window.location.pathname.substring(1);
            if(tab_name !== e.target.firstChild.textContent){
                e.target.firstChild.style.color = 'black';
            }
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

export default TabSpace