import React from 'react'

const ShowTask = () => {
    const tasks = [
        { id: 10001, name: "Task A", time: "2:09:01 AM 9/14/2030" },
        { id: 10002, name: "Task B", time: "2:09:01 AM 9/14/2030" },
        { id: 10003, name: "Task C", time: "2:09:01 AM 9/14/2030" },
        { id: 10004, name: "Task D", time: "2:09:01 AM 9/14/2030" },
    ]


    return (
        <section className='showTask'>
            <div className='head'>
                <div>
                    <span className='title'>Todo</span>
                    <span className='count' >0</span>
                </div>
                <button className='clearAll'>Clear All</button>
            </div>
            <ul>

                {tasks.map((task) => {
                    return (
                        <li>
                            <p>
                                <span className='id'>{task.id}</span>
                                <span className='name'>{task.name}</span>
                                <span className='time'>{task.time}</span>
                            </p>
                            <i className='bi bi-pencil-square'></i>
                            <i className='bi bi-trash'></i>
                        </li>
                    )

                })
                }


            </ul>

        </section>
    )
}

export default ShowTask