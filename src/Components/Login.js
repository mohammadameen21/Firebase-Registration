import React, { Component } from 'react'

export default class Login extends Component {

  constructor(props) {
    super();

    this.state = {

    }
  }


  render() {
    return (
      <div className='col-8 offset-2 mt-5' style={{ background: "grey", borderRadius: "10px" }}>

        <form onSubmit={this.props.submit}>

          <div className="p-4">
            <div className='text-start'>
              <label htmlFor="name" className='text-left h1 text-end text-light'>Name</label>
            </div>
            <input type="text" className="form-control" name="name" placeholder="Enter Name" required />

            <br />

            <div className='text-start'>
              <label htmlFor="email" className='h1 text-light'>Email</label>
            </div>
            <input type="text" className="form-control" name="email" placeholder="Enter Email" required />

            <br />

            <div className="text-start">

              <button type='submit' className='btn btn-success h1 p-3 mt-2' ><span className='text-start h4'>Next</span></button>

            </div>


            <center>

              <span className="badge rounded-pill bg-primary fs-5">1</span>
              <span className="badge rounded-pill  disable fs-6">2</span>

            </center>

          </div>



        </form>

      </div>
    )
  }
}
