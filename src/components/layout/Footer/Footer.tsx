import Pagination from './Pagination'
import { useParams, useNavigate } from 'react-router-dom'
import usePosts from '../../../hooks/usePosts'
const Footer = () => {
  const { page } = useParams()
  const { data: posts, isLoading, isSuccess } = usePosts('')
  const navigate = useNavigate()
  return (
    <footer className="pt-5 pb-6 border-t">
      {isSuccess ? (
        <Pagination
          totalItems={posts.totalPage}
          itemsPerPage={1}
          currentPage={parseInt(page || '1')}
          onPageChange={page => {
            navigate('/' + page)
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            })
          }}
        />
      ) : null}
    </footer>
  )
}

export default Footer
