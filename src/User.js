import React from 'react'
import { Outlet, Link, useParams } from 'react-router-dom';

function User() {
    const { userId } = useParams();
    return (
    <>
        <hr/>
        <Link to={`/user/${userId}/posts`}>View All Posts</Link>
        ||
        <Link to={`/user/${userId}/posts/1`}>View Post with ID 1</Link>
        <hr/>
        <Outlet />
    </>
    )
}
export default User;