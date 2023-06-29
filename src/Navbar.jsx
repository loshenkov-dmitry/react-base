import { Link } from "react-router-dom";

const links = [
	{
		title: "Home",
		href: "/",
	},
	{
		title: "New Blog",
		href: "/create",
	},
];

function Navbar() {
	return (
		<nav className="navbar">
			<h1>The Dojo Blog</h1>
			<div className="links">
				{links.map((item) => (
					<Link key={item.href} to={item.href}>
						{item.title}
					</Link>
				))}
			</div>
		</nav>
	);
}

export default Navbar;
