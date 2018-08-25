// This is a react component that is technically functional,
// but would be very hard to maintain because of it's size.

// It's easier to write tests for smaller components that pass
// data between them. Rewrite this component so that it could be
// rendered from somewhere else by using these lines.

// const checkboxes = [0, 1, 2];

// <Form>
// 	checkboxes.map(id =>
// 		<Checkbox key={id} id={id}/>
// 	)
// </Form>

// or (easier but less impresive)

// <Form checkboxes={checkboxes} />

// If you decide to do the second option you MUST STILL create and
// render a Checkbox Component inside the Form Component

class CheckBox extends React.Component {
	constructor() {
		super();
		this.state = {
			checked: false,
		};
	}

	checkboxOnCheck = ()  => {
		this.setState({
    	checked: !this.state.checked,
    })
	}

	render() {
  this.props.checked(this.props.id, this.state.checked)
  console.log(this.state.checked, this.props.id)
		const checked = this.state.checked
		return (
      <div className="checkbox-wrapper">
        <span>{'checkbox ' + this.props.id}</span>
        <input type="checkbox" id={this.props.id} onClick={this.checkboxOnCheck.bind(this)}/>
      </div>
		)
	}
}


class BigForm extends React.Component {
	constructor() {
		super();
	}
  
  handleChecked = (id, status) => {
  	console.log('this is the parent knowing your state',id, status)
  }
  
	render() {
  const boxes = [0,1,2]
		return (
			<div className="form">
      <span>New Form</span>
			  {boxes.map(id =>
 		  		<CheckBox key={id} id={id} checked={this.handleChecked}/>
				)}
			</div>
		)
	}
}

ReactDOM.render(
  <BigForm />,
  document.getElementById('container')
);