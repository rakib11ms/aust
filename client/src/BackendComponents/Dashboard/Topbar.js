function Topbar(){
    return(
        <>
        <div className="topbar d-flex p-2 justify-content-between align-items-center row border-bottom border-success">
            <div className="topbar-left col-7 ">
                <h5 className="fw-bold text-success">Dashboard</h5>
                </div>
                <div className="topbar-right d-flex justify-content-around  align-items-center  col-5">
                    <div className="">
                    <div class="input-group rounded-3 border-success">
              <span class="input-group-text bg-white " id="basic-addon1"> <i class="fa-solid fa-magnifying-glass"></i></span>
              <input type="text" class="form-control " placeholder="Search.." aria-label="Username" aria-describedby="basic-addon1" />
            </div>
                    </div>

                    <div className="">
                        <i className="fa fa-user text-success"/>
                    </div>
                    <div className="">
                    <i class="fa-solid fa-envelope text-success"></i>              
                    
                          </div>

                    <div className="">
                        <i className="fa fa-tasks text-success"/>
                    </div>
             
                </div>

        </div>


        </>
    )
}

export default Topbar;