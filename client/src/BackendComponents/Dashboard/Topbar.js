import React, { useState, useEffect } from 'react';
import { Link, Navigate, useNavigate, Routes, Route } from "react-router-dom";


function Topbar() {
    const [stickyClass, setStickyClass] = useState('');



    // const stickNavbar = () => {
    //     return window.scrollY >= 100 ? setStickyClass('sticky-nav') : setStickyClass('');
        
    // };

    // useEffect(()=>{
    //     if (window !== undefined) {
    //         let windowHeight = window.scrollY;
    //         // window height changed for the demo
    //         windowHeight > 60 ? setStickyClass('sticky-nav') : setStickyClass('');
    //     }
    // },[])

    // window.addEventListener('scroll', stickNavbar);

    // useEffect(() => {
    //     console.log('useffect called');
    //     window.addEventListener('scroll', stickNavbar);
    //     return () => window.removeEventListener('scroll', stickNavbar);
    // }, []);


    return (
        <>
            <div className={`topbar d-flex p-2 justify-content-between align-items-center row border-bottom border-success sticky ${stickyClass}`}>
                <div className="topbar-left col-7 ">
                    <h5 className="fw-bold text-success">
                        {/* Dashboard */}

                        {/* {console.log('href',window.location.href)} */}
                        

                    </h5>
                </div>
                <div className="topbar-right d-flex justify-content-start  align-items-center  col-4">
                    <div className="">
                        <div class="input-group rounded-3 border-success">
                            <span class="input-group-text bg-white " id="basic-addon1"> <i class="fa-solid fa-magnifying-glass"></i></span>
                            <input type="text" class="form-control " placeholder="Search.." aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                    </div>

                    <div className="mx-5" style={{ fontSize: '17px' }}>
                        <i className="fa fa-bell text-success" />
                    </div>
                    <div className="" style={{ fontSize: '17px' }}>
                        <i class="fa-solid fa-envelope text-success"></i>

                    </div>

                    {/* <div className="">
                        <i className="fa fa-tasks text-success"/>
                    </div> */}

                </div>

            </div>


        </>
    )
}

export default Topbar;