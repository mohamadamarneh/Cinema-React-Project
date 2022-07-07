import React, { useState,useEffect } from 'react';
import "./editProfile.css";
import axios from 'axios';
import { AuthContext, Signupprovider } from '../Authetication/AuthContext';
import { useHistory } from "react-router-dom";



const EditProfile = () => {
    let history= useHistory();

    let userId = localStorage.getItem('id')

    const [Persons, setapi] = useState([]);

    useEffect(() => {
        fetch(`https://62c52d60a361f725127c1c74.mockapi.io/users/1`)
            .then(x => x.json())
            .then(y => setapi(y));
    }
        , [])

        const [name, setName] = useState(Persons.name);
        const [email, setEmail] = useState(Persons.email);
        const [pass, setPass] = useState(Persons.password);

        useEffect(() => {
            setName(Persons.name)
            setEmail(Persons.email);
            setPass(Persons.password);
        }, []);



    // const [phone, setPhone] = useState('');
    
    
    const [conpass, setconPass] = useState('');


    const [passmsg, setpassmsg] = useState('');
    const [emailmsg, setEmailmsg] = useState('');
    const [Namemsg, setNamemsg] = useState('');
    const [phonemsg, setPhonemsg] = useState('');


    const updateAPIData = (e) => {
        e.preventDefault();
        axios.put(`https://62c52d60a361f725127c1c74.mockapi.io/users/1`, {
            name:name ,
            email:email ,
            password:pass

        })

        history.push('/profile')
    }

    //    function twofunc(e){
    //     setPass(e.target.value);
    //     handleConfpass()
    //    }

    // console.log(Persons)

    // const handleUpdate = (e) => {
    //     e.preventDefault();
    //     if (pass !== conpass) {
    //         setpassmsg('password and confirm password are not same');
    //         if (!email === "") {
    //             setEmailmsg('not correct email')
    //         }
    //     }
// }

    // const handleUpdate =(e)=> {
    //     e.preventDefault();
    //     if(pass !== conpass){
    //     }
    // }

    return (
        <React.Fragment>
            <div className='container pt-5 mt-5 '>
                <div class="card mt-5 bg-dark">

                    <form>
                        <div class="card-body bg-dark text-white">
                            <div class="row mb-3">
                                <div class="col-sm-3 ">
                                    <h6 class="mb-0">User Name :</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    <input required type="text" class="form-control"
                                     onChange={e => setName(e.target.value) }  defaultValue={Persons.name}/>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-sm-3">
                                    <h6 class="mb-0">Email</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    <input required type="email" class="form-control"
                                     onChange={e => setEmail(e.target.value)} defaultValue={Persons.email} />
                                </div>
                            </div>

                            <div class="row mb-3">
                                <div class="col-sm-3">
                                    <h6 class="mb-0">Password</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    <input required type="password" class="form-control" 
                                    onChange={e => setconPass(e.target.value)} defaultValue={Persons.password} />
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-sm-3">
                                    <h6 class="mb-">Confirm Password</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    <input required type="password" class="form-control" 
                                    onChange={(e) => setconPass(e.target.value)} defaultValue={Persons.password} />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-3"></div>
                                <div class="col-sm-9 text-secondary">
                                    
                                <button class="btn btn-primary px-4"  onClick={updateAPIData}> Save Changes</button>
                                
                                    {/* <div class="alert alert-danger" role="alert" >
                                        {passmsg}
                                    </div> */}
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