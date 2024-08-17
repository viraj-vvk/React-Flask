import { Link } from 'react-router-dom'

export const View = ({ field, toUpdate, onDelete }) => {
    return (
        <div className="jumbotron w-75 m-auto">
            <h1 className="display-6">{field.project}</h1>
            <p><strong>Link: </strong><a href={field.link} target="blank">{field.link}</a></p>
            <p><strong>Website: </strong><a href={field.website} target="blank">{field.website}</a></p>
            <p><strong>Type: </strong>{field.type_}</p>
            <p><strong>Bid: </strong>{field.bid}</p>
            <p><strong>Lead: </strong>{field.lead}</p>
            <p><strong>Man Days: </strong>{field.man_days}</p>
            <p><strong>Result: </strong>{field.result}</p>
            <p><strong>Date: </strong>{field.date}</p>
            {/* <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p> */}
            <hr className="my-4" />
            {/* <p>It uses utility classes for typography and spacing to space content out within the larger container.</p> */}
            <Link class="btn btn-warning btn-lg mx-3 text-info" to="/update" role="button" onClick={() => toUpdate(field)}>Update</Link>
            <button class="btn btn-info btn-lg mx-3" onClick={() => {
                onDelete(field.id);
                alert('Field Deleted');
                window.location.href = "/"
            }}>Delete</button>
        </div>
    )
}
