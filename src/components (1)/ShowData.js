import { useEffect, useState } from 'react'
import { Field } from "./Field"

export const ShowData = ({ fields, toUpdate, toShow, onDelete }) => {
    const [show, setShow] = useState(fields)

    const handleChange = (e) => {
        let val = e.target.value.toLowerCase().trim()
        !val ? setShow(fields) : setShow(show.filter((field) => { return (field.project.toLowerCase().includes(val) || field.type_.toLowerCase().includes(val)) }))
    }

    return (
        <>
            <div className="row">
                <div className="col-md-9">
                    <h3>Fields Data</h3>
                </div>
                <div className="col-md-3">
                    <input className="form-control mb-2" type="search" placeholder="Search" onChange={handleChange} autoFocus />
                </div>
            </div>
            <table className="table table-hover ">
                <thead>
                    <tr className="table-active">
                        <th scope="col">Sr. No</th>
                        <th scope="col">Project</th>
                        <th scope="col">Type</th>
                        <th scope="col">Website</th>
                        <th scope="col">Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {show.map((field) => < Field key={field.id} field={field} toUpdate={toUpdate} toShow={toShow} onDelete={onDelete} />)}
                </tbody>
            </table>
        </>
    )
}
