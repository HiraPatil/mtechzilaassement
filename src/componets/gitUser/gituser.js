import React, { useState, useEffect } from 'react'
import axios from 'axios';
import WithAuth from '../auth/withAuth';

const Gituser = () => {

    const [formData, setFormData] = useState({
        userName: '',
    })

    const [userData, setUserData] = useState([]);


    const handleOnchange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = () => {
        if (formData?.userName) {
            axios.get(`https://api.github.com/users/${formData?.userName}`)
                .then(response => {
                    setUserData(response.data);
                    console.log(userData)
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        } else {
            setUserData([]);
        }

    }

    return (
        <div>
            <section style={{ backgroundColor: "#eee" }}>
                <div className="container py-5">
                    <div className="row">
                        <div className="col">
                            <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
                                <div className=''>
                                    <label htmlFor='userName' style={{ fontWeight: 'bold', display: 'inline-block', marginRight: '5px' }}>
                                        User Name :
                                    </label>
                                    <input
                                        type='text'
                                        name='userName'
                                        placeholder="Enter UserName"
                                        onChange={(e) => {
                                            handleOnchange(e);
                                        }}
                                        value={formData?.userName}
                                        style={{ display: 'inline-block' }}
                                    />
                                    <div> <button type='submit' className=' ml-3 btn btn-primary' onClick={() => {
                                        handleSubmit();
                                    }}>Sumbit</button></div>

                                </div>
                            </nav>
                        </div>
                    </div>
                    {userData.login ? <div className="row">
                        <div className="col-lg-4">
                            <div className="card mb-4">
                                <div className="card-body text-center">
                                    <img
                                        src={`${userData?.avatar_url}`}
                                        alt="avatar"
                                        className="rounded-circle img-fluid"
                                        style={{ width: 150 }}
                                    />
                                    <h5 className="my-3">{userData?.login}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Full Name</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{userData?.name ? userData?.name : userData?.login}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">No of Public Repo</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{userData?.public_repos}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">No. of public gists</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{userData?.public_gists}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Profile created at</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{userData?.created_at
                                            }</p>
                                        </div>
                                    </div>
                                    <hr />
                                    
                                </div>
                            </div>
                            
                        </div>
                    </div> : <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4 text-center">User Not Found</nav>}

                </div>
            </section>

        </div>
    )
}

export default WithAuth(Gituser);
