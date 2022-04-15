import React from 'react'
import { Link } from "react-router-dom";

function SideBar() {

    return (
        <div className="sidebar">
            <ul class="navbar-nav " id="accordionSidebar">
                <a class="sidebar-brand d-flex align-items-center justify-content-center"
                    href="index.html"
                >
                    <div class="sidebar-brand-icon rotate-n-15">
                        <i class="fas fa-laugh-wink"></i>
                    </div>
                    <div class="sidebar-brand-text mx-3">
                        SB Admin <sup>2</sup>
                    </div>
                </a>

                {/* <!-- Divider --> */}
                <hr class="sidebar-divider my-0" />

                {/* <!-- Nav Item - Dashboard --> */}
                <li class="nav-item active">
                    <Link to="/ProductAndUsers">
                        <a class="nav-link" href="index.html">
                            <i class="fas fa-fw fa-tachometer-alt"></i>
                            <span>Sale List</span>
                        </a>
                    </Link>
                </li>
                <li class="nav-item active">
                    <Link to="/add-user">
                        <a class="nav-link" href="index.html">
                            <i class="fas fa-fw fa-tachometer-alt"></i>
                            <span>Add User</span>
                        </a>
                    </Link>
                </li>

            </ul>
        </div>
    )
}

export default SideBar
