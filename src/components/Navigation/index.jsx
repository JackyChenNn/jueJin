import React,{Component} from "react";
import "./index.css";

export default class Navigation extends Component{
    render(){
        return(
            //一级导航栏
            <nav className = 'view-nav'>
                <div className="nav-list left">
                    <a href="/recommended" className="nav-item router-link-exact-active route-active active">
                         <div>推荐</div>
                    </a>
                    <a href="/backend" className="nav-item">
                        <div>后端</div>
                    </a>
                    <a href="/frontend" className="nav-item">
                        <div>前端</div>
                    </a>
                </div>
            </nav>
        )
    }
}