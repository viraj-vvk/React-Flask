import { CreateField } from './CreateField'
import Fields from './Fields'

const AllPanels = ({ fields, onDelete, onAdd, onUpdate }) => {
    return (
        <>
            <ul className="nav nav-tabs justify-content-center">
                <li className="nav-item">
                    <a className="nav-link active" data-toggle="tab" href="#show">Show</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#create">Create</a>
                </li>
            </ul>

            <div className="container py-3">
                <div id="myTabContent" className="tab-content">
                    <div className="tab-pane fade show active" id="show">
                        <Fields fields={fields} onDelete={onDelete} onUpdate={onUpdate} />
                    </div>
                    <div className="tab-pane fade" id="create">
                        <CreateField onAdd={onAdd} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllPanels;
