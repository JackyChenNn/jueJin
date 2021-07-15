import React,{Component} from "react";
import "./index.css";
import {Link,Route} from "react-router-dom";
import Backend from "../Backend";
import Recommended from "../Recommended";
import Frontend from "../Frontend";

export default class Timeline extends Component {
    render(){
        return(
            //二级导航栏及底下页面
            <div className = 'view timeline-index-view'>
                {/*二级导航栏*/}
                <nav className="tag-nav tag-navigatorv" style={{position:"fixed",top:70}}>
                    <ul className="nav-list tag-list">
                        <li className="nav-item tag">
                            <Link to="/frontend">全部</Link>
                        </li>
                        <li className="nav-item tag">
                            <Link to="/frontend">前端</Link>
                        </li>
                        <li className="nav-item tag">
                            <Link to="/frontend">Js</Link>
                        </li>
                    </ul>
                </nav>
                {/*导航栏底下页面*/}
                <div id="timeline-content" style={{position:"fixed",top:120}}>
                    <div id="entry-list-container">

                        {/*热门最新推荐Tag*/}
                        <header id="list-header">
                            <nav id="list-nav">
                                <ul className="nav-list left">
                                    <li className="nav-item active">
                                        <a href="/frontend">热门</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/frontend?sort=newest">最新</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/frontend/?sort=three_days_hottest">热榜</a>
                                    </li>
                                </ul>
                            </nav>
                        </header>

                        {/*文章列表*/}
                        <div className="entry-list-wrap">
                            <ul className="entry-list">
                                <div>
                                    <Route path = '/Recommended' component={Recommended}/>
                                    <Route path = '/Backend' component={Backend}/>
                                    <Route path = '/Frontend' component={Frontend}/>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}