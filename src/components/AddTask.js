import { useState } from "react"

const AddTask = ({ onAdd }) => {
  const [name, setName] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const actionSubmit = (e) => {
    e.preventDefault()
    if (!name) {
      alert('Please add task')
      return
    }

    onAdd({ name, day, reminder })
    setName('')
    setDay('')
    setReminder('')
  }

  return (
    <form className='add-form' onSubmit={actionSubmit}>
      <div className='form-control'>
        <label>Task</label>
        <input
          type='text'
          placeholder='Add Task'
          value={name}
          onChange={(e) => setName(e.target.value)} />
      </div>
      <div className='form-control'>
        <label>Add Day & Time</label>
        <input
          type='text'
          placeholder='Add Day & Time'
          value={day}
          onChange={(e) => setDay(e.target.value)} />
      </div>
      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input
          type='checkbox'
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)} />
      </div>

      <input
        type='submit'
        value='Save'
        className='btn btn-block' />
    </form>
  )
}

export default AddTask
