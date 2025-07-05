import Newslatter from './Newslatter'
import Inquiryform from './Inquiryform'
import Recommendeditems from './Recommendeditems'
import Extraservices from './Extraservices'
import Suppliers from './Suppliers'
import Gadget from './Gadget'
import Homedecore from './Homedecore'
import Herosection from './Herosection'
import Homeandoutdoor from './Homeandoutdoor'


const Home = () => {
  return (
    <main className="flex-grow bg-gray-100">
        <Herosection />
        <Homedecore />
        <Homeandoutdoor/>
        <Gadget />
        <Inquiryform />
        <Recommendeditems />
        <Extraservices />
        <Suppliers />
        <Newslatter />
        
      </main>
  )
}

export default Home
