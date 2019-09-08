import React ,{ Component } from 'react';
class Contact extends Component
{

   
 


    render() {
        return (
            
            <div className="card">
               
                <div className="card-body">
              
          <img src={this.props.contact.photo} alt="Avatar" className="avatar" width="40px" height="40px" 
                 onClick={() => this.props.show(this.props.contact.id)} />
                <ul>
                   <li><p>{this.props.contact.nom}</p></li>
                   <li><p>{this.props.contact.tel}</p></li>
               </ul>
               </div>
            </div>
        );
    }
}
export default Contact;
