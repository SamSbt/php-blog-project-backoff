import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
	const [activeLink, setActiveLink] = useState("/");
	const navigate = useNavigate();

	const handleNavLinkClick = (event) => {
		// event.preventDefault();
		// console.log("href=" + event.target.href);
		const url = new URL(event.target.href);
		// console.log("path=" + url.pathname);
		setActiveLink(url.pathname);
	};

	const handleLogoClick = () => {
		setActiveLink("/"); 
	};

	const handleLoginClick = () => {
    setActiveLink(null);
		navigate("/login");
	};


	return (
		<>
			<nav className="navbar navbar-expand-lg fixed-top bg-light">
				<div className="container-lg">
					<Link className="navbar-brand" to="/" onClick={handleLogoClick}>
						DevBlog
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarContent"
						aria-controls="navbarContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse ms-5" id="navbarContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item me-2">
								<Link
									className={"nav-link" + (activeLink == "/" ? " active" : "")}
									to="/"
									onClick={handleNavLinkClick}
								>
									Accueil
								</Link>
							</li>
							<li className="nav-item me-2">
								<Link
									className={
										"nav-link" + (activeLink == "/series" ? " active" : "")
									}
									to="/series"
									onClick={handleNavLinkClick}
								>
									Séries
								</Link>
							</li>
							<li className="nav-item me-2">
								<Link
									className={
										"nav-link" + (activeLink == "/techs" ? " active" : "")
									}
									to="/techs"
									onClick={handleNavLinkClick}
								>
									Techs
								</Link>
							</li>
							<li className="nav-item me-2"></li>
						</ul>
						<div>
							<button
								type="button"
								className="btn btn-primary me-3"
								onClick={handleLoginClick}
							>
								Login
							</button>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}
export default Navbar;
