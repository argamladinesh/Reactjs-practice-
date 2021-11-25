// import { render } from '@testing-library/react';

import React, { Component } from 'react';
class Counter extends Component {
    // state={
    //     value:this.props.counter.value
    //     // tags:['tag1','tag2','tag3']
    // };
    // constructor()//instead of doing all  this we can use arrow functions
    // {
    //     super();
    //     this.handleIncrement= this.handleIncrement.bind(this);
    // }
    // handleIncrement=()=>
    // {
    //     // console.log(product);
    //     // console.log('Increment is clicked',this)
    //     this.setState({value:this.state.value+1})

    // }
    //  doHandleProduct=()=>//instead of writing this we can directly write in tags
    //  {
    //      this.handleIncrement({id:1})
    //  }
  
    render(){
         console.log(this.props)
        return( 
        <div >
            {/* {this.props.children} */}
            <span className={this.getBadgeClasses()}>{this.formateCount()}</span>
            <button onClick={()=> this.props.onIncrement(this.props.counter)} className='btn btn-secondary btn-sm'>Increment</button>
            <button onClick={()=> this.props.onDelete(this.props.counter.id)}  className='btn  btn-danger btn-sm m-2' >Delete</button>
            {/* <ul>
                {this.state.tags.map(tags=> <li key={tags}>{tags}</li>)}
            </ul> */}
       
        </div>
        );
         
                         

       
    }
    getBadgeClasses() {
        let classes = "badge m-3  badge-";
        // classes += this.state.value === 0 ? 'warning' : 'primary';
        classes += this.props.counter.value === 0 ? 'warning' : 'primary';
        return classes;
    }
    formateCount()
        {
        //    const {value: count}=this.state;
           const {value: count}=this.props.counter;
           return count ===0?'Zero':count;

        }
           
}
export default Counter;