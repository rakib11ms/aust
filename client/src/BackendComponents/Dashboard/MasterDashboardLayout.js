import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import './Dashboard.css'
function MasterDashboardLayout({children}){
    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2  sidebar-left1 ">
                    <Sidebar/>
                </div>

                <div className="col-md-10 ">
                    <Topbar/>
                    {
                        children
                    }
                    
                    </div>
            </div>

        </div>
      


        </>
    )
}

export default MasterDashboardLayout;