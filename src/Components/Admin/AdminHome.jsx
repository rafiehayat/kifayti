import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'

export default function AdminHome() {
    let [user,setUser] = useState({})
    async function getAPIData(){
        let response = await fetch("/user/"+localStorage.getItem("userid"),{
            method:"get",
            headers:{
                "content-type":"application/json"
            }
        })
        response = await response.json()
        setUser(response)
    }
    useEffect(()=>{
        getAPIData()
    },[])
    return (
        <>
        {/* <!-- Page Header Start --> */}
      <div className="container-fluid page-header mb-5 p-0" style={{ backgroundImage: "url(img/carousel-bg-1.jpg)" }}>
        <div className="container-fluid page-header-inner py-5">
          <div className="container text-center">
            <h1 className="display-3 text-white mb-3 animated slideInDown">Admin</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center text-uppercase">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item text-white active" aria-current="page">Admin</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      {/* <!-- Page Header End --> */}
            <div className="container-fluid my-3">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <h5 className='bg-primary text-light p-2 text-center'>Admin</h5>
                        <div className="row">
                            <div className="col-md-6">
                            {
                    user.pic?
                    <img src={`/products/${user.pic}`} height="370px" width="100%" alt="" />:
                    <img src={`/img/No-img.png`} height="370px" width="100%" alt="" />

                }
                            </div>
                            <div className="col-md-6">
                                <table className='table table-bordered'>
                                    <tbody>
                                        <tr>
                                            <th>Name</th>
                                            <td>{user.name}</td>
                                        </tr>
                                        <tr>
                                            <th>UserName</th>
                                            <td>{user.username}</td>
                                        </tr>
                                        <tr>
                                            <th>Email</th>
                                            <td>{user.email}</td>
                                        </tr>
                                        <tr>
                                            <th>Phone</th>
                                            <td>{user.phone}</td>
                                        </tr>
                                        <tr>
                                            <th>Address</th>
                                            <td>{user.address}</td>
                                        </tr>
                                        <tr>
                                            <th>PinCode</th>
                                            <td>{user.pin}</td>
                                        </tr>
                                        <tr>
                                            <th>City</th>
                                            <td>{user.city}</td>
                                        </tr>
                                        <tr>
                                            <th>State</th>
                                            <td>{user.state}</td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2}><Link to="/update-profile" className='btn btn-primary w-100'>Update Profile</Link></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
