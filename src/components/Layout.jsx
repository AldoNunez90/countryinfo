import UpLine from "./UpLine";


const Layout = ({children}, moon) => {
    return ( <div className="layout">
        <UpLine moon= {moon}/> 
        {children}
    </div> );
}
 
export default Layout;