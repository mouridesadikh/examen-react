import React ,{ Component } from 'react';
import Contact from './Contact';
import Profil from './Profil';
class Contacts extends Component
{
 
  constructor(props)
  {
    super(props);
    this.state = {
        contact : [],
        contacts:[
            {id: 1,nom : "cheikh diop",tel : " 77 836 44 82 ", photo:"https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png"},
            {id: 2,nom : "Ibra diop",tel : " 77 839 44 82 ", photo:"https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png"},
            {id: 3,nom : "saliou diop",tel : " 77 836 45 82 ", photo:"https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png"},
            {id: 4,nom : "makhtar diop",tel : " 77 832 44 82 ", photo:"https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png"}
        ]
    };
  }
 



   

   contactSelected = id=>{
        
    const contac = this.state.contacts.filter(a => a.id === id);
    this.setState({
        contact : contac[0]
    })
 
    
   
}
hidedd = () =>{
    this.setState({
        contact : ""
    })
    
}
    render() {
        return (
            
            <div  >
           
            {
               this.state.contact.length!=0 ?
               <Profil  contact={this.state.contact} hiden={this.hidedd}/>
              
             
             
                :
               
                this.state.contacts.map(contact => (
                    <Contact key={contact.id} contact={contact} show={this.contactSelected}  />
          
                   ))
            
            }
           
    
            </div>
        );
    }
}
export default Contacts;
