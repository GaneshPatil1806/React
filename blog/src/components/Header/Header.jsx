/* eslint-disable no-unused-vars */
import {Container,Logo,LogoutBtn} from '../index'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {
  const navigate = useNavigate();
  const authStatus = useSelector((state)=> state.auth.staus);

  const navItems = [
    {
      name:'Home',
      slug:'/',
      active:true
    },
    {
      name:'Login',
      slug:'/login',
      active:!authStatus
    },
    {
      name:'Signup',
      slug:'/signup',
      active:!authStatus
    },
    {
      name:'All Posts',
      slug:'/all-posts',
      active:authStatus
    },
    {
      name:'Add Post',
      slug:'/add-post',
      active:authStatus
    },
  ]
  
  return (
    <header className='py-3 shadow bg-gray-500'>
        <Container/>
    </header>
  )
}

export default Header