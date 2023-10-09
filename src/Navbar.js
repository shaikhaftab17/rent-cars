import React from 'react'
import "./App.css"
import image1 from './images/images.jpeg'
import image2 from './images/download.jpeg'
import image3 from './images/download (1).jpeg'
import image4 from './images/images (1).jpeg'
import image5 from './images/download (2).jpeg'
import image6 from './images/download (3).jpeg'



export default function Navbar() {
  return (
    < >
      <div className='div1'>
        <div className='div2'>
          <li><input className='input1' type="text" /></li><button className='btn1'><i class="bi bi-search"></i></button>
          <li><a href="#"></a><div class="dropdown">
            <a class="drp btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">Relevan
            </a>

            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div></li>
          <li><a href="#"><div class="dropdown">
            <a class="drp btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              All-Brands
            </a>

            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div></a></li>
        </div>
        <div className="cards container">
          <div className='card1'>
            <div className='card2'> <img src={image1} alt="" /></div>
            <div className='card3'>
              <h5>Toyota RAV4</h5>2021
            </div>
            <div className="card4">
              <div><i class="bi bi-people"></i>4 pepoles </div>
              <div> <i class="bi bi-fuel-pump-diesel"></i>Hybrid</div>
            </div>
            <div className="card5">
              <div><i class="bi bi-speedometer2"></i>6.1/1-L</div>
              <div><i class="bi bi-car-front-fill"></i>Automatic</div>
            </div>
            <div className="card6">
            </div>
            <div className="card7">
              <h2>480$</h2><div className='card7-1'>/month</div>
              <div className='card7-2'><i class="bi bi-heart"></i> <button className='card7-btn'>Rent</button></div>
            </div>
          </div>
          <div className='card1'>
            <div className='card2'> <img src={image2} alt="" /></div>
            <div className='card3'>
              <h5>BMW 3 series</h5>2021
            </div>
            <div className="card4">
              <div><i class="bi bi-people"></i>4 pepoles </div>
              <div> <i class="bi bi-fuel-pump-diesel"></i>Gasoline</div>
            </div>
            <div className="card5">
              <div><i class="bi bi-speedometer2"></i>8.2/1-L</div>
              <div><i class="bi bi-car-front-fill"></i>Automatic</div>
            </div>
            <div className="card6">
            </div>
            <div className="card7">
              <h2>350$</h2><div className='card7-1'>/month</div>
              <div className='card7-2'><i class="bi bi-heart"></i> <button className='card7-btn'>Rent</button></div>
            </div>
          </div>
          <div className='card1'>
            <div className='card2'> <img src={image3} alt="" /></div>
            <div className='card3'>
              <h5>Volkswagen T-cross</h5>2020
            </div>
            <div className="card4">
              <div><i class="bi bi-people"></i>4 pepoles </div>
              <div> <i class="bi bi-fuel-pump-diesel"></i>Gasoline</div>
            </div>
            <div className="card5">
              <div><i class="bi bi-speedometer2"></i>5.3/1-L</div>
              <div><i class="bi bi-car-front-fill"></i>Automatic</div>
            </div>
            <div className="card6">
            </div>
            <div className="card7">
              <h2>400$</h2><div className='card7-1'>/month</div>
              <div className='card7-2'><i class="bi bi-heart"></i> <button className='card7-btn'>Rent</button></div>
            </div>
          </div>
        </div>
        <div className="cards container">
          <div className='card1'>
            <div className='card2'> <img src={image4} alt="" /></div>
            <div className='card3'>
              <h5>Cadillac Escalade</h5>2020
            </div>
            <div className="card4">
              <div><i class="bi bi-people"></i>4 pepoles </div>
              <div> <i class="bi bi-fuel-pump-diesel"></i>Gasoline</div>
            </div>
            <div className="card5">
              <div><i class="bi bi-speedometer2"></i>7.7/1-L</div>
              <div><i class="bi bi-car-front-fill"></i>Automatic</div>
            </div>
            <div className="card6">
            </div>
            <div className="card7">
              <h2>620$</h2><div className='card7-1'>/month</div>
              <div className='card7-2'><i class="bi bi-heart"></i> <button className='card7-btn'>Rent</button></div>
            </div>
          </div>
          <div className='card1'>
            <div className='card2'> <img src={image5} alt="" /></div>
            <div className='card3'>
              <h5>BMW 4 Series GTI</h5>2021
            </div>
            <div className="card4">
              <div><i class="bi bi-people"></i>4 pepoles </div>
              <div> <i class="bi bi-fuel-pump-diesel"></i>Gasoline</div>
            </div>
            <div className="card5">
              <div><i class="bi bi-speedometer2"></i>7.2/1-L</div>
              <div><i class="bi bi-car-front-fill"></i>Automatic</div>
            </div>
            <div className="card6">
            </div>
            <div className="card7">
              <h2>530$</h2><div className='card7-1'>/month</div>
              <div className='card7-2'><i class="bi bi-heart"></i> <button className='card7-btn'>Rent</button></div>
            </div>
          </div>
          <div className='card1'>
            <div className='card2'> <img src={image6} alt="" /></div>
            <div className='card3'>
              <h5>BMW 4 Series</h5>2021
            </div>
            <div className="card4">
              <div><i class="bi bi-people"></i>4 pepoles </div>
              <div> <i class="bi bi-fuel-pump-diesel"></i>Gasoline</div>
            </div>
            <div className="card5">
              <div><i class="bi bi-speedometer2"></i>7.2/1-L</div>
              <div><i class="bi bi-car-front-fill"></i>Automatic</div>
            </div>
            <div className="card6">
            </div>
            <div className="card7">
              <h2>490$</h2><div className='card7-1'>/month</div>
              <div className='card7-2'><i class="bi bi-heart"></i> <button className='card7-btn'>Rent</button></div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div>
            6 from 129
          </div>
          <div>
            <div class="btnm" >
              <button class="btn"><i class="bi bi-arrow-left"></i></button>
              <button class="btn">1</button>
              <button class="btn">2</button>
              <button class="btn">3</button>
              <button class="btn">4</button>
              <button class="btn">..</button>
              <button class="btn">18</button>
              <button class="btn">19</button>
              <button class="btn"><i class="bi bi-arrow-right"></i></button>

            </div>
          </div>
        </div>
      </div>



    </>
  )
}
