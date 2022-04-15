import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function EditProfilePic() {

    useEffect(() => {
        getPic();
    }, [])// getData will load all the data of the user before it will render 

    let navigate = useNavigate();
    let { id } = useParams();

    let [pic, setPic] = useState("")
    let [user, setUser] = useState("");
    let [productName, setProductName] = useState("");
    let [noOfProduct, setNoOfProduct] = useState("");
    let [Due, setDue] = useState("");
    let [status, setStatus] = useState("");

    let getPic = async () => {
        await fetch("https://614eac00b4f6d30017b482d8.mockapi.io/productandusers/" + id, { method: "GET" })
            .then(data => data.json())
            .then(value => {
                setUser(value.user)
                setProductName(value.productName)
                setNoOfProduct(value.noOfProduct)
                setDue(value.Due)
                setStatus(value.status)
                setPic(value.profile)
            })
    }
    let handleSave = async () => {
        let updateUserPic = await axios.put("https://614eac00b4f6d30017b482d8.mockapi.io/productandusers/" + id, {
            profile: pic,
            user,
            productName,
            noOfProduct,
            Due,
            status,
        })
        console.log(updateUserPic)
        navigate('/ProductAndUsers')
    }
    return (
        <div>
            <form>
                <div class="form-group"><br />
                    <label for="editpic">Profile Pic</label>&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="text" class="form-control" name="editpic" value={pic} onChange={(e) => setPic(e.target.value)} placeholder="Enter Pic url" /><br />
                    <img className='user-logo' src={pic} alt="profile" />
                </div>
                <button type='button' onClick={handleSave} class="btn btn-primary">Save</button>
            </form>
        </div>
    )
}
export default EditProfilePic
