// import React, { useEffect, useState } from 'react'
// import Sidebar from '../Sidebar'
// import { Link } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'

// import { deleteMaincategory, getMaincategory } from "../../../Store/ActionCreators/MaincategoryActionCreators"
// export default function Maincategory() {
//     let [data,setData] = useState([])
//     let dispatch = useDispatch()
//     let MaincategoryStateData = useSelector((state) => state.MaincategoryStateData)
//     function deleteItem(id){
//         if(window.confirm("Are You Sure!!! You Want to Delete tha Item! Please Cofirm : ")){
//            dispatch(deleteMaincategory({id:id})) 
//            getAPIData()
//         }
//     }
//     function getAPIData() {
//         dispatch(getMaincategory())
//         if(MaincategoryStateData.length){
//             setData(MaincategoryStateData.slice(1).reverse())
//         }
//     }
//     useEffect(() => {
//         getAPIData()
//     }, [MaincategoryStateData.length])
//     return (
//         <>
//             <div className="container-fluid my-3">
//                 <div className="row">
//                     <div className="col-md-3">
//                         <Sidebar />
//                     </div>
//                     <div className="col-md-9">
//                         <h5 className='bg-primary text-light p-2 text-center'>Maincategory <Link to="/admin/maincategory/create"><i className='fa fa-plus text-light float-end'></i></Link></h5>
//                         <div className="table-responsive">
//                             <table className='table table-bordered'>
//                                 <thead>
//                                     <tr>
//                                         <th>Id</th>
//                                         <th>Name</th>
//                                         <th></th>
//                                         <th></th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {
//                                        data.map((item, index) => {
//                                             return <tr key={index}>
//                                                 <td>{item.id}</td>
//                                                 <td>{item.name}</td>
//                                                 <td><Link to={`/admin/maincategory/update/${item.id}`}><i className='fa fa-edit text-success'></i></Link></td>
//                                                 <td><button className='btn' onClick={()=>deleteItem(item.id)}><i className='fa fa-trash text-danger'></i></button></td>
//                                             </tr>
//                                         })
//                                     }
//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// import React from 'react'
// import Sidebar from '../Sidebar'
// import { Link } from 'react-router-dom'

// export default function Maincategory() {
//     return (
//         <>
//             <div className="container-fluid my-3">
//                 <div className="row">
//                     <div className="col-md-3">
//                         <Sidebar />
//                     </div>
//                     <div className="col-md-9">
//                         <h5 className='bg-primary text-light p-2 text-center'>Admin</h5>
//                         <div className="row">
//                             <div className="col-md-6">
//                                 <img src="/img/team-3.jpg" alt="" height="325px" width="100%" />
//                             </div>
//                             <div className="col-md-6">
//                                 <table className='table table-bordered'>
//                                     <tbody>
//                                         <tr>
//                                             <th>Name</th>
//                                             <td>Rafie Hayat</td>
//                                         </tr>
//                                         <tr>
//                                             <th>UserName</th>
//                                             <td>Hayat</td>
//                                         </tr>
//                                         <tr>
//                                             <th>Email</th>
//                                             <td>rafiehayat5@gmail.com</td>
//                                         </tr>
//                                         <tr>
//                                             <th>Phone</th>
//                                             <td>7979973557</td>
//                                         </tr>
//                                         <tr>
//                                             <td colSpan={2}><Link to="/update-profile" className='btn btn-primary w-100'>Update Profile</Link></td>
//                                         </tr>
//                                     </tbody>
//                                 </table>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

import React, { useEffect } from 'react'
import Sidebar from '../Sidebar'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getMaincategory } from '../../../Store/ActionCreators/MaincategoryActionCreators'

export default function Maincategory() {
  let dispatch = useDispatch()
  function getAPIData() {
    dispatch(getMaincategory())
    let MaincategoryStateData = useSelector((state) => state.MaincategoryStateData)
    // if(MaincategoryStateData.length){
    //     setData(MaincategoryStateData.slice(1).reverse())
    // }
  }
  useEffect(() => {
    getAPIData()
  }, [MaincategoryStateData.length])
  return (
    <>
      <div className="container-fluid my-3">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <h5 className='bg-primary text-light p-2 text-center'>Maincategory <Link to="/admin/maincategory/create"><i className='fa fa-plus text-light float-end'></i></Link></h5>
            <table className='table table-bordered'>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  MaincategoryStateData.length && MaincategoryStateData.slice(1).reverse().map((item, index) => {
                    return <tr key={index}
                    >
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td><Link to={`/admin/maincategory/update/${item.id}`}><i className='fa fa-edit text-success'></i></Link></td>
                      {/* <td><button className='btn' onClick={() => deleteItem(item.id)}><i className='fa fa-trash text-danger'></i></button></td> */}
                    </tr>
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
