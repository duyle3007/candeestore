import Header from 'components/Header/header'
import { useSelector } from 'react-redux'


export default function Home() {
  const loading = useSelector(state => state.productReducer.loading)
  return (
    <div className="text-3xl underline">
      <Header />
      dsdss
    </div>
  )
}
