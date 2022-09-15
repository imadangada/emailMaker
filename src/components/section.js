import section from "./section1.svg"
import section1 from "./section.svg"
import { ChevronDownIcon } from '@heroicons/react/20/solid'
function Section() {
  return (
    <div className="bg-white">
      <div className="mx-0 lg:mx-20 max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:flex lg:justify-between lg:px-8">
        <div className="max-w-xl mt-20">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
          GDPR compliant</h2>
          <p className="mt-5 text-xl text-gray-500">
          Be completely transparent and GDPR compliant with GetResponse consent fields.
           Allow your contacts to provide their proper consent right when they sign up.
          </p>
          <div class="flex grid grid-cols-2 gap-4 mt-7">
  <div>All EU Countries and California</div>
  <div>Track changes</div>
  <div>Multiple fields creation</div>
  <div>Fully integrated</div>
</div>

<button className="mt-8 bg-white border-2 border-blue-700 text-blue-800 py-2 w-40 ">Learn More</button>
        </div>
        <div className="mt-10 w-full">
          <img src={section} className=" w-full " />
            </div>
          </div>
          {/* end of first section */}
          <div className="mx-0 lg:mx-20 max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:flex lg:justify-between lg:px-8">
        <div className="mt-20">
        <img src={section1} className="w-full" />
          </div>
        <div className="mt-40">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-3xl">
        Have access to a robust email marketing tool.</h2>
          <p className="mt-5 text-xl text-gray-500">
          If you’re reading this, you already have access to a robust email marketing tool.
          </p>
          

<button className="mt-8 bg-white border-2 border-blue-700 text-blue-800 py-2 w-40 ">Learn More</button>
        
          
            </div>
          </div>
        </div>
  )
}
export default Section;