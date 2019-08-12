import React, { useState, Component } from 'react';
import './ContactForm.scss';
import countries from '../countries';

// Function Component

function ContactForm() {

    const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

    const [state, setState] = useState({
		firstName: "",
        lastName: "",
        email: "",
        gender: "male",
        country: "",
        subject: "",
        errors: {
            firstName: "",
            lastName: "",
            email: ""
        }
    });
    
    const handleInputChange = event => {
        const {name, value} = event.target;
        let errors = state.errors;

        switch (name) {
            case 'firstName':
                errors.firstName = 
                    value.length < 5
                    ? 'First name must be 5 characters long!'
                    : '';
            break;
            case 'lastName':
                errors.lastName = 
                    value.length < 5
                    ? 'Last name must be 5 characters long!'
                    : '';
            break;
            case 'email':
                errors.email = 
                    validEmailRegex.test(value)
                    ? ''
                    : 'Email is not valid!';
            break;
            default:
                break;
        }

        setState({
            errors, 
            [name]: value
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
        if(state.firstName == "" || state.firstName == null , state.lastName == "" || state.lastName == null , state.email == "" || state.email == null , state.gender == "" || state.gender == null , state.country == "" || state.country == null , state.subject == "" || state.subject == null) {
            alert("Please enter all required fields.");
        }
        else {
            alert("Success.");
            window.location.reload();
        }
      }

    let optionItems = countries.map( country =>
            <option key={country.name}>{country.name}</option>
        );
    const {errors} = state; 

    return (
        <section className="contactForm">
            <div className="container">
                <h1>Contact us</h1>    
                <form onSubmit={handleSubmit} noValidate>
                    <label htmlFor="firstName">First Name<span className="requiredInput">*</span></label>
                    {errors.firstName.length > 0 && <span className='error'> {errors.firstName}</span>}
                    <input value={state.firstName} onChange={handleInputChange} type="text" name="firstName" placeholder="Your first name" noValidate />

                    <label htmlFor="lastName">Last Name<span className="requiredInput">*</span></label>
                    {errors.lastName.length > 0 && <span className='error'> {errors.lastName}</span>}
                    <input value={state.lastName} onChange={handleInputChange}  type="text" name="lastName" placeholder="Your last name" noValidate />

                    <label htmlFor="email">Email<span className="requiredInput">*</span></label>
                    {errors.email.length > 0 && <span className='error'> {errors.email}</span>}
                    <input value={state.email} onChange={handleInputChange}  type="email" name="email" placeholder="Your email" noValidate />

                    <label htmlFor="gender">Gender<span className="requiredInput">*</span></label><br /> <br />

                    <label>
                        <input name="gender" type="radio" value="male" checked={state.gender === "male"} onChange={handleInputChange} /> Male
                    </label>
                    
                    <label>
                        <input name="gender" type="radio" value="female" checked={state.gender === "female"} onChange={handleInputChange} style={{marginLeft: "10px"}} /> Female
                    </label>
                    
                    <br /><br />

                    <label htmlFor="country">Country<span className="requiredInput">*</span></label>
                    <select>
                        {optionItems}
                    </select>

                    <label htmlFor="subject">Subject<span className="requiredInput">*</span></label>
                    <textarea value={state.subject} onChange={handleInputChange} name="subject" placeholder="Write something..." style={{height: '100px'}} />
                    
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </section>
     );
}

// Class Component

/*const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

class ContactForm extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          firstName: "",
          lastName: "",
          email: "",
          gender: "male",
          country: countries,
          subject: "",
          errors: {
            firstName: "",
            lastName: "",
            email: ""
          }
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        event.preventDefault();
        const {name, value} = event.target;
        let errors = this.state.errors;

        switch (name) {
            case 'firstName':
                errors.firstName = 
                    value.length < 5
                    ? 'First Name must be 5 characters long!'
                    : '';
            break;
            case 'lastName':
                errors.lastName = 
                    value.length < 5
                    ? 'Last Name must be 5 characters long!'
                    : '';
            break;
            case 'email':
                errors.email = 
                    validEmailRegex.test(value)
                    ? ''
                    : 'Email is not valid!';
            break;
      default:
        break;
    }

        this.setState({
                errors, 
                [name]: value
            });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(state.firstName == "" || state.firstName == null , state.lastName == "" || state.lastName == null , state.email == "" || state.email == null , state.gender == "" || state.gender == null , state.country == "" || state.country == null , state.subject == "" || state.subject == null) {
            alert("Please enter all required fields.");
        }
        else {
            alert("Success.");
            window.location.reload();
        }
      }
    
    render() {
        let countries = this.state.country;
        let optionItems = countries.map( country =>
                <option key={country.name}>{country.name}</option>
            );
        const {errors} = this.state;    
        return(
            <section className="contactForm">
                <div className="container">
                    <h1>Contact us</h1>    
                    <form onSubmit={this.handleSubmit} noValidate>
                        <label htmlFor="firstName">First Name<span className="requiredInput">*</span></label>
                        {errors.firstName.length > 0 && <span className='error'> {errors.firstName}</span>}
                        <input value={this.state.firstName} onChange={this.handleInputChange} type="text" name="firstName" placeholder="Your first name" noValidate />

                        <label htmlFor="lastName">Last Name<span className="requiredInput">*</span></label>
                        {errors.lastName.length > 0 && <span className='error'> {errors.lastName}</span>}
                        <input value={this.state.lastName} onChange={this.handleInputChange}  type="text" name="lastName" placeholder="Your last name" noValidate />

                        <label htmlFor="email">Email<span className="requiredInput">*</span></label>
                        {errors.email.length > 0 && <span className='error'> {errors.email}</span>}
                        <input value={this.state.email} onChange={this.handleInputChange}  type="email" name="email" placeholder="Your email" noValidate />

                        <label htmlFor="gender">Gender<span className="requiredInput">*</span></label><br /> <br />

                        <label>
                            <input name="gender" type="radio" value="male" checked={this.state.gender === "male"} onChange={this.handleInputChange} /> Male
                        </label>
                        
                        <label>
                            <input name="gender" type="radio" value="female" checked={this.state.gender === "female"} onChange={this.handleInputChange} style={{marginLeft: "10px"}} /> Female
                        </label>
                        
                        <br /><br />

                        <label htmlFor="country">Country<span className="requiredInput">*</span></label>
                        <select>
                            {optionItems}
                        </select>

                        <label htmlFor="subject">Subject<span className="requiredInput">*</span></label>
                        <textarea value={this.state.subject} onChange={this.handleInputChange} name="subject" placeholder="Write something..." style={{height: '100px'}} />
                        
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </section>
        );
    }
}*/

export default ContactForm;