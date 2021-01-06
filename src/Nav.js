import React from 'react';

const Nav = ({active, tab}) => (
    <nav className="App-nav">
        <ul>
            {/* <li className={`App-nav-item ${active === 0 && 'selected'} `}> <a onClick={() => {tab(0)}}> Items</a> </li>
            <li className={`App-nav-item ${active === 1 && 'selected'} `}> <a onClick={() => {tab(1)}}> Cart</a> </li> */}

            <li className={`App-nav-item ${active === 0 && 'selected'}`}>
                <NavLink index={0} onClick={tab}>Items</NavLink>
            </li>
            <li className={`App-nav-item ${active === 1 && 'selected'}`}>
                <NavLink index={1} onClick={tab}>Cart</NavLink>
            </li>
        </ul>
    </nav>
)

class NavLink extends React.Component{
    handleClick = () => {
        this.props.onClick(this.props.index)
    }

    render(){
        return(
            <a onClick={this.handleClick}>
                {this.props.children}
            </a>
        )
    }
}

export default Nav;