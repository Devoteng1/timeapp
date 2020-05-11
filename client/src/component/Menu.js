import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
            <div>
  <aside className="main-sidebar">
    {/* sidebar: style can be found in sidebar.less */}
    <section className="sidebar">
      {/* Sidebar user panel */}
      
      {/* search form */}
      
      {/* /.search form */}
      {/* sidebar menu: : style can be found in sidebar.less */}
      <ul className="sidebar-menu" data-widget="tree">
        <li className="header">MAIN NAVIGATION</li>
        <li className="treeview">
        <a href="index.html">
          <i className="fa fa-files-o"></i>
          <span>Admin</span>
          <span className="pull-right-container">
            <span className="label pull-right">>>></span>
          </span>
        </a>
        <ul className="treeview-menu">
          <li><a href="pages/layout/top-nav.html"><i className="fa fa-circle-o"></i> Create Users</a></li>
          <li><a href="pages/layout/boxed.html"><i className="fa fa-circle-o"></i> Create Clients</a></li>
          <li><a href="pages/layout/fixed.html"><i className="fa fa-circle-o"></i> View Reports</a></li>
          <li><a href="pages/layout/collapsed-sidebar.html"><i className="fa fa-circle-o"></i> Dummy Option</a></li>
        </ul>
      </li>
      <li className="treeview">
      <a href="index.html">
        <i className="fa fa-files-o"></i>
        <span>Employees</span>
        <span className="pull-right-container">
          <span className="label pull-right">>>></span>
        </span>
      </a>
      <ul className="treeview-menu">
        <li><a href="pages/layout/top-nav.html"><i className="fa fa-circle-o"></i> Create Tasks</a></li>
        <li><a href="pages/layout/boxed.html"><i className="fa fa-circle-o"></i> View Task</a></li>
        <li><a href="pages/layout/boxed.html"><i className="fa fa-circle-o"></i> Dummy Option</a></li>
      </ul>
    </li>
      </ul>
    </section>
    {/* /.sidebar */}
  </aside>
</div>

        )
    }
}

export default Menu;
