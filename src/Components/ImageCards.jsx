import React from 'react'

const ImageCards = ({ image }) => {

  const tags = image.tags.split(",");

  return (
    <div className=''>

    <div className="max-w-sm overflow-hidden shadow-lg mt-10">
      <img src={image.webformatURL} alt="" className='w-full' />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo By {image.user}
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
          {tags.map((tag, idx) => (
            <span key={idx} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{tag}</span>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}

export default ImageCards
