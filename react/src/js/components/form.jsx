 import React from 'react'

import axios from 'axios'

import {connect} from 'react-redux'

import AddUser from '../actions/actions'

@connect((store)=>{
    return{
        users: store.users
    }
})
export class App extends React.Component{
    

    constructor(props) {
        super(props);
        this.state = {
            Countries: [],
            name: "",
            surname: "",
            country: "",
            birthday: "",
            menssageName: "",
            menssageSurname: "",
            menssageCountry: "",
            menssageDay: "",
            menssageMonth: "",
            menssageYears: "",
            menssage: false
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSurnameChange = this.handleSurnameChange.bind(this);
        this.handleCountryChange = this.handleCountryChange.bind(this);
        this.handleBirthdayChange = this.handleBirthdayChange.bind(this);
        this.dispatchAction = this.dispatchAction.bind(this);
        this.helloMenssage = this.helloMenssage.bind(this);
      }
    
    componentDidMount() {    
         axios.get(`https://restcountries.eu/rest/v2/all`)
          .then(res => {
            const Countries = res.data;
            this.setState({ Countries: Countries });
        })
      }


    handleNameChange(event){
        this.setState({name: event.target.value});
    }
    
    handleSurnameChange(event){
        this.setState({surname: event.target.value});
    }
    
    handleCountryChange(event){
        this.setState({country: event.target.value});
    }
    
    handleBirthdayChange(event){
        this.setState({birthday: event.target.value});

    }

    helloMenssage (user) {
        
        var birthday = user.birthday.split("/");
        var year = new Date().getUTCFullYear();
        var years = year - birthday[2];

        this.setState({
            menssageName: user.name,
            menssageSurname: user.surname,
            menssageCountry: user.country,
            menssageDay: birthday[1],
            menssageMonth: birthday[0],
            menssageYears: years,
            menssage: true

        })
   
    }
    
    dispatchAction(event){ 
        event.preventDefault();
        var NewUser = {
            name: this.state.name,
            surname: this.state.surname,
            country: this.state.country,
            birthday: this.state.birthday
        };
        this.props.dispatch(AddUser(NewUser));
        this.helloMenssage(NewUser);

        this.setState({            
            name: "",
            surname: "",
            country: "",
            birthday: ""
        });
    }

    render(){

      return (

        <div class="container mt-5 colorGrey col-7 p-3">
            
            <h5 class="primaryColor row justify-content-center mt-2 mb-4"> <strong> Intive - FDV Exercise</strong></h5>
            
            <div class="container row">

                
                <div class="col-6">

                    <form>

                        <div class="form-group">
                
                            <label class="primaryColor col-sm-4 col-form-label">Name:</label>
                            <input  class=" mb-2 col-8 borderSet primaryColor" type="text" placeholder="name here" value={this.state.name} onChange={this.handleNameChange}/>

                                
                            <br/>
                                
                                
                            <label  class="primaryColor col-sm-4 col-form-label">Surname:</label>
                            <input class="mb-2 col-8 borderSet primaryColor" type="text" placeholder="name here" value = {this.state.surname} onChange={this.handleSurnameChange}/>

                            <br/>
                                
                            <label  class="primaryColor col-sm-4 col-form-label">Countries:</label>
                            <select class="primaryColor mb-2 country col-8 borderSet" name="contries" value = {this.state.country} onChange={this.handleCountryChange}>

                                <option value = "" disabled selected>Countries</option>
                                    { 
                                        this.state.Countries.map
                                            (Country => 
                                                <option  key={Country.name} value={Country.name}>
                                                    {Country.name}
                                                </option>
                                            )
                                    }
                            </select>

                            <br/>
                                
                            <label  class="primaryColor col-sm-4 col-form-label">Birthday:</label>
                                <input class="mb-2 col-8 borderSet primaryColor" type="text" placeholder="mm/dd/yyyy" value = {this.state.birthday} onChange={this.handleBirthdayChange}/>
                                
                            <br/>
                            <div class="row justify-content-end">
                            <button  class="primaryColor mt-5 mb-3 mr-3 col-3 borderSet buttonSet" onClick={this.dispatchAction}>Save</button>
                            </div>
                        </div>

                    </form>

                    { this.state.menssage ? 

                        <div class="mt-5">

                            <p class="nessageSet p-2">Hello {this.state.menssageName} {this.state.menssageSurname} from {this.state.menssageCountry}. On {this.state.menssageDay} of {this.state.menssageMonth} you will have {this.state.menssageYears}</p>
                    
                        </div>
                        :

                        <span></span>

                    }



                </div>

                    <table class="table borderSet p-1 tableSet col-6">
                        <thead class="col-12">
                            <tr>
                            <th scope="col"class="col-12">Name</th>
                            <th scope="col">Country</th>
                            <th scope="col">Birthday</th>
                            </tr>
                        </thead >
                            <tbody>
                            {     
                                
                                    this.props.users.map(user=> 
                                    
                                        <tr>  
                                            <td>{user.name} {user.surname}</td>
                                        
                                            <td>{user.country}</td>  
                                            
                                            <td>{user.birthday}</td> 
                                        
                                        </tr>
                                    )
                               
                            }
                                 
                            </tbody>
                        </table>
                
                
            
            </div>

            <h5  class="primaryColor row justify-content-end mr-4">Antonio Gaston Barbetta</h5>
        
        </div>
      )
    }
  }