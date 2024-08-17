
const Field = ({ field, onDelete }) => {
    return (
        <div class="card border-danger m-3" style={{ width: '20rem' }}>
            <div class="card-header">
                <strong>Project Name: </strong>{field.project}
                <button type="button" className="close text-danger ml-5" onClick={() => {
                    onDelete(field.id);
                    alert('Field Deleted');
                }}>&times;</button>
            </div>
            <div className="card-body">
                <h5 className="card-title"><strong>Project Type:</strong> {field.type_}</h5>
                <p className="card-text"><strong>Link:</strong> {field.link}</p>
                <p className="card-text"><strong>Website:</strong> {field.website}</p>
                <p className="card-text"><strong>Bid:</strong> {field.bid}</p>
                <p className="card-text"><strong>Lead:</strong> {field.lead}</p>
                <p className="card-text"><strong>Man Days:</strong> {field.man_days}</p>
                <p className="card-text"><strong>Result:</strong> {field.result}</p>
                <p className="card-text"><strong>Date:</strong> {field.date}</p>
            </div>
            <div className="card-footer"><button className="btn btn-link" data-toggle="modal" data-target={`#modal${field.id}`}>Update</button></div>
        </div >
    )
}


export default Field;
