import React ,{ Component } from 'react';
class Profil extends Component
{

   
 


    render() {
        return (
         
            <div className="card">
                
                <div className="card-header">
                    <a onClick={this.props.hiden}>Retour</a>
                </div>
                <div className="card-body">
              
          <img src={this.props.contact.photo} alt="Avatar" className="avatar" width="40px" height="40px" 
                />
                <ul>
                   <li><p>{this.props.contact.nom}</p></li>
                   <li><p>{this.props.contact.tel}</p></li>
               </ul>
               </div>
            </div>
        );
    }
}
export default Profil;
