import React, { Component } from 'react';
// import Button from 'react-bootstrap'
import { confirmAlert } from 'react-confirm-alert'; // Import 
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import ImageUploader from 'react-images-upload';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import {CommonGet, CommonPost} from "../../config";



class Login extends Component {

     
   state={

            id:0,
            isModalOpen:false,
            categoryAnswer1:"",
            firstname:"",
            lastname:"",
            email:"",
            password:"",
            cfpassword:"",
            userList:[],

            surveyList:[],
            pictures: [] ,

            
            isLoaded : false,

}

constructor(props) {
    super(props);
      
    }

 componentWillMount(){

  // let res =  axios.get('http://localhost:5000/users');
  //   console.log("d"+res);
  //  let data =res.data;
  // // console.log("GG"+data);

  // axios.get('http://localhost:5000/users')
  // .then((response) => {
  //   console.log(response.data);
  //   console.log(response.status);
  //   console.log(response.statusText);
  //   console.log(response.headers);
  //   console.log(response.config);
  // });


 }   
componentWillUpdate() {


};
  


handleOnChange = (event) => {
    const state = this.state
    state[event.target.name] = event.target.value;
    this.setState(state);

}

handleOnClick = () =>{

  const user = {

    username : this.state.email,

  }
  // axios.post('http://localhost:5000/users/add',user).then(resp => {

  //   console.log(resp.data);
//});
CommonPost('users' ,user)
.then(res => res.json())
.then(json => {
    this.setState({
        isLoaded: true
    });
    this.componentDidMount();
});


}

render() {

    const myStyle = {
        width: "400px",
     };

    return (
       
 <>
        <h1> LOGIN </h1> <br/>
        <div class="d-flex justify-content-center">
        <Form style={myStyle}>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" placeholder="Email Address" name="email" value={this.state.email} onChange={this.handleOnChange} required/>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleOnChange} required/>
        </Form.Group>

        </Form>
        </div>

        <br/>
        <a href='/SignUp'> Not a member? Join Us </a>
        <br/> <br/>

        <Button variant="primary" type="submit" onClick = {this.handleOnClick}>
           LOGIN
        </Button>
 </>
 );
 }
 }

 export default Login;