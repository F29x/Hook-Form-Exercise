import React, {useState} from "react"


function MyComponents(){
const [name,setName]=useState("Guest")
const [surname,setSurname]= useState("Guest")
const [password,setPassword]= useState("*****")
const [email,setEmail]= useState("")

const handleName=(e)=>{
    setName(e.target.value)
}
const handleSurname=(e)=>{
    setSurname(e.target.value)
}

const handleMail=(e)=>{
    setEmail(e.target.value)
}
const handelPass=(e)=>{
    setPassword(e.target.value)
}


    return(<div className="div">
           <form action="#">
            <input type="text" placeholder="Name" onChange={handleName}/>
            <input type="text" name="" id="" placeholder="Surname" onChange={handleSurname}/>
            <input type="email" placeholder="Email" onChange={handleMail}/>
            <input type="password" placeholder="Password" onChange={handelPass}/>
            <input type="password" placeholder="Confim Password" onChange={handelPass} />
            </form><br />
            <p>Name: {name}</p>
            <p>Surname: {surname}</p>
            <p>Email:{email}</p>
            <p>Password: {password}</p>
            <p>Password: {password}</p>
            

    </div>
    )
}

export default MyComponents