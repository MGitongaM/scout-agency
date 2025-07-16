import CloudinaryImage from "@/components/CloudinaryImage";
import { blogsAndArticles } from "@/constData/blogsAndArticlesPage";
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogsAndArticles.find((listing) => {
    return (listing.slug === slug);
  });
  return (
    <>
      {post != undefined ? (
        <section className="max-w-7xl mx-auto px-4 py-20">
            <div className="pb-10">
                <h1 className="text-4xl font-semibold">{post.title}</h1>
            </div>
          <div className="h-[28rem]">
            <CloudinaryImage
              src={post.thumbnail}
              height={800}
              width={800}
              alt={`${post?.title} image`}
              className="object-cover bg-top w-full h-full rounded-lg"
            />
          </div>
          {/* <div className="max-w-4xl mx-auto flex justify-between items-center gap-8 px-4 py-6">
            <p className="c">
              <span className="font-semibold">Date:</span>
              {post?.date}
            </p>
            <p className="c">
              <span className="font-semibold">Author:</span>
              {post?.author}
            </p>
          </div> */}
          <div className="prose max-w-3xl mx-auto prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-headings:text-white mt-10">
            <Markdown remarkPlugins={[remarkGfm]}>{post.content}</Markdown>
          </div>
        </section>
      ) : (
        <div className="grid place-content-center min-h-screen">
          <p className="c">Loading...</p>
        </div>
      )}
    </>
  );
}
