import { useState } from "react";

function RegisterScreen() {
	const [lastname, setLastname] = useState("");
	const [firstname, setFirstname] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		// code ici
		console.log("Nom:", lastname);
		console.log("Prénom:", firstname);
		console.log("Email:", email);
		console.log("Password:", password);
	};

	return (
		<>
			<section className="d-flex justify-content-center align-items-center wrapper pb-5">
				<div>
					<h2 className="mb-4 text-center">Bienvenue chez DevBlog !</h2>
					<form
						className="border border-2 rounded-3 p-3"
						method="POST"
						noValidate
					>
						<div className="mb-3">
							<label htmlFor="inputNom" className="form-label">
								Nom :
							</label>
							<input
								type="text"
								className="form-control"
								id="inputNom"
								name="inputNom"
								placeholder="Entrez votre nom"
								onChange={(e) => setLastname(e.target.value)}
								required
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="inputPrenom" className="form-label">
								Prénom :
							</label>
							<input
								type="text"
								className="form-control"
								id="inputPrenom"
								name="inputPrenom"
								placeholder="Entrez votre prénom"
								onChange={(e) => setFirstname(e.target.value)}
								required
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="inputEmail" className="form-label">
								Adresse Email :
							</label>
							<input
								type="email"
								className="form-control"
								id="inputEmail"
								name="inputEmail"
								placeholder="Entrez votre email"
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="inputPassword" className="form-label">
								Mot de passe :
							</label>
							<input
								type="password"
								className="form-control"
								id="inputPassword"
								name="inputPassword"
								placeholder="Entrez votre mot de passe"
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
						</div>
						<div className="d-flex justify-content-center">
							<button type="submit" className="btn btn-secondary">
								S'enregistrer
							</button>
						</div>
					</form>
				</div>
			</section>
		</>
	);
}
export default RegisterScreen;
