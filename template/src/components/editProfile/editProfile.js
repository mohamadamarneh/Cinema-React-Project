import React, { useState } from 'react';
import "./editProfile.css";
import axios from 'axios';
import {AuthContext , Signupprovider} from '../Authetication/AuthContext';



const EditProfile = () => {

    let userId=localStorage.getItem('id')


    const [Persons, setapi] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [pass, setPass] = useState('');
    const [conpass, setconPass] = useState('');


    const [passmsg, setpassmsg] = useState('');
    const [emailmsg, setEmailmsg] = useState('');
    const [Namemsg, setNamemsg] = useState('');
    const [phonemsg, setPhonemsg] = useState('');

    
    const err = [];

    //    function twofunc(e){
    //     setPass(e.target.value);

    //     handleConfpass()

    //    }

    const handleUpdate = (e) => {
        e.preventDefault();
        if (pass !== conpass) {
            setpassmsg('password and confirm password are not same');
            if (!email === "") {
                setEmailmsg('not correct email')



            }
            if (phone === "") {
                setPhonemsg("not correct nmber ")
            }

        }



    }


    // const handleUpdate =(e)=> {
    //     e.preventDefault();
    //     if(pass !== conpass){



    //     }



    // }


    return (
        <React.Fragment>
            <div className='container pt-5 mt-5 '>
                <div class="card mt-5">

                    <form>
                        <div class="card-body">
                            <div class="row mb-3">
                                <div class="col-sm-3 ">
                                    <h6 class="mb-1">User Name</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    <input required type="text" class="form-control" onChange={e => setName(e.target.value)} />
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-sm-3">
                                    <h6 class="mb-1">Email</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    <input required type="email" class="form-control" onChange={e => setEmail(e.target.value)} />
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-sm-3">
                                    <h6 class="mb-1">Phone</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    <input required type="text" class="form-control" onChange={e => setPhone(e.target.value)} />
                                </div>
                            </div>

                            <div class="row mb-3">
                                <div class="col-sm-3">
                                    <h6 class="mb-1">Password</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    <input required type="password" class="form-control" onChange={e => setconPass(e.target.value)} />
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-sm-3">
                                    <h6 class="mb-1">Confirm Password</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    <input required type="password" class="form-control" onChange={e => setconPass(e.target.value)} />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-3"></div>
                                <div class="col-sm-9 text-secondary">
                                    <button class="btn btn-primary px-4" onClick={handleUpdate}> Save Changes</button>
                                    
                                    <div class="alert alert-danger" role="alert" >
                                        {passmsg}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

            </div>

        </React.Fragment>
    );
}

export default EditProfile;