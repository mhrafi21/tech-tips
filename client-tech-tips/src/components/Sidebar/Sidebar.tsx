import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div>
        <div>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/notifications">Notifications</Link></li>
                <li><Link href="/messages">Messages</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/profile/12">Profile</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar