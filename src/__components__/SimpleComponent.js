import React from 'react';

export default class SimpleComponent extends React.Component {
    render(){
        return (
            <>
                <h1>Hello</h1>
                <h1>{this.props.username}</h1>
            </>
        );
    }
    

}

