import React, { useState, useEffect, useRef } from 'react'
import { MdDelete, MdAddCircleOutline } from 'react-icons/md'

export default function TodoForm(props) {
    const [input, setInput] = useState('');
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })
    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');
    };

    const clear = () => {
        window.location.reload();
    }



    return (
        <div>
            <form className='todo-form'>
                <input
                    placeholder='Add a todo'
                    value={input}
                    onChange={handleChange}
                    name='text'
                    className='todo-input'
                    ref={inputRef}
                >

                </input>

                <MdAddCircleOutline onClick={handleSubmit} size='50px' />



                <MdDelete onClick={clear} size='50px' />





            </form>
        </div>
    )
}


