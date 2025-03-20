import PortfolioGrid from '../../GridLayouts/PortfolioGrid'
import {Portfolios} from '../../../constants/Portfolios'

const PortfolioContent = () => {
  return (
    <PortfolioGrid data={Portfolios}/>
  )
}

export default PortfolioContent