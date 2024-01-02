import illustrationArticle from "./assets/images/illustration-article.svg";
import profileAvatar from "./assets/images/image-avatar.webp";

function App() {
	return (
		<div className="flex items-center justify-center w-screen h-screen font-figtree bg-blog-yellow">
			<div className="preview-card p-[1.5rem] grid grid-cols-1 gap-y-[24px] rounded-[1.25rem] bg-white w-[384px] h-[522px]">
				<div className="flex justify-center w-full image-container">
					<img src={illustrationArticle} className="w-full" alt="" />
				</div>
				<div className="grid grid-cols-1 gap-y-[12px]">
					<div className="flex justify-center w-[82px] h-[29px] px-[12px] py-[4px] bg-blog-yellow">
						<p className="font-bold text-[14px] leading-[21px]">Learning</p>
					</div>
					<p className="text-[14px] leading-[21px]">Published 21 Dec 2023</p>
					<h1 className="text-[1.5rem] leading-[2.25rem] font-[800]">
						HTML & CSS foundations
					</h1>
					<p className="text-[1rem] leading-[1.5rem] font-[300]">
						These languages are the backbone of every website, defining
						structure, content, and presentation.
					</p>
				</div>

				<span className="flex gap-[12px] items-center">
					<div className="w-10">
						<img src={profileAvatar} alt="" />
					</div>
					<h2 className="font-bold text-[14px] leading-[21px]">Greg Hooper</h2>
				</span>
			</div>
		</div>
	);
}

export default App;
