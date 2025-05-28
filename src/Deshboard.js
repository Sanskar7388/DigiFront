import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
import userPhoto from "./user.png"
import me from "./menu-bar.png"
import * as XLSX from 'xlsx';
import axios from 'axios';

const Dashboard = () => {
    const api = process.env.REACT_APP_API
    const [devices, setDevices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [results, setResults] = useState([]);
    const [divname,setDivname]=useState("");
    const navigate = useNavigate();
    const [inputValues, setInputValues] = useState({});
    const [polVal, setPolval] = useState("")
    const [purity, setPurity] = useState("")
    const [slidingWind, setSlide] = useState("slidingWindow12");

    const toggleSlide = () => {
        setSlide((prevState) =>
            prevState === "slidingWindow12" ? " slidingWindow12 slidingWindow13" : "slidingWindow12"
        );
    };
    const add = () => {
        navigate('/addValue');

    }
    const handleLogout = () => {
        axios.post(`${api}/logout`, {}, { withCredentials: true }) // Endpoint to clear the cookie
            .then(() => {
                // Clear any client-side storage or state
                localStorage.removeItem('userName');  // Clear stored user information
                alert("Logout successful");

                // Redirect to login page
                navigate('/');
            })
            .catch(err => {
                console.error("Error logging out:", err);
                alert("Logout failed. Please try again.");
            });
    };
    useEffect(() => {
        const fetchDevices = async () => {
            try {
                const userId = localStorage.getItem('userName');

                if (!userId) {
                    setError("User ID not found. Please log in.");
                    setLoading(false);
                    return;
                }

                const response = await fetch(`${api}/api/user/devices`, {
                    credentials: 'include'
                });

                const data = await response.json();

                if (response.ok) {
                    setDevices(data);
                } else {
                    setError(data.message || "Failed to fetch devices");
                }
            } catch (err) {
                setError("Something went wrong. Please try again.");
            }
            setLoading(false);
        };

        fetchDevices();
    }, []);

    const handleDownload = async () => {
        try {
            const response = await fetch(`https://nextjs-p7c5pent.b4a.run/api/tests/${divname}`);
            const data = await response.json();
            console.log(data.data);

            // Use a new variable name to store `data.data`
            const formattedData = Array.isArray(data.data) ? data.data : [data.data];

            // Convert JSON data to a worksheet
            const worksheet = XLSX.utils.json_to_sheet(formattedData);

            // Create a new workbook and add the worksheet
            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

            // Generate Excel file and trigger download
            XLSX.writeFile(workbook, 'data.xlsx');
        } catch (error) {
            console.error("Error downloading file:", error);
        }
    };


    // const handleLogout = () => {
    //     localStorage.removeItem('userId');
    //     navigate('/');
    // };
    // const handleInputChange = (e, index) => {
    //     console.log(index)
    //     setTimeout(() => {
    //         if (index === 0) {
    //             const value = e.target.value;
    //       setPolval(17.68) ;   // ................................................Pol Val ........................................................................
    //       setPurity(92.1);  // .............................................Purity...............................................................................
    //            // Update state only for the first input
    //         }
    //       }, 2000);
    //     if (index === 0) {

    //        // Update state for first input
    //     }
    //   };

    async function addDeviceSpecs(pa) {
        console.log(pa)
        setDivname(pa)
        const userId = localStorage.getItem('userId');
        const response = await fetch(`https://nextjs-p7c5pent.b4a.run/api/tests/${pa}`);
        const data = await response.json();
        // console.log(data)

        if (response.ok) {
            console.log(results)
            setResults(data.data

            );
            
            // } else {
            //     setError(data.message || "Failed to fetch devices");
        }


    }
    const handleAddDevice = () => {
        navigate('/add-device'); // Navigate to add device page
    };

    if (loading) {
        return <p>Loading devices...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (<>
        <div className='desh_Outer'>
            <div className={`left_desh2 ${slidingWind ? slidingWind : ''}`}>
                <div className='left_desh'>
                    {/* <div><h2 style={{ margin: "0", padding: "0", color: "White" }}>DigiSugar</h2></div> */}
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "100%", alignItems: "center" }}>
                        <img src={userPhoto} style={{ width: "100px", height: "100px", borderRadius: "100%" }} />
                        <div><p style={{ textAlign: 'center', color: "white" }}>
                            {localStorage.getItem('userName') && localStorage.getItem('userName').length < 12
                                ? localStorage.getItem('userName')
                                : localStorage.getItem('userName')
                                    ? localStorage.getItem('userName').substring(0, 12) + "...."
                                    : null}
                        </p>
                        </div>

                    </div>

                </div>
                <div className='desh_leftContaint'>
                    <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <button onClick={handleAddDevice} className="add-device-button">Add Device</button>
                        {/* <button onClick={handleAddDevice} className="add-device-button">Remove Device</button> */}</div>
                    <div className='listofDevicesName'>List of Devices:</div>
                    <div className='listofdevice'>

                        {devices.map((device) => (
                            <div key={device.name} onClick={(pa) => {

                                addDeviceSpecs(device.deviceName)
                            }
                            } className='device_list_effect' >
                                {/* <td>{device.deviceName}</td>
                                    <td>{device.deviceType}</td> */}
                                <div style={{ padding: "3px 6px", color: "black" }}>{device.deviceName}</div>

                            </div>

                        ))}

                    </div>
                </div>

                <div className="logout-buttonD">
                    <button onClick={handleLogout} className="logout-button">Logout</button>
                </div>
            </div>
            <div className='backimage' style={{ marginLeft: "10px" }}>

                <div className='dashkeuper'>

                    {/* Add Device button */}
                    <div className="dashboard-container" >
                        <div className='namePadding' onClick={toggleSlide}><h2 style={{ margin: "0" }}>{"Hey! " + localStorage.getItem('userName')}</h2>

                        </div>
                        <div className='namePadding2'>
                            <img
                                style={{ width: "30px", height: "30px" }}
                                src={me}
                                onClick={toggleSlide}
                                alt="Menu"
                            />
                        </div>
                        <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}><h3 style={{ margin: "0" }}>Here are the recent results :</h3></div>
                        {devices.length > 0 ? (



                            <div className="container" >

                                <div className='lets_Fixe_table_col'>
                                    <div className='container_Sticky_Box'>Date</div>
                                    <div className='container_Sticky_Box'>Optical Resolution</div>
                                    <div className='container_Sticky_Box'>ISS</div>
                                    <div className='container_Sticky_Box'>Concentration</div>
                                    <div className='container_Sticky_Box'>Brix</div>
                                    <div className='container_Sticky_Box'>Pol Percent</div>
                                    <div className='container_Sticky_Box'> Purity </div>
                                </div>

                                <div className="innercontainer" style={{ display: "flex" }}>
  {results && results.length > 0 ? (
    results.map((data) => (
      <div key={data.Test_id} style={{ display: "flex", flexDirection: "column" }}>
        <div className='container_Sticky_Box11'>{data.Date_Time}</div>
        <div className='container_Sticky_Box1'>{data.OR}</div>
        <div className='container_Sticky_Box1'>{data.ISS}</div>
        <div className='container_Sticky_Box1'>{data.Concentration}</div>
        <div className='container_Sticky_Box1'>{data.Brix}</div>
        <div className='container_Sticky_Box1'>{data.Pol}</div>
        <div className='container_Sticky_Box1'>{data.Purity}</div>
      </div>
    ))
  ) : (
    <p>No data available</p> // Optional fallback UI
  )}
</div>



                            </div>




                        ) : (
                            <p>No devices found for this user.</p>
                        )}
                        <div style={{ display: "flex", width: "100%", justifyContent: "space-around", }}>
                            <div className='' onClick={add}></div>
                            <div className='makeItSticky' onClick={handleDownload}>Download All Test Results</div>
                        </div>


                    </div>

                </div>

            </div>
        </div>

    </>
    );
};

export default Dashboard;
