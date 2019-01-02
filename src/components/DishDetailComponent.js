import React, { Component } from 'react';
import { Card, CardImg ,CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component {

    render() {
      var {dish}=this.props
      var comments=null;
    
      if (dish != null){
       comments = this.props.dish.comments.map((comm) => {
        return (
          <div key={comm.id}>
            <p>{comm.comment}</p>
            <p>--{comm.author} , {comm.date}</p>  
            </div>
        );
    });}


      if (dish != null)
        return (
            <div className="row">
           <div  key={dish.id} className="col-12 col-md-5 m-1">
                <Card >
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardBody>
                      <CardText>{dish.name}</CardText>
                      <CardText>{dish.description}</CardText>

                  </CardBody>
                </Card>
              </div>
              
                    <div className="col-12 col-md-5 m-1">
                       <h4> <b>Comments</b></h4>
                        {comments}
                    </div>
           
                    </div>
        );
        else
        return(
            <div></div>
        );
    }
}

export default DishDetail;
