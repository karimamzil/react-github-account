import React, { Component } from 'react'

export class SearchUsers extends Component {
    state={
        search:''
    }
    handleForm =(e)=>{
        this.setState({search:e.target.value})
    }
    searchUsers=(e)=>{
        e.preventDefault();
        this.props.getUserSearch(this.state.search);}
    render() {
        const {search}=this.state;
        return (
            
               <form onSubmit={this.searchUsers.bind(this)}>
                   <div className="form-group ">
                      
                    <input onChange={this.handleForm.bind(this)}
                     placeholder="Search account..." 
                     type="text" 
                     className="form-control" 
                     id="search" 
                     value={search}/>
                    </div>
               

            <button className="btn btn-primary btn-block">search Account </button>
            </form>
        )
    }
}

export default SearchUsers
