import React, {Fragment, useState} from 'react';

const InputTodo = () => {

    const [description, setDescription] = useState("");
    const [status, setStatus] = useState('To Do');

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { description, status };
            const response = await fetch('http://localhost:5000/todos', {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body)
            })
            window.location = '/';
        } catch (err) {
            console.error(err.messaage);
        }
    }

    return (
        <Fragment>
            <h1 className='text-center mt-5'>Task Manager</h1>
            <form className='d-flex mt-5' onSubmit={onSubmitForm}>
                <input type='text' className='form-control' value={description} onChange={e => setDescription(e.target.value)} />
                <select className='btn btn-primary ml-3 mr-3 text-center' value={status} onChange={e => setStatus(e.target.value)}>
                    <option className="mb-3" value="To Do">To Do</option>
                    <option className="mb-3" value="In Progress">In Progress</option>
                    <option className="mb-3" value="Done">Done</option>
                </select>
                <button className='btn btn-success' type="submit">Create</button>
            </form>
        </Fragment>
    );
};

export default InputTodo;
