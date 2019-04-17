import React from 'react';

export default class CheckBoxWithLabel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isChecked : false
        };
    }
    render (){
        return (
            <label>
                <input type='checkbox' checked={this.state.isChecked} onChange={this.onChange}/>
                {
                    this.state.isChecked ? 
                        this.props.labelOn :
                        this.props.labelOff
                }
            </label>
        );
    }

    // use arrow function to avoid the explicit binding in constructor like 
    //        this.onChange = this.onChange.bind(this);
    onChange = ()=> {
        this.setState({
            isChecked : !this.state.isChecked
        });
    }
}