import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { Logo, Container } from './index'
import LogoutBtn from './logoutBtn'
import EditPages from '../pages/EditPages'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  // Creating an array of all the items of nav bar
  const nav = [
    {
      name: 'Home',
      slug: '/',
      active: true
    },
    {
      name: 'Log in',
      slug: '/Login',
      active: !authStatus
    },
    {
      name: 'Sign up',
      slug: '/Signup',
      active: !authStatus
    },
    {
      name: 'All Posts',
      slug: '/all-posts',
      active: authStatus
    },
    {
      name: 'Add Post',
      slug: '/add-post',
      active: authStatus
    },
  ]

  return (
    <header className="py-4 shadow bg-gray-800 text-white">
      <Container>
        <nav className="flex items-center">
          <div className="mr-4">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>
          <ul className="flex ml-auto space-x-4">
            {nav.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="inline-block px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-full transition duration-200"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null)}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header
