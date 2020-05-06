import React from 'react';
import Layout from '../component/Layout'

const Login = () => {
    const signinForm = () => (
        <form>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>
    
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-block"
          >
          </button>
          <p className="forgot-password text-right">
            Already registered <a href="/done">sign in?</a>
          </p>
        </form>
      );
    return (
      <Layout>
        <div className="container justify-content-center align-items-center w-50">
           <h1 className="p-5 text-center"> Employee Signin </h1>
        {signinForm()}
      </div>
    </Layout>
    )
}

export default Login;
