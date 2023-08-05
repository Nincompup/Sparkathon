import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';
import './signup.css'

function SignUp() {
  return (
    <MDBContainer fluid className="main-div">

      <div className="p-5 bg-image" style={{backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)', height: '30vh'}}></div>

      <MDBCard className='mx-auto mb-3  p-5 shadow-5 signupbox' style={{marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)'}}>
        <MDBCardBody className='p-5  text-center'>

          <h2 className="fw-bold mb-5">Sign up now</h2>

          <MDBRow>
            <MDBCol col='6'>
              <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text'/>
            </MDBCol>

            <MDBCol col='6'>
              <MDBInput wrapperClass='mb-4' label='Last name' id='form1' type='text'/>
            </MDBCol>
          </MDBRow>

          <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'/>
          <MDBBtn className='w-100 mb-1' size='md'>sign up</MDBBtn>
         <div style={{marginTop:'2rem'}}>Already have account? <MDBBtn className='w-20 mb-1' size='md'>Sign In</MDBBtn> </div>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

export default SignUp;