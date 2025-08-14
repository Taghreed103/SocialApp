import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../Apis/Posts/Posts.api.js";
import PostItem from '../Components/PostItem.jsx';
import Loading from "./Loading.jsx";
import AddPost from "./AddPost.jsx";
import { auth } from '../Context/Auth.context.jsx';
import { Helmet } from "react-helmet";
import { useContext } from "react";

export default function Home() {
  const { userData } = useContext(auth);

  const { data, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  });

  if (isLoading) return <Loading />;

  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Helmet application" />
      </Helmet>

      <div className="posts-container">
        {/* ✅ AddPost فوق البوستات */}
        <AddPost userData={userData} />

        {/* ✅ عرض البوستات حتى لو مضافة لسه من الكاش */}
        {data?.posts && data.posts.length > 0 ? (
          data.posts.map(post => (
            <PostItem key={post._id} post={post} />
          ))
        ) : (
          <div className="text-center text-gray-500 mt-6">
            No posts yet.
          </div>
        )}
      </div>
    </>
  );
}
