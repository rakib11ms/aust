import MaterialTable from "material-table";
import moment from 'moment';
import { Paper } from '@mui/material';
import Sidebar from "../../Dashboard/Sidebar";
import Topbar from "../../Dashboard/Topbar";
import { Link, Navigate, useNavigate, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import debounce from 'lodash.debounce';

function ViewPostalCode() {
    const [loading, setLoading] = useState(true);
    const [render, setRender] = useState('')
    const [allPostalCode, setallPostalCode] = useState([]);




    useEffect(() => {
        axios.get(`/api/postal-code`).then(res => {
            if (res.data.status == 200) {
                setallPostalCode(res.data.postal_code_name);

                setLoading(false);

            }
        })
        // Modal.setAppElement('body');

    }, [render])


    const columns = [
        {
            title: "SL", field: "", render: (row) => <div className=''>{row.tableData.id + 1}</div>,
            cellStyle: {
                // marginLeft: 50,
                // maxWidth: 0,
                textAlign: 'left',
                width: 100,
            },
        },

        {
            title: " Name", field: ``, render: (row) =>
                <div className=''>

                    {row.postal_code_name}

                </div>


            , cellStyle: {
                // marginLeft: 50,
                // maxWidth: 0,
                textAlign: '',
                width: 200,
            },
        },

        {
            title: '', field: ``

            ,
            render: (row) =>
                <div className=''>

                    <div className='d-flex justify-content-between'>
                        <div class="">

                        </div>

                        <div className='my-0 py-0 '>
                            <div className='d-flex align-items-center  ' style={{ cursor: 'pointer' }}>





                                <div className='mx-2 '
                                    onClick={(e) => {
                                        const thisClicked = e.currentTarget;
                                        //  thisClicked.innerText = "Deleting";

                                        Swal.fire({
                                            title: 'Are you sure?',
                                            text: "You won't be able to revert this!",
                                            icon: 'warning',
                                            showCancelButton: true,
                                            confirmButtonColor: '#3085d6',
                                            cancelButtonColor: '#d33',
                                            confirmButtonText: 'Yes, delete it!'
                                        }).then((result) => {
                                            if (result.isConfirmed) {
                                                axios.delete(`/api/postal-code/${row.id}`).then(res => {
                                                    if (res.data.status === 200) {
                                                        // thisClicked.closest("tr").remove();
                                                        setRender(res.data.batch_name)
                                                        //   swal("Success", res.data.message, "success");
                                                    }
                                                });
                                                Swal.fire(
                                                    'Deleted!',
                                                    'Your data has been deleted.',
                                                    'success'
                                                )
                                            }
                                        })
                                    }}
                                >
                                    <i class="fa-solid fa-trash icon-table-trash" ></i>
                                </div>




                            </div>
                        </div>


                    </div>
                </div>

            ,




            cellStyle: {
                // marginLeft: 50,
                // maxWidth: 300,
                // width: 600
            },
        },



    ];
    const[targetValue,setTargetValue]=useState('')
    const handleSearch = debounce((searchText) => {
        const result = allPostalCode.filter(item =>
          item.postal_code_name.toLowerCase().includes(searchText)
        );
        if(searchText!==''){
            setallPostalCode(result);

        }
        else{
            window.location.reload()
        }
      }, 100); // Adjust the debounce delay as needed
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2  sidebar-left1">
                        <Sidebar />
                    </div>

                    <div className="col-md-10 ">
                        <Topbar />

                        <div className='container-fluid'>


                            <div className="col-md-12 mt-3">


                                <div className="card bg-white">

                                    <div className='card-body '>

                                        <div className="d-flex justify-content-between">
                                            <div>
                                            <h6 className="">ALL postal-code Name</h6>

                                            </div>
                                            <div>
                                            <button className="btn btn-success btn-sm float-end">
                                                 <Link to="/create-postal-code" className="text-decoration-none text-white">  Add postal-code</Link>
                                                 </button>

                                            </div>

                                        </div>

                                        <hr />

                                        <div className="d-flex justify-content-end">
                                            <div className="col-3">
                                            <input type="search" className="form-control " placeholder="Search.."
                                                     onChange={(e) => handleSearch(e.target.value.toLowerCase())}

                                            // value={targetValue}
     
                                            />

                                            </div>

                                        </div>



                                        <div className="row">

                                            <div className="col-12 px-4">


                                                {/* <h6 className='mt-2 mx-1'>ALL JobSector blackMapping</h6> */}

                                                <div class="job-sector-sub-sector-map-table mt-3 card">
                                                    <MaterialTable
                                                        components={{
                                                            Container: props => <Paper {...props} elevation={0} />
                                                        }}
                                                        columns={columns}
                                                        data={allPostalCode}
                                                        // isLoading={loading === true ? true : false}


                                                        options={{
                                                            search: false,
                                                            filtering: false,
                                                            toolbar: false,
                                                            showTitle: false,
                                                            searchFieldAlignment: 'left',
                                                            pageSize: 20,
                                                            emptyRowsWhenPaging: false,
                                                            pageSizeOptions: [5, 10, 20, 50, 100],
                                                            selection: false,
                                                            sorting: false,


                                                        }}




                                                    />

                                                </div>





                                            </div>



                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>


                </div>
            </div>
        </>
    )

}

export default ViewPostalCode



