
export const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="/">Show Fields Data</a>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a href="/create" className="btn btn-secondary">Create Field</a>
                </li>
            </ul>
        </nav>
    )
}
