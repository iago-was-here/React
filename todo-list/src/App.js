import { React, useState } from 'react';
import { MdDelete } from 'react-icons/md';
import './App.css';

const App = () => {
  const ESCAPE_KEY = 27;
  const ENTER_KEY = 13;

  const initialTaskList = [
    { id: 1, description: 'Estudar React', checked: false },
    { id: 2, description: 'Estudar Ingles', checked: true },
    { id: 3, description: 'Tocar guitarra', checked: false },
  ];

  const [taskList] = useState(initialTaskList);
  const [task, setTask] = useState('');

  const onChange = (event) => {
    setTask(event.target.value);
  };

  const erase = () => {
    setTask('');
  };

  const submit = () => {
    console.log(task);
    erase();
  }
  const onKeyDown = (event) => {
    if (event.which === ENTER_KEY) {
      submit();
      return;
    }

    if (event.which === ESCAPE_KEY) {
      erase();
    }
  };

  return (
    <section id='app' className='container'>
      <header>
        <h1 className='title'>Todo-List</h1>
      </header>
      <section className='main'>
        <input
          className='new-task'
          placeholder='O que precisa ser feito ?'
          value={task} onChange={onChange}
          onKeyDown={onKeyDown}
        />
        <ul className='task-list'>
          {
            taskList.map((task) => (
              <li key={task.id.toString()}>
                <span className='task'>{task.description}</span>
                <button className='remove' type='button'>
                  <MdDelete size={28} />
                </button>
              </li>
            ))
          }
        </ul>
      </section>
    </section>
  );
}

export default App;
