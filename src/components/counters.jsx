import React, { Component } from 'react'
import Counter from './counter'
class Counters extends Component {
    // state={

    //     counters:[
    //         {id:1,value:3},
    //         {id:2,value:0},
    //         {id:3,value:0}, 
    //         {id:4,value:0}
    //     ]
    // };
    // handleIncrement=counter=>
    // {
    //     const counters=[...this.state.counters];
    //     const index =counters.indexOf(counter);
    //     counters[index]={...counter};
    //     counters[index].value++;
    //     this.setState({counters});

    // }
    // handleReset=()=>
    // {
    //     const counters = this.state.counters.map(c=>{
    //         c.value=0;
    //         return c;
    //     });
    //     this.setState({counters});
    // }
    // handleDelete=(counterId)=>
    // {
    //     // console.log("Delete Event handler is called",counterId);
    //    const counters = this.state.counters.filter(c=>c.id!==counterId);
    //    this.setState({counters}) ;
    // }

    render()
    {
        const {onReset,onDelete,onIncrement,counters}=this.props;
        
        return(
            <div>
                <button onClick={onReset} className="btn btn-success m-2 btn-sm">Reset</button>
                {counters.map(counter => 
                (<Counter key={counter.id} 
                    onDelete={onDelete} 
                    onIncrement={onIncrement}
                // value={counter.value} id={counter.id}
                counter={counter}> 
               {/* <h4>counter #{counter.id}</h4> */}
                </Counter>))}
            {/* <Counter />
            <Counter />
            <Counter />
            <Counter /> */}
            </div>
        );
    }
}
export default Counters;