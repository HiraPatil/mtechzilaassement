import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import Cookies from 'js-cookie';

const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_KEY;

const GoogleSignIn = () => {
    const Navigate = useNavigate();
    return (
        <>
            <section className="vh-100" style={{ backgroundColor: "#508bfc" }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
                                <div className="card-body p-5 text-center">
                                    <h3 className="mb-5">Sign in</h3>
                                    
                                    
                                    <hr className="my-4" />
                                    <GoogleOAuthProvider clientId={googleClientId}>
                                        <GoogleLogin
                                            onSuccess={credentialResponse => {
                                                var decoded = jwt_decode(credentialResponse?.credential);
                                                Cookies.set('userToken', true);
                                                Navigate('/');
                                            }}
                                            onError={() => {
                                                console.log('Login Failed');
                                            }}
                                        />
                                    </GoogleOAuthProvider>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
};

export default GoogleSignIn;