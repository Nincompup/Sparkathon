import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput,
}
from 'mdb-react-ui-kit';
import './signin.css'

function SignIn() {
  return (
    <MDBContainer fluid className="main-div">

      <div className="p-5 bg-image" style={{backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)', height: '30vh'}}></div>

      <MDBCard className='mx-auto mb-3  p-5 shadow-5 signupbox' style={{marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)'}}>
        <MDBCardBody className='p-5  text-center'>

          <h2 className="fw-bold mb-5">Sign In</h2>

          <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'/>
          <MDBBtn className='w-100 mb-1' size='md'>sign in</MDBBtn>
         <div style={{marginTop:'2rem'}}>Don't have account? <btn className=' btn btn-secondary mx-1 w-20 mb-1' size='md'>Sign Up</btn> </div>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

export default SignIn;