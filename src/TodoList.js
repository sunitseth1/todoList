import React, {Component} from "react";
import TodoItems from "./TodoItems";

class TodoList extends Component {
	constructor(props){
		super(props);
		this.state = {items: []};
		this.addItem = this.addItem.bind(this);
		
	}
	addItem(e){
		if(this._inputElement.value !== "" || this._inputElement1.value !== ""){
			var newItem = {
				text: this._inputElement.value + " "+this._inputElement1.value , 
				key: Date.now()
			};
	
			this.setState((prevState) => {
				return {
					items: prevState.items.concat(newItem)
				};
			});
		
			this._inputElement.value = "";
			this._inputElement1.value = "";
		}
		console.log(this.state.items);
		e.preventDefault();
	}
	deleteItem(key){
		var filteredItems = this.state.items.filter(function(item) {
			return (item.key !== key);
		});
		
		this.setState({
			items: filteredItems
		});
	}
	render(){
		return(
			<div className="todoListMain">
			  <div className="header">
			  <h1>My Goals</h1>
			    <form onSubmit={this.addItem}>
			      <input ref={(a) => this._inputElement = a} placeholder="Goal...">
			      </input>
				  <input ref={(b) => this._inputElement1 = b} placeholder="By...">
			      </input>
			      <button type="submit">Add</button>
			    </form>
			    <TodoItems entries={this.state.items}  />
			  </div>
		        </div>
		);
	}
}

export default TodoList; 
