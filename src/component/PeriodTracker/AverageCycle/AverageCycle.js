import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';


 class AverageCycle extends Component {
    state = {
        cycle: 21
    }
   
    addDays = () => {
        if (this.state.cycle + 1 !== 41 ) {
            this.setState({cycle:this.state.cycle+ 1}) 
            this.props.getCycleDays(this.state.cycle + 1) 
        }
      
    }
    minusDays = () => {
        if (this.state.cycle - 1 !== 20 ) {
            this.setState({cycle:this.state.cycle - 1})
            this.props.getCycleDays(this.state.cycle - 1) 
        }
       
    }
    render() {
        return (
            <div>
            <h2>2. HOW MANY DAYS DID YOUR PERIOD LAST?</h2>
            <div className='Daycontainer' >
               <div className='minus'><FontAwesomeIcon icon={faMinus} size='4x' onClick={this.minusDays} /></div> 
              <div className='number'><p >{ this.state.cycle }</p></div>  
               <div  className='plus'><FontAwesomeIcon icon={faPlus} size='4x' onClick={this.addDays} /></div> 
            </div>
        </div>
        )
    }
}

export default AverageCycle;
