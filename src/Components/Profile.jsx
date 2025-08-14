import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getUserData } from '../Apis/userdata.api';
import Loading from './Loading';
import PostItem from './PostItem';
import { Helmet } from 'react-helmet';
import { useContext } from 'react';
import { auth } from '../Context/Auth.context.jsx';
import AddPost from './AddPost';
import { getUserPosts } from '../Apis/Posts/Posts.api.js';

export default function Profile() {
  const { id } = useParams();
  const { userData } = useContext(auth);

  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["profile", id],
    queryFn: () => getUserData(id),
  });
console.log("data", data);

    const {data:userPosts} = useQuery({
    queryKey: ["userPosts", id],
    queryFn: () => getUserPosts(id),
  });

console.log("hook", userPosts);

  if (isLoading) return <Loading />;
  if (isError) {
    return <div className='flex items-center justify-center h-screen'>
      Error: {error.message}
    </div>;
  }

  return (
    <>
      <Helmet>
        <title>Profile</title>
        <meta name="description" content="Helmet application" />
      </Helmet>

      <div className="posts-container">
        {/* ✅ AddPost فوق البوستات */}
        {userData?._id === id && (
          <AddPost profileId={id} userData={userData} />
        )}

        {/* ✅ عرض البوستات حتى لو لسه مضافينها حالياً */}
        {userPosts?.posts && userPosts.posts.length > 0 ? (
          userPosts.posts.map(post => (
            <PostItem key={post._id} post={post} />
          ))
        ) : (
          <div className='text-center text-gray-500 mt-6'>
            No posts yet.
          </div>
        )}
      </div>
    </>
  );
}
