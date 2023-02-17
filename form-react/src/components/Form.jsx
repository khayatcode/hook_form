import React, {useState} from 'react'


const Form = () => {

    const [user, setUser] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword: "",
    })

    const changeHandler = (e) => {
        setUser({...user,[e.target.name]: e.target.value})
        console.log(user[e.target.name])
    }


  return (
    <div className="container">
        <div className='row bg-secondary p-4 rounded mt-3'>
            <h2 className='text-white'>Please enter your information below</h2>
            <form action="">
                <div className='form-floating mt-3'>
                    <input type="text" name="firstName" className="form-control" id="floatingInput" placeholder="First Name" onChange={changeHandler}/>
                    <label htmlFor="floatingInput">First Name:</label>
                </div>
                <div className='form-floating mt-3'>
                    <input type="text" name="lastName" className="form-control" id="floatingInput" placeholder="Last Name"  onChange={changeHandler}/>
                    <label htmlFor="floatingInput">Last Name:</label>
                </div>
                <div className='form-floating mt-3'>
                    <input type="email" name="email" className="form-control" id="floatingInput" placeholder="Email"  onChange={changeHandler}/>
                    <label htmlFor="floatingInput">Email:</label>
                </div>
                <div className='form-floating mt-3'>
                    <input type="password" name="password" className="form-control" id="floatingInput" placeholder="Password"  onChange={changeHandler}/>
                    <label htmlFor="floatingInput">Password:</label>
                </div>
                <div className='form-floating mt-3'>
                    <input type="password" name="confirmPassword" className="form-control" id="floatingInput" placeholder="Confirm Password"  onChange={changeHandler}/>
                    <label htmlFor="floatingInput">Confirm Password:</label>
                </div>
            </form>
        </div>
        <div className=" card col-8 row bg-primary p-4 rounded mt-3 mx-auto">
            <h3 className='card-title text-white'>Your Form Data</h3>
            <div className="d-flex mt-3 col-8 mx-auto flex-column flex-wrap">
                <p className=' d-flex justify-content-start text-white'>First name: {user.firstName}</p>
                <p className=' d-flex justify-content-start text-white'>Last name: {user.lastName}</p>
                <p className=' d-flex justify-content-start text-white'>Email: {user.email}</p>
                <p className=' d-flex justify-content-start text-white'>Password: {user.password}</p>
                <p className=' d-flex justify-content-start text-white'>Confirm Password: {user.confirmPassword}</p>
            </div>
        </div>
    </div>
  )
}

export default Form