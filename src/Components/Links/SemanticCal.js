import React, { Component } from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'
import '../../CSS/SemanticCal.css'
import { Breakpoint } from 'react-socks'
import {Example} from '../Menu/Example'

export default class MenuExampleTabularOnLeft extends Component {
  
  state = { activeItem: 'Volumetric Leak Rate Calculator', valueA: '100', valueB: '5',valueC:'100',valueD:'25',valueE:'2',valueF:'200',valueG:'75'}
  
  
  handleChangeValueA =  (event) => {
    const regex = /^[0-9\b]+$/;
    const input = event.target.value;
    if(input === '' || regex.test(input)){
      this.setState({valueA: input})
    }
  }
  handleChangeValueB =  (event) => {
    const regex = /^[0-9\b]+$/;
    const input = event.target.value;
    if(input === '' || regex.test(input)){
      this.setState({valueB: input})
    }
  }
  handleChangeValueC =  (event) => {
    const regex = /^[0-9\b]+$/;
    const input = event.target.value;
    if(input === '' || regex.test(input)){
      this.setState({valueC: input})
    }
  }
  handleChangeValueD =  (event) => {
    const regex = /^[0-9\b]+$/;
    const input = event.target.value;
    if(input === '' || regex.test(input)){
      this.setState({valueD: input})
    }
  }
  handleChangeValueE =  (event) => {
    const regex = /^[0-9\b]+$/;
    const input = event.target.value;
    if(input === '' || regex.test(input)){
      this.setState({valueE: input})
    }
  }
  handleChangeValueF =  (event) => {
    const regex = /^[0-9\b]+$/;
    const input = event.target.value;
    if(input === '' || regex.test(input)){
      this.setState({valueF: input})
    }
  }
  handleChangeValueG =  (event) => {
    const regex = /^[0-9\b]+$/;
    const input = event.target.value;
    if(input === '' || regex.test(input)){
      this.setState({valueG: input})
    }
  }
 
 
  
  
  handleItemClick = (e, { name }) => this.setState({activeItem: name})
  
  render() {
    const { activeItem, valueA, valueB, valueC, valueD, valueE, valueF, valueG, valueH, valueI } = this.state
   
    
    if(this.state.activeItem === 'Volumetric Leak Rate Calculator')
    {
      return (
        <>
      <Example></Example>  
      <div id='gone'>
    <Breakpoint customQuery="(max-width:600px)">
      <Grid id='grid'>
        <Grid.Column width={6}>
          <Menu fluid vertical tabular>
            <Menu.Item
              className='chart-item'
              name='Volumetric Leak Rate Calculator'
              active={activeItem === 'Volumetric Leak Rate Calculator'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
            className='chart-item'
              name='Pump Horsepower Calculation'
              active={activeItem === 'Pump Horsepower Calculation'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
            className='chart-item'
              name='Velocity in Pipe'
              active={activeItem === 'Velocity in Pipe'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
            className='chart-item'
              name='Pump Head to PSI'
              active={activeItem === 'Pump Head to PSI'}
              onClick={this.handleItemClick}
            />
          </Menu>
        </Grid.Column>
        
        <Grid.Column stretched width={10}>
          <Segment className="segment">
           
           <form>    
            Test Volume (bbls):
           <input 
            type="text"
            value={valueA}      
            onChange={this.handleChangeValueA} ></input>
            Decay Rate (psi/mi);
            <input 
            type="text"
            value={valueB}      
            onChange={this.handleChangeValueB} ></input>
            Leak Rate (cc/min):
           <div className="answer">= {this.state.valueA*this.state.valueB}</div>
           </form>
          
          </Segment>
        </Grid.Column>
      </Grid>
    
      </Breakpoint>
      <Breakpoint customQuery="(min-width:601px)">
      <Grid id='grid'>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            <Menu.Item
            className='chart-item'
              name='Volumetric Leak Rate Calculator'
              active={activeItem === 'Volumetric Leak Rate Calculator'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
            className='chart-item'
              name='Pump Horsepower Calculation'
              active={activeItem === 'Pump Horsepower Calculation'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
            className='chart-item'
              name='Velocity in Pipe'
              active={activeItem === 'Velocity in Pipe'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
            className='chart-item'
              name='Pump Head to PSI'
              active={activeItem === 'Pump Head to PSI'}
              onClick={this.handleItemClick}
            />
          </Menu>
        </Grid.Column>
        
        <Grid.Column stretched width={12}>
          <Segment className='segment'>
           
           <form> 
          Test Volume (bbls): 
           <input 
            type="text"
            value={valueA}      
            onChange={this.handleChangeValueA} ></input>
          Decay Rate (psi/min):
            <input 
            type="text"
            value={valueB}      
            onChange={this.handleChangeValueB} ></input>
            Leak Rate (cc/min):
           <div className="answer">= {this.state.valueA*this.state.valueB}</div>
           </form>
          </Segment>
        </Grid.Column>
      </Grid>
      </Breakpoint>
      </div>
      </>
    )
  }




  else if(this.state.activeItem === 'Pump Horsepower Calculation')
  {
    return (
      <>
       <Breakpoint customQuery="(max-width:600px)">
      <Grid id='grid'>
        <Grid.Column width={6}>
          <Menu fluid vertical tabular>
            <Menu.Item
            className='chart-item'
              name='Volumetric Leak Rate Calculator'
              active={activeItem === 'Volumetric Leak Rate Calculator'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
            className='chart-item'
              name='Pump Horsepower Calculation'
              active={activeItem === 'Pump Horsepower Calculation'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
            className='chart-item'
              name='Velocity in Pipe'
              active={activeItem === 'Velocity in Pipe'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
            className='chart-item'
              name='Pump Head to PSI'
              active={activeItem === 'Pump Head to PSI'}
              onClick={this.handleItemClick}
            />
          </Menu>
        </Grid.Column>
        
        <Grid.Column stretched width={10} id='grid-column'>
          <Segment className='segment'> 
       
            <form> 
            Pump Rate (gpm):   
           <input 
            type="text"
            value={valueC}      
            onChange={this.handleChangeValueC} ></input>
            Discharge Pressure (psig):
            <input 
            type="text"
            value={valueD}      
            onChange={this.handleChangeValueD} ></input>
            Horsepower:
           <div className="answer">= {this.state.valueC*this.state.valueD}</div>
           </form>
          </Segment>
        </Grid.Column>
      </Grid>
      </Breakpoint>
      <Breakpoint customQuery="(min-width:601px)">
      <Grid id='grid'>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            <Menu.Item
            className='chart-item'
              name='Volumetric Leak Rate Calculator'
              active={activeItem === 'Volumetric Leak Rate Calculator'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
            className='chart-item'
              name='Pump Horsepower Calculation'
              active={activeItem === 'Pump Horsepower Calculation'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
            className='chart-item'
              name='Velocity in Pipe'
              active={activeItem === 'Velocity in Pipe'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
            className='chart-item'
              name='Pump Head to PSI'
              active={activeItem === 'Pump Head to PSI'}
              onClick={this.handleItemClick}
            />
          </Menu>
        </Grid.Column>
        
        <Grid.Column stretched width={12} id='grid-column'>
          <Segment className='segment'> 
          
            <form>    
            Pump Rate (gpm):
           <input 
            type="text"
            value={valueC}      
            onChange={this.handleChangeValueC} ></input>
            Discharge Pressure (psig):
            <input 
            type="text"
            value={valueD}      
            onChange={this.handleChangeValueD} ></input>
            Horsepower:
           <div className="answer">= {this.state.valueC*this.state.valueD}</div>
           </form>
          </Segment>
        </Grid.Column>
      </Grid>
      </Breakpoint>
      </>
    )
  }





  else if(this.state.activeItem === 'Velocity in Pipe')
  {
    return (
      <>
      <Breakpoint customQuery="(max-width:600px)">
      <Grid id='grid'>
        <Grid.Column width={6}>
          <Menu fluid vertical tabular>
            <Menu.Item
            className='chart-item'
              name='Volumetric Leak Rate Calculator'
              active={activeItem === 'Volumetric Leak Rate Calculator'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
            className='chart-item'
              name='Pump Horsepower Calculation'
              active={activeItem === 'Pump Horsepower Calculation'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
            className='chart-item'
              name='Velocity in Pipe'
              active={activeItem === 'Velocity in Pipe'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
            className='chart-item'
              name='Pump Head to PSI'
              active={activeItem === 'Pump Head to PSI'}
              onClick={this.handleItemClick}
            />
          </Menu>
        </Grid.Column>
        
        <Grid.Column stretched width={10}>
          <Segment className="segment">
           
            <form>   
            Inside Diameter (in):
           <input 
            type="text"
            value={valueE}      
            onChange={this.handleChangeValueE} ></input>
            Pump Rate (gpm):
            <input 
            type="text"
            value={valueF}      
            onChange={this.handleChangeValueF} ></input>
            Velocity (ft/sec):
           <div className="answer">= {this.state.valueE*this.state.valueF}</div>
           </form>
          </Segment>
        </Grid.Column>
      </Grid>
      </Breakpoint>
      <Breakpoint customQuery="(min-width:601px)">
      <Grid id='grid'>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            <Menu.Item
            className='chart-item'
              name='Volumetric Leak Rate Calculator'
              active={activeItem === 'Volumetric Leak Rate Calculator'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
            className='chart-item'
              name='Pump Horsepower Calculation'
              active={activeItem === 'Pump Horsepower Calculation'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
            className='chart-item'
              name='Velocity in Pipe'
              active={activeItem === 'Velocity in Pipe'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
            className='chart-item'
              name='Pump Head to PSI'
              active={activeItem === 'Pump Head to PSI'}
              onClick={this.handleItemClick}
            />
          </Menu>
        </Grid.Column>
        
        <Grid.Column stretched width={12}>
          <Segment className="segment">
        
            <form>    
            Inside Diameter (in):
           <input 
            type="text"
            value={valueE}      
            onChange={this.handleChangeValueE} ></input>
            Pump Rate (gpm):
            <input 
            type="text"
            value={valueF}      
            onChange={this.handleChangeValueF} ></input>
            Velocity:
           <div className="answer">= {this.state.valueE*this.state.valueF}</div>
           </form>
          </Segment>
        </Grid.Column>
      </Grid>
      </Breakpoint>
      </>
    )
  }




  else if(this.state.activeItem === 'Pump Head to PSI')
  {
    return (
      <>
       <Breakpoint customQuery="(max-width:600px)">
      <Grid id='grid'>
        <Grid.Column width={6}>
          <Menu fluid vertical tabular>
            <Menu.Item
            className='chart-item'
              name='Volumetric Leak Rate Calculator'
              active={activeItem === 'Volumetric Leak Rate Calculator'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
            className='chart-item'
              name='Pump Horsepower Calculation'
              active={activeItem === 'Pump Horsepower Calculation'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
            className='chart-item'
              name='Velocity in Pipe'
              active={activeItem === 'Velocity in Pipe'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
            className='chart-item'
              name='Pump Head to PSI'
              active={activeItem === 'Pump Head to PSI'}
              onClick={this.handleItemClick}
            />
          </Menu>
        </Grid.Column>
        
        <Grid.Column stretched width={10}>
          <Segment className="segment">
          
            <form>   
            Pump Head (ft-water):
           <input 
            type="text"
            value={valueG}      
            onChange={this.handleChangeValueG} ></input>
          PSI:
           <div className="answer">= {this.state.valueG}</div>
           </form>
          </Segment>
        </Grid.Column>
      </Grid>
      </Breakpoint>
      <Breakpoint customQuery="(min-width:601px)">
      <Grid id='grid'>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            <Menu.Item
            className='chart-item'
              name='Volumetric Leak Rate Calculator'
              active={activeItem === 'Volumetric Leak Rate Calculator'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
            className='chart-item'
              name='Pump Horsepower Calculation'
              active={activeItem === 'Pump Horsepower Calculation'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
            className='chart-item'
              name='Velocity in Pipe'
              active={activeItem === 'Velocity in Pipe'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
            className='chart-item'
              name='Pump Head to PSI'
              active={activeItem === 'Pump Head to PSI'}
              onClick={this.handleItemClick}
            />
          </Menu>
        </Grid.Column>
        
        <Grid.Column stretched width={12}>
          <Segment className="segment">
            <form>  
            Pump Head (ft-water):  
           <input 
            type="text"
            value={valueG}      
            onChange={this.handleChangeValueG} ></input>
            PSI:
           <div className="answer">= {this.state.valueG}</div>
           </form>
          </Segment>
        </Grid.Column>
      </Grid>
      </Breakpoint>
      </>
    )
  }
  }
}