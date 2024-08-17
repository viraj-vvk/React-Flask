// import { FontAwesomeIcon } from '@fontawesome/react-fontawesome'
import { FaPencilAlt, FaEye, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom'

export const Field = ({ field, toUpdate, toShow, onDelete }) => {
    return (
        <tr>
            <th scope="row">{field.id}</th>
            <td>{field.project}</td>
            <td>
                <a href={field.website} target="blank">{field.website}</a>
            </td>
            <td>
                <Link to="/view" onClick={() => toShow(field)} className="mx-3"><FaEye /> </Link>
                <Link to="/update" onClick={() => toUpdate(field)} className="mx-3"><FaPencilAlt /></Link>
                <Link onClick={() => {
                    onDelete(field.id);
                    alert('Field Deleted');
                }} className="mx-3"><FaTrashAlt /></Link>
            </td>
        </tr>
    )
}
