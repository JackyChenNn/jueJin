import React,{Component} from "react";
import "./index.css";

export default class Timeline extends Component {
    render(){
        return(
            //二级导航栏及底下页面
            <div className = 'view timeline-index-view'>
                {/*二级导航栏*/}
                <nav className="tag-nav tag-navigatorv" style={{position:"fixed",top:70}}>
                    <ul className="nav-list tag-list">
                        <li className="nav-item tag">
                            <a href="/frontend">全部</a>
                        </li>
                        <li className="nav-item tag">
                            <a href="/frontend">前端</a>
                        </li>
                        <li className="nav-item tag">
                            <a href="/frontend/Js">Js</a>
                        </li>
                    </ul>
                </nav>
                {/*导航栏底下页面*/}
                <div id="timeline-content" style={{position:"fixed",top:140}}>
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
                                <div></div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}