import { Field } from "./Field"

export const ShowData = ({ fields, toUpdate, toShow, onDelete }) => {
    return (
        <>
            <h3>All Fields Data</h3>
            <table className="table table-hover">
                <thead>
                    <tr className="table-active">
                        <th scope="col">Sr. No</th>
                        <th scope="col">Project</th>
                        <th scope="col">Website</th>
                        <th scope="col">Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {fields.map((field) => < Field key={field.id} field={field} toUpdate={toUpdate} toShow={toShow} onDelete={onDelete} />)}
                </tbody>
            </table>
        </>
    )
}
