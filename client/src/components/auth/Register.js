import React from 'react';
import axios from 'axios'
import classnames from 'classnames'


class Register extends React.Component {
  constructor() {
    super()
    this.state = {
        name:'',
        email:'',
        password:'',
        password2:'',
        errors:{}

    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)


  }

   onChange(e){
    this.setState({[e.target.name]: e.target.value})
   }

  onSubmit(e){
    e.preventDefault();

    const newUser = {
        name : this.state.name,
        email:this.state.email,
        password:this.state.password,
        password2:this.state.password2
    }

    axios.post("/api/users/register",newUser)
    .then(function (response){console.log(response.data)})
    .catch(err => this.setState({errors:err.response.data}))
    // .catch(err => this.setState({errors:err.response.data}))

   
  }


  render() {

  const {errors} = this.state;


    return (
      <div className="container">
    
 


      <div className="card">
      
<form className="text-center border border-light p-5" onSubmit={this.onSubmit}>

    <p className="h4 mb-4">Sign in</p>


    <input type="text" id="name" className={classnames('form-control mb-4',{'is-invalid': errors.name})} 
    placeholder="name" 
    name="name" 
    value = {this.state.name}
    onChange={this.onChange}
    />
    {errors.name && (<div className = "invalid-feedback">{errors.name}</div>)}

   
    <input type="email" id="defaultLoginFormEmail" className={classnames('form-control mb-4',{'is-invalid': errors.email})}
     placeholder="E-mail"
     name="email"
     value = {this.state.email}
     onChange={this.onChange}
    />
    {errors.email && (<div className = "invalid-feedback">{errors.email}</div>)}


    <input type="password" id="defaultLoginFormPassword" className={classnames('form-control mb-4',{'is-invalid': errors.password})}
     placeholder="Password"
     name="password"
     value = {this.state.password}
     onChange={this.onChange}
    />
    {errors.password && (<div className = "invalid-feedback">{errors.password}</div>)}

    <input type="password" id="defaultLoginFormPassword" className={classnames('form-control mb-4',{'is-invalid': errors.password2})}
     placeholder="Confirm Password"
     name="password2"
     value = {this.state.password2}
     onChange={this.onChange}
    />
    {errors.password2 && (<div className = "invalid-feedback">{errors.password2}</div>)}

    <div className="d-flex justify-content-around">
        <div>
         
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="defaultLoginFormRemember"/>
                <label className="custom-control-label" for="defaultLoginFormRemember">Remember me</label>
            </div>
        </div>
        <div>
        
            <a href="">Forgot password?</a>
        </div>
    </div>

  
    <button className="btn btn-success btn-block my-4" type="submit">Register</button>

    
    <p>Not a member?
        <a href="">Register</a>
    </p>



</form>
  </div>

      </div>
    );
  }
}

export default Register;