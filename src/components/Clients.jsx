import React from 'react'
import { FaSlack, AiOutlineGithub, FaAtlassian } from './ClientIcons'

export const Clients = () => {
    return (
        <div className="px-10 mt-32">
            <div className="w-16 h-2 rounded bg-blue-700"></div>
            <h1 className='text-gray-100 text-2xl font-bold mb-6'>Clients</h1>
            <p className='text-xl text-gray-400 w-3/4 pb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda autem ullam culpa consequuntur ratione et velit molestias omnis, possimus accusamus.</p>
            <div className="flex flex-col gap-8">
                    <div className="flex items-start px-20 py-24 border-2 border-gray-400 rounded-lg">
                        <FaSlack className=" text-white h-24 w-24 mr-20"/>
                        <div>
                            <p className="text-white font-bold text-3xl">Slack Inc.</p>
                            <div className="mb-10">
                                <button type="button" className="bg-slate-700 p-2 text-gray-200 rounded mt-1 text-sm mr-4">UI/UX</button>

                                <button type="button" className="bg-slate-700 p-2 text-gray-200 rounded mt-4 text-sm">Frontend Development</button>
                            </div>

                            <p className='text-lg text-gray-400 w-3/4 pb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel debitis dolore cupiditate repellendus obcaecati id placeat dolorum atque voluptates hic!</p>
                        </div>
                    </div>

                    <div className="flex items-start px-20 py-24 border-2 border-gray-400 rounded-lg">
                        <AiOutlineGithub className=" text-white h-24 w-24 mr-20"/>
                        <div>
                            <p className="text-white font-bold text-3xl">Github Inc</p>
                            <div className="mb-10">
                                <button type="button" className="bg-slate-700 p-2 text-gray-200 rounded mt-1 text-sm mr-4">UI/UX</button>

                                <button type="button" className="bg-slate-700 p-2 text-gray-200 rounded mt-4 text-sm">Frontend Development</button>
                            </div>

                            <p className='text-lg text-gray-400 w-3/4 pb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel debitis dolore cupiditate repellendus obcaecati id placeat dolorum atque voluptates hic!</p>
                        </div>
                    </div>


                    <div className="flex items-start px-20 py-24 border-2 border-gray-400 rounded-lg">
                        <FaAtlassian className=" text-white h-24 w-24 mr-20"/>
                        <div>
                            <p className="text-white font-bold text-3xl">Atlassian Inc.</p>
                            <div className="mb-10">
                                <button type="button" className="bg-slate-700 p-2 text-gray-200 rounded mt-1 text-sm mr-4">UI/UX</button>

                                <button type="button" className="bg-slate-700 p-2 text-gray-200 rounded mt-4 text-sm">Frontend Development</button>
                            </div>

                            <p className='text-lg text-gray-400 w-3/4 pb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel debitis dolore cupiditate repellendus obcaecati id placeat dolorum atque voluptates hic!</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}
