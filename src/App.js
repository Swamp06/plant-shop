import './App.css';

function App() {

  let cards = [
  {
    id: 1,
    name: "Peperomia Ginny",
    price: 25,
    potColors: ["#2d2d2d", "#f5e6e0", "#d4a574"],
    image: "./images/cards/1.png"
  },
  {
    id: 2,
    name: "Bird's Nest Fern",
    price: 45,
    potColors: ["#2d2d2d", "#f5e6e0", "#d4a574"],
    image: "./images/cards/2.png"
  },
  {
    id: 3,
    name: "Large Majesty Palm",
    price: 52,
    potColors: ["#2d2d2d", "#f5e6e0", "#d4a574"],
    image: "./images/cards/3.png"
  },
  {
    id: 4,
    name: "Pet Friendly Plant",
    price: 30,
    potColors: ["#2d2d2d", "#f5e6e0", "#d4a574"],
    image: "./images/cards/4.png"
  },
  {
    id: 5,
    name: "Duo Friendly Plant",
    price: 52,
    potColors: ["#2d2d2d", "#f5e6e0", "#d4a574"],
    image: "./images/cards/4.png"
  }
];

  return (
    <div className="App">
      <header>
        <div className='header_left'>
          <a href='#'>Shop</a>
          <a href='#'>Products</a>
          <a href='#'>Fertilizer</a>
          <a href='#'>Guide</a>
        </div>
        <div className='header_mid'>
          <img src='./images/logo.png' />
        </div>
        <div className='header_right'>
          <img src='./images/search.png' />
          <img src='./images/user.png' />
          <img src='./images/cart.png' />
        </div>
      </header>

      <div className='big_box'>
        <div className='big_box_left'>
          <span>Happiness blooms from within</span>
          <span>Our environment, the world in which we live and work, is a mirror of our attitudes and expectations.</span>
          <div>
            <button>Shop now</button>
            <button>Explore plants <img src='./images/arrow_right.png' /></button>
          </div>
        </div>
        <div className='big_box_right'>
          <div className='img_box'>
            <div className='img_box_left'>
              <div>
                <img className='back_img' src='./images/img3.png'/>
                <div className='left_top'>New</div>
              </div>
              <div>
                <div className='left_top'>Popular</div>
                <img className='back_img' src='./images/img2.png'/>
              </div>
            </div>
            <div className='img_box_right'>
              <img className='back_img' src='./images/img1.png'/>
              <div className='left_top'>Featured</div>
              <div>
                
                <span>Anthurium Flower</span>
                <span>The flower of human being. It has meaningful of fact that the plant always grow whatever season and weather...</span>
                <button>READ MORE</button>
                
              </div>
            </div>
            <img className='pattern' src='./images/pattern.png'  />
          </div>
          
        </div>
      </div>

      <div className='desc_line'>
        <span>Featured</span>
        <span>view all</span>
      </div>

      <div className='card_box'>
        {cards.map((elem)=>{
          return(
            <div key={elem.id} className='card'>
          <div className='card_top'>
            <img src={elem.image} />
          </div>
          <div className='card_bottom'>
            <div className='desc'>
              <span>{elem.name}</span> 
              <span>${elem.price}</span> 
            </div>
            <div className='btn_box'>
              <div>
                <span>Post color</span>
                <div className='color_box'>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                
              </div>
              <button>Buy</button>
            </div>
          </div>
        </div>
          )
        })}
      </div>

      <div className='search_box'>
        <div>
          <img src='./images/settings.png' />
        </div>
        <input placeholder='Search flowers...'/>
        <div>
          <img src='./images/search.png' />
        </div>
      </div>

      <div className='desc_line'>
        <span>Colorful New Arrivals</span>
        <span>view all</span>
      </div>
        
      <div className='images_box'>
        <div>
          <span>Blue Lily</span>
          <span>more information 	&rarr;</span>
          <img src='./images/images_box/1.png' />
        </div>
        <div>
          <img src='./images/images_box/2.png' />
        </div>
        <div>
          <img src='./images/images_box/3.png' />
        </div>
        <div>
          <img src='./images/images_box/4.png' />
        </div>
      </div>

      <div className='desc_line new'>
        <span>Plant stands</span>
      </div>

      <div className='big_box2'>
        <div>
          <img src='./images/big_box_images/1.png' />
        </div>
        <div>
          <img src='./images/big_box_images/2.png' />
        </div>
        <div>
          <img src='./images/big_box_images/3.png' />
        </div>
        <div>
          <span>more &rarr;</span>
        </div>
      </div>

      <div className='bg_box'>
          <div className='wrapper'>
            <div className='first'>
            <span>Free Shipping Services</span>
            <span>*only for the same region</span>
          </div>
          <div className='second'>
            <div>
              <img src='./images/phone.png' />
              <span>+62 1189-2719-00</span>
            </div>
            <div>
              <img src='./images/email.png' />
              <span>order@platify.co</span>
            </div>
          </div>
          </div>

      </div>

      <div className='new_box'>

      </div>
    </div>
  );
}

export default App;
