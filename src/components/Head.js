import './Head.css';
import Header from './Header';
const Head = (props) => {
  const classes = "head"
    return(
      <div className={classes}>
      <div className="position-relative d-flex ">
        <div className='head'>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
          {/* when i change the id i have problems */}
          
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
  </div>
  <div className="carousel-inner d-inline-flex">
 
<div className="carousel-item active">
<Header sentence=" Hi there! If you are looking for beauty , you are in the right place! Welcome to SPA center" btntitle="Read More About SPA"/></div>
{/* if i put position-absolute i can not control the position and if i put fexed the button moved  */}

<div className="carousel-item">
<Header sentence="You can book at any time! And you only need small deposit of the amount!" btntitle="Book Now!"/></div>

<div className="carousel-item">
<Header sentence="Enjoy a Facial Treatment at Our Day Spa and Enhance Your Look with Our Salon Services" btntitle="See Oue Services"/></div>

<div className="carousel-item">
<Header sentence=" We have a lot of reliable global products that will suit everyone!" btntitle="See Our Products"/></div>

<div className="carousel-item">
<Header sentence="  What if you took a gift for yourself that includes a variety of everything we own?" btntitle="See our offers"/></div>

    </div>
   </div>
  </div>
  </div>
  </div>
    )
}

export default Head;