function Navigation(){
    return(
        //一级导航栏
        <nav className = 'view-nav'>
            <a href="/recommended" className="recommended">推荐</a>
            <a href="/backend" className="backend">后端</a>
            <a href="/frontend" className="frontend">前端</a>
        </nav>
    )

}

export default Navigation;