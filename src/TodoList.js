import React, { Component } from 'react'
import { Input, Button, List } from 'antd'
import store from './store/index'
import { getAddTodoItem, getInputChangeAction, getDeleteTodoItem, getInitList } from './store/actionCreators'
// import axios from 'axios'


class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        store.subscribe(() => this.setState(store.getState()))
    }

    componentDidMount() {
        const action = getInitList()
        store.dispatch(action)
    }
    handleInputChange = (e) => {
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action)
    }

    handleBtnClick = () => {
        const action = getAddTodoItem()
        store.dispatch(action)
    }

    handleDeleteItem = (index) => {
        const action = getDeleteTodoItem(index)
        store.dispatch(action)
    }
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <div>
                    <Input style={{ width: 400, marginRight: 10, marginBottom: 10 }}
                        placeholder="Enter your task here"
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                    />
                    <Button type="primary" onClick={this.handleBtnClick}>Submit</Button>
                </div>
                <List
                    size="large"
                    header={<div>My todo list</div>}
                    footer={<div>TodoList powered by Jian Wu Design</div>}
                    bordered
                    style={{ width: 480 }}
                    dataSource={this.state.list}
                    renderItem={(item, index) => <List.Item key={`${index}-${item}`}
                        onClick={this.handleDeleteItem}
                    >{item}</List.Item>}
                />
            </div >
        )
    }
}


export default TodoList