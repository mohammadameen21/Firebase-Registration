import React, { Component } from "react";


export default class Details extends Component {


    constructor(props) {
        super();
        this.state = {

        }
    }


    render() {

        return (


            <div className='col-8 offset-2 mt-2 ' style={{ background: "grey", borderRadius: "10px" }}>

                <form onSubmit={this.props.submit}>

                    <div className="p-4">

                        <div className='text-start h4'>
                            <label htmlFor="name" className='text-left  text-end text-light'>What are you currently doing?</label>
                        </div>

                        <div className="h4 text-start">

                            <input 
                            type="radio" 
                            id="studying" 
                            className="m-2" 
                            style={{ width: "20px", height: "20px" }} 
                            value="Studying"
                            name="q1"/>
                            <label htmlFor="studying">Studying</label>
            
                            <input 
                            type="radio" 
                            id="teaching"
                            className="m-2" 
                            value="Teaching"
                            style={{ width: "20px", height: "20px" }} 
                            name="q1"/>
                            <label htmlFor="teaching">Teaching</label>

                            
                            <input 
                            type="radio" 
                            className="m-2" 
                            id="programming"
                            value="Programming"
                            style={{ width: "20px", height: "20px" }} 
                            name="q1" />
                            <label htmlFor="programming">Programmer</label>

                            <input 
                            type="radio" 
                            className="m-2" 
                            id="other"
                            style={{ width: "20px", height: "20px" }} 
                            value="Other"
                            name="q1"/>
                            <label htmlFor="other">Other</label>
                            

                        </div>

                        <input type="text" className="form-control mt-3" name="other" placeholder="Type here if not listed above"  />

                        <br />


                        <div className="text-start h4 ">

                            <h3 className="text-light">Please rate our course!</h3>

                            <input 
                            type="radio" 
                            className="m-2" 
                            id="Best" 
                            style={{ width: "20px", height: "20px" }} 
                            name="q2" 
                            value="Best"
                            />
                            <label htmlFor="Best">Best</label>

                            
                            <input 
                            type="radio" 
                            className="m-2" 
                            id="Average" 
                            style={{ width: "20px", height: "20px" }} name="q2" 
                            value="Average"
                            />
                            <label htmlFor="Average">Average</label>


                            <input 
                            type="radio" 
                            className="m-2" 
                            style={{ width: "20px", height: "20px" }} 
                            name="q2" 
                            id="Poor"
                            value="Poor"
                            />
                            <label htmlFor="Poor">Poor</label>


                        </div>


                        <div className="text-start h4">

                            <h3 className="text-light mb-2">Write your review here!</h3>

                            <textarea className="form-control "
                            rows={1} placeholder="Leave a comment here" name="q3" style={{ height: "100px" }}></textarea>


                        </div>

                        <div className="text-start">

                            <button type="submit" className='btn btn-success h1 p-3 mt-2' ><span className='text-start h4'>Save</span></button>

                            <center>

                            <span className="badge rounded-pill fs-6 disable">1</span>
                            <span className="badge rounded-pill bg-primary  fs-5">2</span>

                            </center>
                            

                        </div>


                    </div>


                </form>



            </div>
        )
    }

}