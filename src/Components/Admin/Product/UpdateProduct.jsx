import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'


import { updateProduct, getProduct } from "../../../Store/ActionCreators/ProductActionCreators"
export default function UpdateProduct() {
    let [name,setName] = useState("")
    let navigate = useNavigate()
    let dispatch = useDispatch()
    let { id } = useParams()
    let ProductStateData = useSelector((state) => state.ProductStateData)
    function getInputData(e) {
        setName(e.target.value)
    }
    async function postData(e) {
        e.preventDefault()
        let item = ProductStateData.length && ProductStateData.slice(1).find((x) => x.name === name)
        if (item)
            alert("Product Name Already Exist")
        else {
            dispatch(updateProduct({ id:id,name: name }))
            navigate("/admin/product")
        }
    }
    function getAPIData() {
        dispatch(getProduct())
        if(ProductStateData.length){
            let item = ProductStateData.slice(1).find((x)=>x.id===Number(id))
            if(item)
            setName(item.name)
        }
    }
    useEffect(() => {
        getAPIData()
    }, [ProductStateData.length])
    return (
        <>
            <div className="container-fluid my-3">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <h5 className='bg-primary text-light p-2 text-center'>Product</h5>
                        <form onSubmit={postData}>
                            <div className="mb-3">
                                <label>Name</label>
                                <input type="text" name='name' value={name} required minLength={3} maxLength={50} onChange={getInputData} className='form-control' placeholder='Name' />
                            </div>
                            <div className="mb-3">
                                <button type='button' className='btn btn-success w-50' onClick={() => window.history.back()}>Back</button>
                                <button type="submit" className='btn btn-primary w-50'>Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
