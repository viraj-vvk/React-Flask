import { useState, useEffect } from 'react'

export const Create = (props) => {

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

    const [projectError, setProjectError] = useState('')
    const [type_Error, setTypeError] = useState('')
    const [linkError, setLinkError] = useState('')
    const [websiteError, setWebsiteError] = useState('')
    const [bidError, setBidError] = useState('')
    const [leadError, setLeadError] = useState('')
    const [man_daysError, setMan_daysError] = useState('')
    const [resultError, setResultError] = useState('')
    const [dateError, setDateError] = useState('')

    const regex = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;

    useEffect(() => {
        let elm = document.getElementById("selectYear")
        for (let i = (new Date).getFullYear(); i >= 1968; i--) {
            let el = document.createElement('OPTION');
            el.appendChild(document.createTextNode(i));
            elm.appendChild(el);
        }

        elm = document.getElementById("selectMonth");
        (["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ]).forEach(element => {
            let el = document.createElement('OPTION');
            el.appendChild(document.createTextNode(element));
            elm.appendChild(el);
        })

        elm = document.getElementById("selectDay");
        for (let i = 1; i < 32; i++) {
            let el = document.createElement('OPTION');
            el.appendChild(document.createTextNode(i));
            elm.appendChild(el)
        }
    }, [])

    const onSubmit = (e) => {
        e.preventDefault()

        if (!project || !type_ || !link || !website || !bid || !lead || !man_days || !result || !day || !month || !year) {
            // alert('Please, Fill all Data')
            !project && setProjectError('Enter Project Name');
            !type_ && setTypeError('Enter Type');
            !link && setLinkError('Enter Link');
            !website && setWebsiteError('Enter Website');
            !bid && setBidError('Enter Bid');
            !lead && setLeadError('Enter Project Name');
            !man_days && setMan_daysError('Enter Man Days');
            !resultError && setResultError('Fill Result');
            !(day && month && year) && setDateError('Enter Date');
            return
        }
        else if (!link.match(regex)) {
            setLinkError('Invalid Link');
            return
        }
        else if (!website.match(regex)) {
            setWebsiteError('Invalid Website');
            return
        }
        else if ((month === 2 && parseInt(year) % 4 && day > 28) || (!['1', '3', '5', '7', '8', '10', '12'].includes(month) && day > 30)) {
            setDateError('Enter Valid Date');
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
        window.location.href = "/"
    }

    return (
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <h4>Add New Field</h4>
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control" value={project} onChange={(e) => setProject(e.target.value.trim())} placeholder="Project Name" />
                        {projectError && <p className="text-primary">{projectError}</p>}
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" value={type_} onChange={(e) => setType(e.target.value.trim())} placeholder="Type" />
                        {type_Error && <p className="text-primary">{type_Error}</p>}
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" value={link} onChange={(e) => {
                            setLink(e.target.value.trim());
                            !e.target.value.match(regex) ? setLinkError("Invalid Link URL") : setLinkError('');
                        }} placeholder="Link" />
                        {linkError && <p className="text-primary">{linkError}</p>}
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" value={website} onChange={(e) => {
                            setWebsite(e.target.value.trim());
                            !e.target.value.match(regex) ? setWebsiteError("Invalid Website URL") : setWebsiteError('');
                        }} placeholder="Website" />
                        {websiteError && <p className="text-primary">{websiteError}</p>}
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" value={bid} onChange={(e) => setBid(e.target.value.trim())} placeholder="Bid" />
                        {bidError && <p className="text-primary">{bidError}</p>}
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" value={lead} onChange={(e) => setLead(e.target.value.trim())} placeholder="Lead" />
                        {leadError && <p className="text-primary">{leadError}</p>}
                    </div>
                    <div className="form-group">
                        <input type="number" min="1" className="form-control" value={man_days} onChange={(e) => setMan_days(e.target.value.trim())} placeholder="Man Days" />
                        {man_daysError && <p className="text-primary">{man_daysError}</p>}
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" value={result} onChange={(e) => setResult(e.target.value.trim())} placeholder="Result" ></textarea>
                        {resultError && <p className="text-primary">{resultError}</p>}
                    </div>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-4">
                                {/* <input type="number" min="1" max="31" className="form-control" value={day} onChange={(e) => setDay(e.target.value.trim())} placeholder="Day" /> */}
                                <select className="custom-select" id="selectYear" onChange={(e) => {
                                    setYear(e.target.value);
                                }}>
                                    <option value="">Year</option>
                                </select>
                            </div>
                            <div className="col-4">
                                {/* <input type="number" min="1" max="12" className="form-control" value={month} onChange={(e) => setMonth(e.target.value.trim())} placeholder="Month" /> */}
                                <select className="custom-select" id="selectMonth" onChange={(e) => setMonth(e.target.value)}>
                                    <option value="">Month</option>
                                </select>
                            </div>
                            <div className="col-4">
                                {/* <input type="number" min="1968" max={(new Date).getFullYear()} className="form-control" value={year} onChange={(e) => setYear(e.target.value.trim())} placeholder="Year" /> */}
                                <select className="custom-select" id="selectDay" onChange={(e) => setDay(e.target.value)}>
                                    <option value="">Day</option>
                                </select>
                            </div>
                        </div>
                        {dateError && <p className="text-primary">{dateError}</p>}
                    </div>
                    <input type="submit" value="Add Field" className="btn btn-success" onClick={onSubmit} />
                </form>
            </div>
        </div>
    )
}
