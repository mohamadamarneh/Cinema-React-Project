import React, { useState, useEffect } from 'react';
import "./Profile.css";
import axios from 'axios';



const Profile = () => {
    const [Persons, setapi] = useState([]);
    const [movies, setMovies] = useState([{"user_id":41051,"time":"WZP%]Q!#Wa","day":"?2x2V,uX#S","num_seats":98636,"price":32117.86,"id":"1"},{"user_id":47094,"time":"%9s,HQLw|!","day":"vfKS0,IQ+L","num_seats":14180,"price":26442.63,"id":"2"},{"user_id":1,"time":"15:30 - 17:00","day":"Monday","num_seats":"2","price":0,"id":"3"},{"user_id":1,"time":"15:30 - 17:00","day":"Monday","num_seats":"3","price":15,"id":"4"},{"user_id":1,"time":"19:00 - 21:00","day":"Friday","num_seats":"3","price":15,"id":"5"},{"user_id":1,"time":"","day":"","num_seats":0,"price":0,"id":"6"},{"user_id":1,"time":"15:30 - 17:00","day":"Sunday","num_seats":"1","price":5,"id":"7"}]);

    useEffect(() => {
        fetch(`https://62baba8b573ca8f83289f6c8.mockapi.io/reservations?user_id=1`)
            .then(x => x.json())
            .then(y => setapi(y));
    }, [] )


    // useEffect(() => {
    //     fetch(`https://62c52d60a361f725127c1c74.mockapi.io/users/1`)
    //         .then(x => x.json())
    //         .then(y => setapi(y));
    // }
    //     , [])


    console.log(movies)
    console.log(Persons)


    return (
        <React.Fragment>
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
            <div className='prof'>
                <div className="container bootdey d-flex flex-column container-p-y pt-5 mt-5"  >

                    <div>
                        <div className="media   py-3 mb-3">
                            <img src="user.png" alt="User Photo" className="d-block ui-w-100 rounded-circle" />

                        </div>
                        <div className="media   py-3 mb-3">
                            {/* <h4 className="font-weight-bold mb-0 text-white">John Doe<span className="text-white font-weight-normal">@johndoe</span></h4> */}
                            <h4 className="font-weight-bold mb-0 text-white">{Persons.name}</h4>
                            <div className="text-muted mb-2"></div>

                        </div>
                        <div className="media   py-3 mb-3">
                            <a path='/edit' className="btn btn-primary btn-sm">Edit Profile</a>&nbsp;
                            <a className="btn btn-danger btn-sm">log out</a>&nbsp;
                        </div>

                    </div>




                    <div className='row ' >

                        <div className='col pr-5'>
                            <div className="card mb-4 ">
                                <div className="card-body">
                                    <table className="table user-view-table m-0">
                                        <tbody>
                                            <tr>
                                                <td>User Name :</td>
                                                <td> {Persons.name} </td>
                                            </tr>
                                            <tr>
                                                <td>E-mail :</td>
                                                <td> {Persons.email} </td>
                                            </tr>
                                            <tr>
                                                <td>Phone :</td>
                                                <td> {Persons.password} </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className='col col-7'>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table card-table m-0">
                                            <tbody>
                                                <tr>
                                                    <th>Movies</th>
                                                    <th>day </th>
                                                    <th>time</th>
                                                    <th>Create</th>

                                                </tr>
                                                <tr>
                                                    <td>Harry potter</td>
                                                    <td><span className="fa fa-check text-primary"></span></td>
                                                    <td><span className="fa fa-times text-light"></span>axxa</td>
                                                    <td><span className="fa fa-times text-light"></span>aa</td>

                                                </tr>



                                           { movies.map(a=>

                                           <tr>
                                                <td>{a.id}</td>
                                                <td>{a.day}</td>
                                                <td>{a.time}</td>
                                                <td>{a.price}</td>

                                            </tr>
                                            
                                            )}

                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <hr className="border-light m-0" />


                    </div>

                </div>

            </div>
        </React.Fragment >
    );
}

export default Profile;