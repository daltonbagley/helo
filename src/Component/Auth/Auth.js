import React, {Component} from "react"
import axios from "axios"

export default class Auth extends Component{
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

handleRegister = () => {
    const newuser = {
        username: this.state.username,
        password: this.state.password
    }
    axios.post('http:localhost:3001/api/users', newuser)
    .then(console.log("You did it!!"))
}

render(){
    return(
       <div>Auth Component
           <form>
                <input type="text" onChange={(e)=>{
                    this.setState({userName:e.target.value})
                }}/>
                <input type="text" onChange={(e)=>{
                    this.setState({password: e.target.value})
                }}/>
           </form>
            <button onClick={()=>this.handleRegister()}>Register User</button>
       </div>
    )
}
}