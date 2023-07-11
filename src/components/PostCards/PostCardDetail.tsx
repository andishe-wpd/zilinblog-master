import { FC } from 'react'
import { Post } from '@interfaces/ApiResponse'
import SpokenDate from '@components/utils/SpokenDate'
import LazyLoadImage from '@components/lazyLoadImage/lazyLoadImage'
const PostCardDetail: FC<{ content: Post }> = ({ content }) => {
  return (
    <div className="flex flex-col md:flex-row max-h-[90vh] mx-auto  md:max-w-screen-lg shadow-lg  rounded-lg bg-white">
      <div className="relative w-full h-full  md:w-12/12 lg:w-8/12 xl:w-2/3">
        <LazyLoadImage
          className={'w-full h-full object-cover rounded-l-lg'}
          picture={content.image}
        />
        <div className="absolute gradient-glass-card rounded-bl-lg">
          <div className="flex flex-col text-sm	">
            <span className="font-semibold">{content?.author}</span>
            <span>{content?.date ? SpokenDate(content?.date) : null}</span>
          </div>
          <span className="font-semibold">{content?.jobTitle}</span>
        </div>
      </div>
      <div className="  lg:w-4/12 xl:w-1/3 md:max-w-[384px] rounded-r-lg m-6 max-h-[400px] p-2 overflow-x-auto">
        <div className="font-bold text-2xl pb-3">{content?.title}</div>
        {content?.mainContent}
      </div>
    </div>
  )
}

export default PostCardDetail
