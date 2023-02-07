import React from 'react'

import "./Features.css"
function Features() {
  return (
    // https://i.imgur.com/WjmXAKt.png
    // https://i.imgur.com/XMpHOXl.png
    // https://i.imgur.com/3hFjP8s.png
    <div className='features'>
      <div className="features__item">
        <span className="features__item-title">Lorem ipsum dolor sit amet.</span>
        <div className="features__item-content">
          <img src="https://i.imgur.com/WjmXAKt.png" alt="" className="features__item-content-img" />
          <p className="features__item-content-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut atque minus ex veritatis dolore. Quasi, ipsam nihil! Perspiciatis sint provident accusamus illo quis, quaerat accusantium tempora nihil corporis ratione perferendis nisi velit voluptatibus animi officia repellat. Natus obcaecati voluptates tempora, vero veniam architecto, doloribus harum dicta, dolor dignissimos expedita unde?
          </p>
        </div>
      </div>
      <div className="features__item">
        <span className="features__item-title">Lorem ipsum dolor sit amet.</span>
        <div className="features__item-content">
          <img src="https://i.imgur.com/XMpHOXl.png" alt="" className="features__item-content-img" />
          <p className="features__item-content-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut atque minus ex veritatis dolore. Quasi, ipsam nihil! Perspiciatis sint provident accusamus illo quis, quaerat accusantium tempora nihil corporis ratione perferendis nisi velit voluptatibus animi officia repellat. Natus obcaecati voluptates tempora, vero veniam architecto, doloribus harum dicta, dolor dignissimos expedita unde?
          </p>
        </div>
      </div>
      <div className="features__item">
        <span className="features__item-title">Lorem ipsum dolor sit amet.</span>
        <div className="features__item-content">
          <img src="https://i.imgur.com/3hFjP8s.png" alt="" className="features__item-content-img" />
          <p className="features__item-content-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut atque minus ex veritatis dolore. Quasi, ipsam nihil! Perspiciatis sint provident accusamus illo quis, quaerat accusantium tempora nihil corporis ratione perferendis nisi velit voluptatibus animi officia repellat. Natus obcaecati voluptates tempora, vero veniam architecto, doloribus harum dicta, dolor dignissimos expedita unde?
          </p>
        </div>
      </div>
    </div>
  )
}

export default Features