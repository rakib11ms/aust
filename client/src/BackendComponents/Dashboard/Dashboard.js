import MasterDashboardLayout from "./MasterDashboardLayout";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import './Dashboard.css'
import Publication from "./Publication";
function Dashboard() {
    return (
        <>
            {/* <MasterDashboardLayout>
                <section className="dashboard-main-content"> */}
            {/* <h1>Hello Dashboard Main Content</h1> */}

            {/* </section>

            </MasterDashboardLayout> */}


            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2  sidebar-left1">
                        <Sidebar />
                    </div>

                    <div className="col-md-10 ">
                        <Topbar />

                        <section className="dashboard-card-top-wrapper mt-3">
                            <div className="dashboard-top-cards rounded-3 border border-success p-0 ">
                                <div className="row py-2 px-1 d-flex align-content-center justify-content-center">
                                    <div className="fontaws-bold rounded-3 py-4 text-light col-3">
                                        {/* p-1 */}
                                        <i class="fa-solid fa-newspaper fa-2x  "></i>
                                    </div>
                                    <div className="col-6 mt-1">
                                        <h5 className="fw-bold">103</h5>
                                        <p className="m-0">Total</p>
                                        <h6 className="m-0">Posts</h6>
                                    </div>
                                </div>
                            </div>

                            <div className="dashboard-top-cards rounded-3 border border-success p-0 ">
                                <div className="row py-2 px-1 d-flex align-content-center justify-content-center">
                                    <div className="fontaws-bold rounded-3 py-4 text-light col-3">
                                        {/* p-1 */}
                                        <i class="fa-solid fa-users fa-2x  "></i>
                                    </div>
                                    <div className="col-6 mt-1">
                                        <h5 className="fw-bold">103</h5>
                                        <p className="m-0">Total</p>
                                        <h6 className="m-0">Users</h6>
                                    </div>
                                </div>
                            </div>


                            <div className="dashboard-top-cards rounded-3 border border-success p-0 ">
                                <div className="row py-2 px-1 d-flex align-content-center justify-content-center">
                                    <div className="fontaws-bold rounded-3 py-4 text-light col-3">
                                        {/* p-1 */}
                                        <i class="fa-solid fa-bullhorn fa-2x "></i>
                                    </div>
                                    <div className="col-6 mt-1">
                                        <h5 className="fw-bold">103</h5>
                                        <p className="m-0">Total</p>
                                        <h6 className="m-0">Announces</h6>
                                    </div>
                                </div>
                            </div>




                            <div className="dashboard-top-cards rounded-3 border border-success p-0 ">
                                <div className="row py-2 px-1 d-flex align-content-center justify-content-center">
                                    <div className="fontaws-bold rounded-3 py-4 text-light col-3 ">
                                        {/* p-1 */}
                                        <i class="fa-solid fa-suitcase  fa-2x  "></i>
                                    </div>
                                    <div className="col-6 mt-1">
                                        <h5 className="fw-bold">103</h5>
                                        <p className="m-0">Total</p>
                                        <h6 className="m-0">Jobs</h6>
                                    </div>
                                </div>
                            </div>




                            <div className="dashboard-top-cards rounded-3 border border-success p-0 ">
                                <div className="row py-2 px-1 d-flex align-content-center justify-content-center">
                                    <div className="fontaws-bold rounded-3 py-4 text-light bg-danger col-3">
                                        {/* p-1 */}
                                        {/* <i class="fa-solid fa-newspaper fa-2x mx-1 "></i> */}
                                        <i class="fa-solid fa-triangle-exclamation fa-2x "></i>
                                    </div>
                                    <div className="col-6 mt-1">
                                        <h5 className="fw-bold">103</h5>
                                        <p className="m-0">Total</p>
                                        <h6 className="m-0">Warnings</h6>
                                    </div>
                                </div>
                            </div>








                        </section>

                        <Publication />


                    </div>
                </div>

            </div>




        </>
    )
}

export default Dashboard;