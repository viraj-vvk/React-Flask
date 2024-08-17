import UpdateField from './UpdateField'
import Field from './Field'

export const Fields = ({ fields, onDelete, onUpdate }) => {
    return (
        <div className="row">
            { fields.map((field) => <Field key={field.id} field={field} onDelete={onDelete} />)}
            { fields.map((field) => <UpdateField key={field.id} updateField={field} onUpdate={onUpdate} />)}
        </div>
    )
}

export default Fields;
