import React from 'react'

const ImageCards = ({image}) => {
  return (
    <div className="max-w-sm overflow-hidden shadow-lg">
      <img src={image.webformatURL} alt="" className='w-full' />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo By Kane Williamsan
        </div>
        <div>
          <ul>
            <li><strong>Views : </strong>
              {image.views}
            </li>
            <li><strong>Downloads : </strong>
            {image.downloads}
            </li>
            <li><strong>Likes : </strong>
            {image.likes}
            </li>
          </ul>
        </div>
        <div className="py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag1</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag2</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag3</span>
        </div>
      </div>
    </div>
  )
}

export default ImageCards
