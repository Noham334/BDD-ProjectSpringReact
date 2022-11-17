import logo from '../../assets/img/logo.svg';
import './style.css';

function Header() {
	return (
		<header>
			<div className="dsmeta-logo-container">
				<img src={logo} alt="DSMeta" />
				<h1>DSMeta</h1>
				<p>
					Desarrollado por{' '}
					<a href="https://www.instagram.com/israel_noham">@israel_noham</a>
				</p>
			</div>
		</header>
	);
}

export default Header;
