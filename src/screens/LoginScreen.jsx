import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginScreen() {
	const navigate = useNavigate();

	const handleRegisterClick = () => {
		navigate("/register");
	};

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		// Traitement du formulaire, ex: envoi à une API
		console.log("Email:", email);
		console.log("Password:", password);
	};

	return (
		<>
			<section className="container d-flex justify-content-center align-items-center wrapper pb-5">
				<div>
					<h2 className="mb-4 text-center">Bon retour parmi nous !</h2>
					<form
						className="border border-2 rounded-3 p-3"
						method="POST"
						noValidate
					>
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
						<div className=" mb-4">
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
								Se connecter
							</button>
						</div>
						<h5 className="mt-5 mb-2 text-center">Ou alors bienvenue !</h5>
						<div>
							<p className="text-center">
								Pas encore de compte ? Rejoignez-nous :
							</p>
							<div className="d-flex justify-content-center">
								<button
									type="button"
									className="btn btn-primary"
									onClick={handleRegisterClick}
								>
									Register
								</button>
							</div>
						</div>
					</form>
				</div>
			</section>
		</>
	);
}
export default LoginScreen;
