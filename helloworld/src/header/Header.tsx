import React from 'react';
import './Header.css';


interface Props {
    siteName: string
}

class Header extends React.Component<Props> {
    render() {
        return (<div>
            <h1 className='App-header'>{this.props.siteName}</h1>
        </div>)
    }
}

export default Header;