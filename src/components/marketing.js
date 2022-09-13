import online from './online.svg'
import house from './house.svg'
import certificate from './certificate.svg'
import sms from './sms.svg'
function Marketing() {
    return (
      <div className="bg-gray-50 pt-12 sm:pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Inbound marketing solutions<br /> for what you need to do
            </h2>
            {/* <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus repellat laudantium.
            </p> */}
          </div>
        </div>
        <div className="mt-10 bg-gray-50 pb-12 sm:pb-16">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-gray-50" />
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-4xl">
                <dl className="rounded-lg bg-gray-50 sm:grid sm:grid-cols-4">
                  <div className="flex flex-col border-b border-gray-50 p-6 text-center sm:border-0 sm:border-r">
                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 text-center">Enterprices</dt>
                    <dd className="ml-0 lg:ml-14">
                        <img src={online} />
                    </dd>
                  </div>
                  <div className="flex flex-col border-t border-b border-gray-50 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                    
                    <dd className="">
                    <img src={sms} />
                    </dd>
                  </div>
                  <div className="flex flex-col border-t border-b border-gray-50 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">Agencies</dt>
                    <dd className="ml-0 lg:ml-14">
                    <img src={certificate} />
                    </dd>
                  </div>
                  <div className="flex flex-col border-t border-gray-50 p-6 text-center sm:border-0 sm:border-l">
                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">Institutes</dt>
                    <dd className="ml-0 lg:ml-14">
                    <img src={house} />
                    </dd>
                  </div>
                </dl>

                {/* down text */}
                <h5 className="text-2xl font-bold text-gray-900 sm:text-4xl">
                SMS and self-employed
            </h5>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            A tool like Acumbamail is very useful for SMEs and self-employed workers due to 
            its ease of use to manage your campaigns from a 
            single platform, without the need for a large team to carry them out.
            
            </p>
            <span className="text-blue-800 mt-10">Find Out More</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
export default Marketing  