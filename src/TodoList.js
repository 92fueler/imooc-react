import React from 'react';
import { Input, Button } from 'antd'
import { connect } from 'react-redux'

const TodoList = (props) => {
    const { inputValue, list, changeInputValue, handleClick, deleteItem } = props;
    return (
        <>
            <Input placeholder="Enter your task" value={inputValue} onChange={changeInputValue} />
            <Button onClick={handleClick}>Submit</Button>
            <ul>
                {list.map((item, index) => {
                    return <li key={`${index}+${item}`} onClick={deleteItem}>{item}</li>
                })}
            </ul>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

// mount store.dispatch on props 
const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e) {
            const action = {
                type: 'change_input_value',
                value: e.target.value,
            }
            dispatch(action)
        },
        handleClick(e) {
            const action = {
                type: 'add_item'
            }
            dispatch(action)
        },
        deleteItem(index) {
            const action = {
                type: 'delete_item',
                index
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);