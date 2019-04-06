import React, {Component} from 'react'
import ListItem from '../components/ListItem'


const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    fontFamily: "Segoe Print, Arial, sans-serif",
}

const headerStyle = {
    alignSelf: "center",
    textAlign: "center",
}

const mainStyle = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center"
}

const mainInputStyle = {
    padding: "10px"
}

class Listicles extends Component {
    state = {
        list: [],
        value: ""
    }

    componentDidMount(){
        console.log("list", this.state.list)
        fetch('/api/todolist')
            .then(res => res.json())
            .then(data => {
                this.setState({ 
                    list: data, 
                    latestId: data.length > 0 ? data.map(d => d.id).reduce((acc, curr) => Math.max(acc, curr)) : 0
                })
            })
            .catch(err => {
                console.log(err)
            })            
    }

    handleListCreate = (e) => {
        e.preventDefault();
        this.setState(prevState => ({
            list: [
                ...prevState.list,
                {
                    id: prevState.latestId + 1,
                    text: prevState.value,
                    done: false,
                    editing: false
                }
            ],
            latestId: prevState.latestId + 1,
            value:""
        }))
    }

    handleListCreateChange = (e) => {
        const {value} = e.target
        if(value.length <= 100)
            this.setState({ value })
    }

    handleListEditChange = (id, value) => {
        this.setState(prevState => ({
            list: prevState.list.map((prevListItem) => {
                if(prevListItem.id !== id){
                    return prevListItem
                } else {
                    return {
                        ...prevListItem,
                        text: value,
                    }
                }
            })
        }))
    }

    handleListEditClick = (id) => {
        this.setState(prevState => ({
            list: prevState.list.map((prevListItem) => {
                if(prevListItem.id !== id){
                    return prevListItem
                } else {
                    return {
                        ...prevListItem,
                        editing: !prevListItem.editing
                    }
                }
            })
        }))
    }

    handleListDelete = (id) => {
        this.setState(prevState => ({
            list: prevState.list.filter(listItem => listItem.id !== id)
        }))
    }

    handleListTick = (id) => {
        this.setState(prevState => ({
            list: prevState.list.map((prevListItem) => {
                if(prevListItem.id !== id){
                    return prevListItem
                } else {
                    return {
                        ...prevListItem,
                        done: !prevListItem.done
                    }
                }
            })
        }))
    }

    render(){
        const {list, value} = this.state;
        return (
            <div style={containerStyle}>
                <header style={headerStyle}>
                    <h1>Listicles</h1>
                    <form>
                        <input
                            placeholder = "Enter a new todo here"
                            onChange = {this.handleListCreateChange}
                            value = {value}
                            style={mainInputStyle}
                        />
                        <input type='submit' value="ENTER" 
                            onClick={(e) => this.handleListCreate(e)} 
                            disabled={!value}
                            style={mainInputStyle}
                        />
                    </form>
                    
                </header>
                <main style={mainStyle}>
                    { 
                        list.filter(item => !item.done)
                            .map(item => (
                                <ListItem key={item.id} listItem={item} 
                                    handleEditClick={this.handleListEditClick}
                                    handleDelete={this.handleListDelete}
                                    handleTick={this.handleListTick}
                                    handleChange={this.handleListEditChange}
                                />
                        ))
                    }
                    { 
                        list.filter(item => item.done)
                            .map(item => (
                                <ListItem key={item.id} listItem={item} 
                                    handleEditClick={this.handleListEditClick}
                                    handleDelete={this.handleListDelete}
                                    handleTick={this.handleListTick}
                                    handleChange={this.handleListEditChange}
                                />
                        ))
                    }
                </main>
            </div>
        )
    }
}

export default Listicles