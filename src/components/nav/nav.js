import React from 'react'
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import './nav.css';

function Nav(props) {
    let showNav = true

    // I need to fix nav with this.props.location.pathname
    return (

        <div >
            {(showNav != '/') ?
                (
                    <div className='navBar'>

                        <img src={props.photo} />
                        <h2>{props.username}</h2>
                        <Link to='/dashboard'>
                            <button>Home</button>
                        </Link>
                        <Link to='/new'>
                            <button>New Post</button>
                        </Link>
                        <div className="space"></div>
                        <a href='http://localhost:3333/auth/logout'>
                            <button>Logout</button>
                        </a>
                    </div>
                ) : (
                    <div>words</div>
                )
            }
        </div>
    )
}

function mapStateToProps({ username, photo }) {
    return {
        username,
        photo
    }
}

export default connect(mapStateToProps)(Nav)
