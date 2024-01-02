import illustrationArticle from "./assets/images/illustration-article.svg";
import profileAvatar from "./assets/images/image-avatar.webp";

function App() {
	return (
		<div className="flex items-center justify-center w-screen h-screen font-Figtree bg-blog-yellow">
			<div className="preview-card p-[24px] grid grid-cols-1 gap-y-[24px] rounded-2xl bg-white w-[384px] h-[522px]">
				<div className="flex justify-center w-full image-container">
					<img src={illustrationArticle} className="w-full" alt="" />
				</div>
				<div className="grid grid-cols-1 gap-y-[12px]">
					<div className="flex justify-center w-[82px] h-[29px] px-[12px] py-[4px] bg-blog-yellow">
						<p className="font-bold text-[14px]">Learning</p>
					</div>
					<p className="text-[14px]">Published 21 Dec 2023</p>
					<h1 className="text-[24px] font-extrabold">
						HTML & CSS foundations
					</h1>
					<p className="text-[16px]">
						These languages are the backbone of every website, defining
						structure, content, and presentation.
					</p>
				</div>

				<span className="flex items-center">
					<div className="w-10">
						<img src={profileAvatar} alt="" />
					</div>
					<h2 className="font-bold">Greg Hooper</h2>
				</span>
			</div>
		</div>
	);
}

export default App;
