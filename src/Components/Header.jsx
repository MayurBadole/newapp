import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <nav>
            <h1>TechStar</h1>
            <main>
                <Link to ={"/"}> Home </Link>
                <Link to ={"/contact"}> Contact </Link>
                <Link to ={"/#about"}> About </Link>
                <Link to ={"/brands"}> Brands </Link>
                <Link to ={"/brands"}> Services</Link>
            </main>
        </nav>
    </div>
  )
}

export default Header