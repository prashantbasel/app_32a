import React from 'react'

const AdminDashboard = () => {
    return (
        <>
            <div className='container mt-3'>
                <div className='d-flex justify-content-between'>
                    <h3>Admin Dashboard</h3>
                    <button className='btn btn-danger'>Add product</button>

                </div>
            </div>
            <table className="table">
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
                    <tr>
                        <td><img width={'10%'} src="https://th.bing.com/th/id/OIP.qcitXgHQJzAvKHvBND6ybAAAAA?w=247&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" /></td>
                        <td>flower</td>
                        <td>200</td>
                        <td>indoor</td>
                        <td>beautiful flower</td>

                        <td>
                            <button className='btn btn-danger'>Edit</button>
                            <button className='btn btn-danger ms-2 '>Delete</button>
                        </td>


                    </tr>


                </tbody>
            </table>
        </>
    )
}

export default AdminDashboard
