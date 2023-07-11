import ArrowIcon from '@assets/icons/ArrowIcon'
import LazyLoadImage from '@components/lazyLoadImage/lazyLoadImage'
import Link from '@components/link/Link'
import SpokenDate from '@components/utils/SpokenDate'
import { Post } from '@interfaces/ApiResponse'
import { FC } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const PostCard: FC<Post> = ({
  title,
  summary,
  author,
  mainContent,
  date,
  jobTitle,
  order,
  image,
}) => {
  const navigate = useNavigate()
  const params = useParams()
  return (
    <section className="relative max-w-[326px] mx-auto">
      <figure className="relative min-h-[240px]">
        {image ? <LazyLoadImage picture={image} /> : null}
        <div className="absolute gradient-glass-card">
          <div className="flex flex-col text-sm">
            <span className="font-semibold">{author}</span>
            <span>{SpokenDate(date)}</span>
          </div>
          <span className="font-semibold">{jobTitle}</span>
        </div>
      </figure>
      <div className="py-8">
        <div className="font-semibold text-2xl">{title}</div>
        <div className="text-textSecondary">{summary}</div>
      </div>
      <Link
        to={'/' + (params?.page || '1') + '/' + order}
        className="text-primary font-semibold absolute bottom-0"
      >
        <div className="flex gap-2 items-center">
          Read post
          <ArrowIcon className="transform rotate-135" stroke="#175CD3" />
        </div>
      </Link>
    </section>
  )
}

export default PostCard
