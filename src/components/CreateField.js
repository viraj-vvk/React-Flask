import { useState } from 'react'

export const CreateField = (props) => {
    const [project, setProject] = useState('')
    const [type_, setType] = useState('')
    const [link, setLink] = useState('')
    const [website, setWebsite] = useState('')
    const [bid, setBid] = useState('')
    const [lead, setLead] = useState('')
    const [man_days, setMan_days] = useState('')
    const [result, setResult] = useState('')
    const [day, setDay] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (!project || !type_ || !link || !website || !bid || !lead || !man_days || !result || !day || !month || !year) {
            alert('Please, Fill all Data')
            return
        }
        else if ((month === 2 && parseInt(year) % 4 && day > 28) || (!['1', '3', '5', '7', '8', '10', '12'].includes(month) && day > 30)) {
            alert('Please, Enter Valid Date')
            return
        }

        props.onAdd({ project, type_, link, website, bid, lead, man_days, result, 'date': day + '/' + month + '/' + year })
        alert('New Field Created');
        setProject('')
        setType('')
        setLink('')
        setWebsite('')
        setBid('')
        setLead('')
        setMan_days('')
        setResult('')
        setDay('')
        setMonth('')
        setYear('')
    }

    return (
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <h4>Add New Field</h4>
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control" value={project} onChange={(e) => setProject(e.target.value)} placeholder="Project Name" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" value={type_} onChange={(e) => setType(e.target.value)} placeholder="Type" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" value={link} onChange={(e) => setLink(e.target.value)} placeholder="Link" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" value={website} onChange={(e) => setWebsite(e.target.value)} placeholder="Website" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" value={bid} onChange={(e) => setBid(e.target.value)} placeholder="Bid" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" value={lead} onChange={(e) => setLead(e.target.value)} placeholder="Lead" />
                    </div>
                    <div className="form-group">
                        <input type="number" min="1" className="form-control" value={man_days} onChange={(e) => setMan_days(e.target.value)} placeholder="Man Days" />
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" value={result} onChange={(e) => setResult(e.target.value)} placeholder="Result" ></textarea>
                    </div>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-4">
                                <input type="number" min="1" max="31" className="form-control" value={day} onChange={(e) => setDay(e.target.value)} placeholder="Day" />
                            </div>
                            <div className="col-4">
                                <input type="number" min="1" max="12" className="form-control" value={month} onChange={(e) => setMonth(e.target.value)} placeholder="Month" />
                            </div>
                            <div className="col-4">
                                <input type="number" min="1968" max={(new Date).getFullYear()} className="form-control" value={year} onChange={(e) => setYear(e.target.value)} placeholder="Year" />
                            </div>
                        </div>
                    </div>
                    <input type="submit" value="Add Field" className="btn btn-success" onClick={onSubmit} />
                </form>
            </div>
        </div>
    )
}
