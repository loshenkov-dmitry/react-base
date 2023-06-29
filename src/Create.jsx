import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [author, setAuthor] = useState("mario");
	const [isPending, setIsPending] = useState(false);
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();

		const blog = {
			title,
			body,
			author,
		};

		setIsPending(true);

		fetch("http://localhost:8000/blogs", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(blog),
		}).then(() => {
			setTitle("");
			setBody("");
			setAuthor("mario");

			setIsPending(false);

			navigate("/");
		});
	};

	return (
		<div className="create">
			<h2>Add new blog</h2>

			<form onSubmit={(e) => handleSubmit(e)}>
				<label>Blog title</label>
				<input
					type="text"
					required
					value={title}
					onInput={(e) => setTitle(e.target.value)}
				/>
				<label>Blog Body</label>
				<textarea
					required
					value={body}
					onChange={(e) => setBody(e.target.value)}
				></textarea>

				<label>Blog author</label>
				<select value={author} onChange={(e) => setAuthor(e.target.value)}>
					<option value="mario">Mario</option>
					<option value="yoshi">Yoshi</option>
				</select>

				<button disabled={isPending}>
					{!isPending ? "Add block" : "Sending post..."}
				</button>
			</form>
		</div>
	);
};

export default Create;
