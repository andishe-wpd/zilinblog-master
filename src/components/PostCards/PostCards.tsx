import PostCard from './PostCard'
import Modal from '@components/modal/Modal'
import { useNavigate, useParams } from 'react-router-dom'
import PostCardDetail from './PostCardDetail'
import usePosts from '../../hooks/usePosts'
import { useEffect } from 'react'
import useStore from '../../store/store'
import { Post } from '@interfaces/ApiResponse'
const PostCards = () => {
  const navigate = useNavigate()
  const params = useParams()
  const posts = useStore(state => state.posts)
  const setPosts = useStore(state => state.setPosts)
  const searchValue = useStore(state => state.searchValue)
  const {
    data: fetchedPosts,
    isLoading,
    isSuccess,
    error,
    refetch,
  } = usePosts(`?page=${params?.page || '1'}}`)
  useEffect(() => {
    refetch()
  }, [params])
  useEffect(() => {
    if (isSuccess) {
      const filteredPosts = fetchedPosts?.content?.filter((post: Post) =>
        post.title.includes(searchValue),
      )
      setPosts(filteredPosts)
    }
  }, [fetchedPosts, searchValue, setPosts])

  const postIndex = params?.postID ? parseInt(params.postID) - 1 : -1
  const postContent = fetchedPosts?.content?.[postIndex]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 pb-12 max-w-[1600px] mx-auto">
      {isSuccess
        ? posts.map(
            (
              {
                id,
                title,
                image,
                mainContent,
                summary,
                author,
                date,
                jobTitle,
              },
              index,
            ) => (
              <PostCard
                title={title}
                key={id}
                order={index + 1}
                image={image}
                mainContent={mainContent}
                summary={summary}
                author={author}
                date={date}
                jobTitle={jobTitle}
              />
            ),
          )
        : null}

      <Modal
        isOpen={!!params?.postID}
        onClose={() => navigate('/' + params?.page)}
      >
        {postContent ? <PostCardDetail content={postContent} /> : null}
      </Modal>
    </div>
  )
}

export default PostCards
