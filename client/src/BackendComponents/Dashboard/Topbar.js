import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, Navigate, useNavigate, Routes, Route } from "react-router-dom";
import './Dashboard.css';
import moment from 'moment/moment';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
// import { InputAdornment, SearchIcon } from '@material-ui/icons';



function Topbar() {
    const [stickyClass, setStickyClass] = useState('');

    const navigate=useNavigate();

    // const [total]

    const [clickedIcon, setClickedIcon] = useState(false);
    const [allUnreadNotification, setallUnreadNotification] = useState('');
    const [totalUnread, setTotalUnread] = useState('');
    // console.log('hello', allUnreadNotification)
    const [render, setRender] = useState('')


    useEffect(() => {
        axios.get(`/api/all-notification-through-posts`).then(res => {
            if (res.data.status == 200) {

                setallUnreadNotification(res.data.all_unread)
                setTotalUnread(res.data.total_unread)
            }
        });
    }, [render])
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


    const top100Films = [
        { label: 'View all users', link: '/view-all-users' },
        { label: 'Admin dashboard', link: '/admin-dashboard' },
        { label: 'User configuration', link: '/user-configuration' },
        { label: 'Role Management', link: '/role-management' },
        { label: 'View All Jobs', link: '/view-all-jobs' },
        { label: 'Create Job posts', link: '/create-job-post' },
        { label: 'Job Configuration', link: '/job-configuration' },
        { label: 'User configuration', link: '/user-configuration' },
        { label: 'View Blog Article', link: '/view-blog-article' },
        { label: 'Create blog article', link: '/create-blog-artilce' },
        { label: 'Blog article configuration', link: '/blog-article-configuration' },
        { label: 'View user posts', link: '/post-type' },
        { label: 'Post configuration', link: '/post-configuration' },
        { label: 'Create event', link: '/create-event' },
        { label: 'View all events', link: '/view-all-events' },
        { label: 'Event configuration', link: '/event-configuration' },
        // { label: 'The Godfather', year: 1972 },
        // { label: 'The Godfather: Part II', year: 1974 },
        // { label: 'The Dark Knight', year: 2008 },
        // { label: '12 Angry Men', year: 1957 },
        // { label: "Schindler's List", year: 1993 },
        // { label: 'Pulp Fiction', year: 1994 },
        // {
        //     label: 'The Lord of the Rings: The Return of the King',
        //     year: 2003,
        // },
        // { label: 'The Good, the Bad and the Ugly', year: 1966 },
        // { label: 'Fight Club', year: 1999 },
        // {
        //     label: 'The Lord of the Rings: The Fellowship of the Ring',
        //     year: 2001,
        // },
        // {
        //     label: 'Star Wars: Episode V - The Empire Strikes Back',
        //     year: 1980,
        // },
        // { label: 'Forrest Gump', year: 1994 },
        // { label: 'Inception', year: 2010 },
        // {
        //     label: 'The Lord of the Rings: The Two Towers',
        //     year: 2002,
        // },
        // { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
        // { label: 'Goodfellas', year: 1990 },
        // { label: 'The Matrix', year: 1999 },
        // { label: 'Seven Samurai', year: 1954 },
        // {
        //     label: 'Star Wars: Episode IV - A New Hope',
        //     year: 1977,
        // },
        // { label: 'City of God', year: 2002 },
        // { label: 'Se7en', year: 1995 },
        // { label: 'The Silence of the Lambs', year: 1991 },
        // { label: "It's a Wonderful Life", year: 1946 },
        // { label: 'Life Is Beautiful', year: 1997 },
        // { label: 'The Usual Suspects', year: 1995 },
        // { label: 'Léon: The Professional', year: 1994 },
        // { label: 'Spirited Away', year: 2001 },
        // { label: 'Saving Private Ryan', year: 1998 },
        // { label: 'Once Upon a Time in the West', year: 1968 },
        // { label: 'American History X', year: 1998 },
        // { label: 'Interstellar', year: 2014 },
        // { label: 'Casablanca', year: 1942 },
        // { label: 'City Lights', year: 1931 },
        // { label: 'Psycho', year: 1960 },
        // { label: 'The Green Mile', year: 1999 },
        // { label: 'The Intouchables', year: 2011 },
        // { label: 'Modern Times', year: 1936 },
        // { label: 'Raiders of the Lost Ark', year: 1981 },
        // { label: 'Rear Window', year: 1954 },
        // { label: 'The Pianist', year: 2002 },
        // { label: 'The Departed', year: 2006 },
        // { label: 'Terminator 2: Judgment Day', year: 1991 },
        // { label: 'Back to the Future', year: 1985 },
        // { label: 'Whiplash', year: 2014 },
        // { label: 'Gladiator', year: 2000 },
        // { label: 'Memento', year: 2000 },
        // { label: 'The Prestige', year: 2006 },
        // { label: 'The Lion King', year: 1994 },
        // { label: 'Apocalypse Now', year: 1979 },
        // { label: 'Alien', year: 1979 },
        // { label: 'Sunset Boulevard', year: 1950 },
        // {
        //     label: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
        //     year: 1964,
        // },
        // { label: 'The Great Dictator', year: 1940 },
        // { label: 'Cinema Paradiso', year: 1988 },
        // { label: 'The Lives of Others', year: 2006 },
        // { label: 'Grave of the Fireflies', year: 1988 },
        // { label: 'Paths of Glory', year: 1957 },
        // { label: 'Django Unchained', year: 2012 },
        // { label: 'The Shining', year: 1980 },
        // { label: 'WALL·E', year: 2008 },
        // { label: 'American Beauty', year: 1999 },
        // { label: 'The Dark Knight Rises', year: 2012 },
        // { label: 'Princess Mononoke', year: 1997 },
        // { label: 'Aliens', year: 1986 },
        // { label: 'Oldboy', year: 2003 },
        // { label: 'Once Upon a Time in America', year: 1984 },
        // { label: 'Witness for the Prosecution', year: 1957 },
        // { label: 'Das Boot', year: 1981 },
        // { label: 'Citizen Kane', year: 1941 },
        // { label: 'North by Northwest', year: 1959 },
        // { label: 'Vertigo', year: 1958 },
        // {
        //     label: 'Star Wars: Episode VI - Return of the Jedi',
        //     year: 1983,
        // },
        // { label: 'Reservoir Dogs', year: 1992 },
        // { label: 'Braveheart', year: 1995 },
        // { label: 'M', year: 1931 },
        // { label: 'Requiem for a Dream', year: 2000 },
        // { label: 'Amélie', year: 2001 },
        // { label: 'A Clockwork Orange', year: 1971 },
        // { label: 'Like Stars on Earth', year: 2007 },
        // { label: 'Taxi Driver', year: 1976 },
        // { label: 'Lawrence of Arabia', year: 1962 },
        // { label: 'Double Indemnity', year: 1944 },
        // {
        //     label: 'Eternal Sunshine of the Spotless Mind',
        //     year: 2004,
        // },
        // { label: 'Amadeus', year: 1984 },
        // { label: 'To Kill a Mockingbird', year: 1962 },
        // { label: 'Toy Story 3', year: 2010 },
        // { label: 'Logan', year: 2017 },
        // { label: 'Full Metal Jacket', year: 1987 },
        // { label: 'Dangal', year: 2016 },
        // { label: 'The Sting', year: 1973 },
        // { label: '2001: A Space Odyssey', year: 1968 },
        // { label: "Singin' in the Rain", year: 1952 },
        // { label: 'Toy Story', year: 1995 },
        // { label: 'Bicycle Thieves', year: 1948 },
        // { label: 'The Kid', year: 1921 },
        // { label: 'Inglourious Basterds', year: 2009 },
        // { label: 'Snatch', year: 2000 },
        // { label: '3 Idiots', year: 2009 },
        // { label: 'Monty Python and the Holy Grail', year: 1975 },
    ];

    return (
        <>
            <div className={`topbar d-flex p-2 justify-content-between align-items-center row border-bottom border-success sticky ${stickyClass}`}>
                <div className="topbar-left col-7">
                    <h5 className="text-success mt-1 ">
                        AUST Textile Alumni Association


                    </h5>
                </div>
                <div className="topbar-right d-flex justify-content-center  align-items-center  col-5" style={{ cursor: "pointer" }}>
                    <div className="toolbar-input-div col-8">
                        <div class="input-group rounded-3 border-success ">
                            {/* <span class="input-group-text bg-white " id="basic-addon1"> <i class="fa-solid fa-magnifying-glass"></i></span> */}

                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={top100Films}

                                onChange={(event, option) => {
                                    // window.location.href = option.link;
                                    
                                    // history.push(redirect);
                                    navigate(option.link)


                                }}
                               
                                sx={{
                                    width: 300,
                                }}
                                // "& .MuiInputBase-root": {
                                //     height: 30
                                // }

                                // InputProps={{
                                //     ...params.InputProps,
                                //     endAdornment: (
                                //       <InputAdornment position="end">
                                //         <SearchIcon />
                                //       </InputAdornment>
                                //     ),
                                //   }}
                                renderInput={(params) => <TextField {...params} size="small" placeholder="Search...." />}

                            />
                            {/* <input type="text" class="form-control " placeholder="Search.." aria-label="Username" aria-describedby="basic-addon1" /> */}
                        </div>
                    </div>

                    <div className='d-flex'>

                        <div className="mx-4" style={{ fontSize: '17px', position: 'relative' }} onClick={() => setClickedIcon(!clickedIcon)}>
                            <i className="fa fa-bell text-success" />
                            <span class="badge bg-danger badge-sm px-1 py-0  " style={{ position: 'absolute' }}>{totalUnread > 0 && totalUnread}</span>
                            {
                                clickedIcon && totalUnread > 0 &&


                                <div className=' mt-3 fs-6' style={{ position: "fixed", marginLeft: "-25%", zIndex: '1200', overflowY: 'scroll' }}>
                                    <div class="alert alert-secondary bg-white shadow-sm " role="alert">

                                        <button className='d-block btn btn-light d-block w-100 text-success  ms-auto fw-700' type='button' onClick={() => {
                                            axios.get(`/api/all-read-notification-through-posts`).then(res => {
                                                if (res.data.status == 200) {

                                                    setRender(res.data)
                                                }
                                            });
                                        }
                                        }>Mark all read</button>
                                        {
                                            allUnreadNotification.map((item, i) => {
                                                return (
                                                    <>

                                                        <p className='mb-3 px-2 '>
                                                            <Link to="/view-all-events" style={{ textDecoration: 'none', color: 'black' }}>
                                                                {item.users.full_name} has posted a new event on {moment(item.created_at).format("LL")}
                                                            </Link>
                                                        </p>

                                                    </>
                                                )

                                            })
                                        }


                                        {/* 
                                        <button className='d-block btn btn-light w-100 fw-700' type='button' onClick={() => {
                                            axios.get(`/api/all-read-notification-through-posts`).then(res => {
                                                if (res.data.status == 200) {

                                                    setRender(res.data)
                                                }
                                            });
                                        }
                                        }>Mark all read</button> */}

                                    </div>

                                </div>




                            }

                            {
                                clickedIcon && totalUnread == 0 &&


                                <div className=' mt-3 fs-6' style={{ position: "fixed", marginLeft: "-10%", zIndex: '1200' }}>
                                    <div class="alert alert-danger shadow-sm py-1" role="alert">


                                        <p className='mb-3 px-2 mt-1  '>No notification available</p>


                                    </div>

                                </div>




                            }



                        </div>
                        <div className="ms-3" style={{ fontSize: '17px' }}>
                            <i class="fa-solid fa-envelope text-success"></i>

                        </div>
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