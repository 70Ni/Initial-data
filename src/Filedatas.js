import React from 'react';
import './Filedatas.css'

class Filedatas extends React.Component {
    constructor(props){
        super(props);
        this.myChangeHandler = this.myChangeHandler.bind(this)
        

        this.state = {
            name : '',
            username: '',
            company:'',
            industry:'',
            site:'',
            slides:'',
            numbers:''
         
        };
    }
    myChangeHandler = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        });
    };

    
    render() {
        return (
            <form>
                    <label>
                        Full Name:
                        
                        <input 
                        type='text' 
                        name='name' 
                        value={this.state.name} 
                        onChange={this.myChangeHandler} 
                        placeholder='Your Name'
                        />
                    </label>

                    <label>
                        Fiverr username:
                        
                        <input 
                        type='text' 
                        name='username' 
                        value={this.state.username} 
                        onChange={this.myChangeHandler} 
                        placeholder='(Optional)'
                        />
                    </label>

                    <label>
                        Company name:
                      
                        <input 
                        type='text' 
                        name='company' 
                        value={this.state.company} 
                        onChange={this.myChangeHandler} 
                          placeholder='Company'
                        />
                    </label>

                    <label>
                        Site address:
                        
                        <input 
                        type='text' 
                        name='url' 
                        value={this.state.site} 
                        onChange={this.myChangeHandler} 
                          placeholder='www.siteurl.com'
                        />
                  </label>

                  <label>
                        Industry
                        <input 
                        type='text' 
                        name='industry' 
                        value={this.state.industry} 
                        onChange={this.myChangeHandler} 
                          placeholder='related to...'
                        />
                  </label>

                    <label>
                        Maximum no of slides required
                        <input 
                        type='number' 
                        name='numbers' 
                        min="1"
                        max="30"
                        value={this.state.numbers} 
                        onChange={this.myChangeHandler} 
                        />
                    
                  </label>

            
          
         </form>
        )
    }

}
export default Filedatas;

