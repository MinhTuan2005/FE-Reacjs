import React from 'react';

class Sidebar extends React.Component {
    render(){
        return(
            <div class="sidebar" data-color="white" data-active-color="danger">
                <div class="logo">
                    <a href="https://www.creative-tim.com" class="simple-text logo-mini">
                    <div class="logo-image-small">
                        <img src="../assets/img/logo-small.png" />
                    </div>
                    </a>
                    <a href="https://www.creative-tim.com" class="simple-text logo-normal">
                    Miichisoft
                    </a>
                </div>
                <div class="sidebar-wrapper">
                    <ul class="nav">
                    <li class="active ">
                        <a href="./dashboard.html">
                        <i class="nc-icon nc-diamond"></i>
                        <p>Home</p>
                        </a>
                    </li>
                    <li>
                        <a href="./icons.html">
                        <i class="nc-icon nc-bank"></i>
                        <p>User</p>
                        </a>
                    </li>
                    <li>
                        <a href="./map.html">
                        <i class="nc-icon nc-bank"></i>
                        <p>Project</p>
                        </a>
                    </li>
                    <li>
                        <a href="./notifications.html">
                        <i class="nc-icon nc-bank"></i>
                        <p>Customer</p>
                        </a>
                    </li>
                    <li>
                        <a href="./user.html">
                        <i class="nc-icon nc-settings-gear-65"></i>
                        <p>configuration</p>
                        </a>
                    </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sidebar;