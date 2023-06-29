import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
	const {
		data: blogs,
		isPending,
		error,
	} = useFetch("http://localhost:8000/blogs");
	return (
		<div className="home">
			{error && <h3>{error}</h3>}
			{isPending && <h3>Loading...</h3>}
			{blogs && <BlogList blogs={blogs} title="All Blogs" />}
		</div>
	);
};

export default Home;
