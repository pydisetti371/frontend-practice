import React from 'react';
import UpdatedComponent from './withCounter'
class HoverCounter extends React.Component{
      render(){
            const {incrementCount , count} = this.props;  
            return (
                  <div>
                        <h2  onMouseOver={incrementCount}>
                              {count} hovertimes
                        </h2>
                  </div>
            )
      }
}

export default UpdatedComponent(HoverCounter);