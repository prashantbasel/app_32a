import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { createProductApi, getAllProducts } from '../../../apis/Api'


const AdminDashboard = () => {

    // 1.state for all fetched products 
    const [products, setProducts] = useState([])// array 
    // 2. Call api initally (page load) - set all fetch products to state
    useEffect(() => {
        getAllProducts().then((res) => {
            // response : res.data.products (all products)
            setProducts(res.data.product)


        }).catch((error) => {
            console.log(error)
        })

    }, [])
    console.log(products)



    // use State
    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [productCategory, setProductCategory] = useState('')
    const [productDescription, setProductDescription] = useState('')

    // state for images
    const [productImage, setProductImage] = useState('')
    const [previewImage, setPreviewImage] = useState('')

    // image upload haldler 
    const handleImage = (e) => {
        const file = e.target.files[0]
        setProductImage(file)// for backend
        setPreviewImage(URL.createObjectURL(file))

    }

    // handle submit
    const handleSubmit = (e) => {

        // make a form data (txt, file)
        const formData = new FormData()
        formData.append('productName', productName)
        formData.append('productPrice', productPrice)
        formData.append('productCategory', productCategory)
        formData.append('productDescription', productDescription)
        formData.append('productImage', productImage)
        console.log(formData)
        // make a api call
        createProductApi(formData).then((res) => {
            // for success ful api 
            if (res.status === 201) {
                toast.success(res.data.message)
            }

        }).catch((error) => {
            // for error
            if (error.response) {
                if (error.response.status === 400) {
                    toast.warning(error.response.data.message)
                } else if (error.response.status === 500) {
                    toast.error(error.response.data.message)
                }
            } else {
                toast.error("Something went wrong")
            }
        })

    }


    return (
        <>
            <div className='container mt-3'>
                <div className='d-flex justify-content-between'>
                    <h3>Admin Dashboard</h3>

                    <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Add Product
                    </button>


                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Create a new product </h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form action=''>
                                        <label>Product Name</label>
                                        <input onChange={(e) => setProductName(e.target.value)} type="text" class="form-control" placeholder='Enter Product Name' />

                                        <label className='mt-2'>Product Price</label>
                                        <input onChange={(e) => setProductPrice(e.target.value)} type="number" class="form-control" placeholder='Enter Product Price' />

                                        <lable className='mt-2' >Choose category</lable>
                                        <select onChange={(e) => setProductCategory(e.target.value)} className='form-control'>
                                            <option value="plants">Plants</option>
                                            <option value="vegetables">Vegetables</option>
                                            <option value="fruits">Fruits</option>

                                        </select>

                                        <label className='mt-2'>Enter Product Description</label>
                                        <textarea onChange={(e) => setProductDescription(e.target.value)} class="form-control" rows="3"></textarea>

                                        <label className='mt-2'>Choose product image</label>
                                        <input onChange={handleImage} type="file" class="form-control" />

                                        {/* Preview image */}
                                        {
                                            previewImage && <img src={previewImage} alt="preview image" className="img-fluid rounded mt-2" />
                                        }





                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button onClick={handleSubmit} type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <table className="table mt-2">
                <thead className='table-dark'>
                    <tr>
                        <th>Product Image</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Product Category</th>
                        <th>Product Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        products.map((singleProduct) => (
                            <tr>
                                <td><img width={'40px'} height={'40px'} src={`http://localhost:5000/products/${singleProduct.productImage}`} alt="" /></td>
                                <td>{singleProduct.productName}</td>
                                <td>{singleProduct.productPrice}</td>
                                <td>{singleProduct.productCategory}</td>
                                <td>{singleProduct.productDescription}</td>

                                <td>
                                    <Link to={`/admin/update/${singleProduct._id}`} className='btn btn-primary'>Edit</Link>
                                    <button className='btn btn-danger ms-2 '>Delete</button>
                                </td>


                            </tr>
                        ))
                    }


                </tbody>
            </table>
        </>
    )
}

export default AdminDashboard


//Edit product
// Admin Dashboar (table) pro 1
// Make a route (Admin Edit product )
// fill all the related information only
// edit garan milna paryo (text, file)
// make a backend to update product 
