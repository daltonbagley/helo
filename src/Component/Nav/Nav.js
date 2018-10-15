import React from 'react'

const sendHome = (props) => {
    props.history.push('/dashboard')
}
const handleNewPostButton = (props) => {
    props.history.push('/new')
}
const handleLogoutButton = (props) => {
    props.history.push('/')
}
export default function Nav(props){
    console.log(props)
  if(props.location.pathname !== '/'){
    return(
        <div>
            
            <button className="NavButton Home" onClick={()=>sendHome(props)}>HOME</button>
            <button className="NavButton NewPost" onClick={()=>handleNewPostButton(props)}>New Post</button>
            <button className="NavButton Logout" onClick={()=>handleLogoutButton(props)}>Logout</button>
        </div>
    )
} else {
    return(
        false
    )
}

 }