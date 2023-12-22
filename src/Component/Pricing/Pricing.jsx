import img1 from '../../assets/20.png'
import img2 from '../../assets/40.jpg'
import img3 from '../../assets/100.png'
import { Link } from 'react-router-dom';

const Pricing = () => {
    return (
        <div>
          <h2 className="text-4xl font-bold text-center">Choose Best Price</h2>
            <div className="grid grid-cols-3 justify-center">
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img1} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">20%!</h2>
    <p>Be partner of 20% share</p>
    <div className="card-actions">
    <Link to='/login'><button className="btn btn-primary">Register now</button></Link>
    </div>
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img2} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">40%!</h2>
    <p>Be partner of 40% share</p>
    <div className="card-actions">
      <Link to='/login'><button className="btn btn-primary">Register now</button></Link>
    </div>
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img3} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">100%!</h2>
    <p>Be partner of 100% share</p>
    <div className="card-actions">
    <Link to='/login'><button className="btn btn-primary">Register now</button></Link>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default Pricing;