import React from 'react';


class Landing extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      	
 <div className="row" id="landingCard">
    <div className="col col-lg-12"><br/><br/><br/><br/>

         <h2 class="h1-responsive">Under Construction</h2>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="/login" type="button" class="btn btn-outline-info">Login</a>
        <a href="/register" type="button" class="btn btn-outline-success">Signup</a>
    </div>
</div>

      </div>
    );
  }
}


export default Landing;