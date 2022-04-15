import axios from "axios";
import { useFormik } from "formik";
import { React } from "react";
import { useNavigate } from 'react-router-dom';
import * as yup from "yup"

function AddContent() {

    let navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            profile: "",
            user: "",
            productName: "",
            noOfProduct: "",
            Due: "",
            status: "",
        },
        validationSchema: yup.object({
            profile: yup.string().required("Please add user profile url!"),
            user: yup.string().required("Please enter user name!"),
            productName: yup.string().required("Please enter product name"),
            noOfProduct: yup.number().min(1).max(20).required("Please enter product count!"),
            Due: yup.string().required("Please mark due!"),
            status: yup.string().required("Please mark status!")
        }),
        onSubmit: values => {
            handleSave(values)
            console.log(values)
        }
    })

    let handleSave = async (data) => {
        let addUserData = await axios.post("https://614eac00b4f6d30017b482d8.mockapi.io/productandusers", data)
        console.log(addUserData)
        navigate('/ProductAndUsers')
    }

    return <div>
        <h1>Add User</h1>
        <form onSubmit={formik.handleSubmit}>
            <div class="form-group">
                <label for="profile">Profile Pic</label>
                <input type="text" name="profile" id="profile" class="form-control" placeholder="Enter Pic url" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.profile} />
                {formik.touched.profile && formik.errors.profile ? (<div style={{ color: "red" }}>{formik.errors.profile}</div>) : null}
            </div>
            <div class="form-group">
                <label for="user">User Name</label>
                <input type="text" name="user" id="user" class="form-control" placeholder="Enter Name" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.user} />
                {formik.touched.user && formik.errors.user ? (<div style={{ color: "red" }}>{formik.errors.user}</div>) : null}
            </div>
            <div class="form-group">
                <label for="productName">Product Name</label>
                <input type="text" name="productName" id="productName" class="form-control" placeholder="Enter Product" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.productName} />
                {formik.touched.productName && formik.errors.productName ? (<div style={{ color: "red" }}>{formik.errors.productName}</div>) : null}
            </div>
            <div class="form-group">
                <label for="noOfProduct">No Of Product</label>
                <input type="number" name="noOfProduct" id="noOfProduct" class="form-control" placeholder="Enter No of Product" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.noOfProduct} />
                {formik.touched.noOfProduct && formik.errors.noOfProduct ? (<div style={{ color: "red" }}>{formik.errors.noOfProduct}</div>) : null}
            </div>
            <div class="form-group">
                <label for="Due">Due</label><br />
                <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="Due" value="Paid" id="btnpaid" onChange={formik.handleChange} defaultChecked={formik.values.gender === "Paid"} />
                    <label class="btn btn-outline-success" for="btnpaid">Paid</label>

                    <input type="radio" class="btn-check" name="Due" value="Not Paid" id="btnnotpaid" onChange={formik.handleChange} defaultChecked={formik.values.gender === "Not Paid"} />
                    <label class="btn btn-outline-danger" for="btnnotpaid">Not Paid</label>
                    {formik.touched.Due && formik.errors.Due ? (<div style={{ color: "red" }}>{formik.errors.Due}</div>) : null}
                </div>
            </div>
            <div class="form-group">
                <label for="status">Status</label><br />
                <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="status" value="Pending" id="btnradio1" onChange={formik.handleChange} defaultChecked={formik.values.gender === "Pending"} />
                    <label class="btn btn-outline-primary" for="btnradio1">Pending</label>

                    <input type="radio" class="btn-check" name="status" value="In-Progress" id="btnradio2" onChange={formik.handleChange} defaultChecked={formik.values.gender === "In-Progress"} />
                    <label class="btn btn-outline-secondary" for="btnradio2">In-Progress</label>

                    <input type="radio" class="btn-check" name="status" value="Completed" id="btnradio3" onChange={formik.handleChange} defaultChecked={formik.values.gender === "Completed"} />
                    <label class="btn btn-outline-success" for="btnradio3">Completed</label>
                    {formik.touched.status && formik.errors.status ? (<div style={{ color: "red" }}>{formik.errors.status}</div>) : null}
                </div>
            </div>

            <button type="submit" onClick={handleSave} class="btn btn-primary">Submit</button>
        </form>

    </div>;
}

export default AddContent;
