function Navigation(){
    return(
        //一级导航栏
        <nav className = 'navigation'>
            <div className="nav-list left">
                <a href="/recommended" className="nav-item active" style={{width:51.83,height:46,position:"fixed",display:"flex",alignItems:"center"}}>
                    <div style={{width:27.83,height:13.71,fontSize:13.92}}>推荐</div>
                </a>
                <a href="/backend" className="nav-item" style={{width:51.83,height:46,position:"fixed",left:51,display:"flex",alignItems:"center"}}>
                    <div style={{width:27.83,height:13.71,fontSize:13.92}}>后端</div>
                </a>
                <a href="/frontend" className="nav-item"  style={{width:51.83,height:46,position:"fixed",left:102,display:"flex",alignItems:"center"}}>
                    <div style={{width:27.83,height:13.71,fontSize:13.92}}>前端</div>
                </a>
            </div>
        </nav>
    )

}

export default Navigation;