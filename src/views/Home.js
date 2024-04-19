import Carousel from '../components/Carousel';
import Form from '../components/Form';

function Home() {
  return (
    <div className="home-page">
      <div className="screen1-bg">
        <div className="screen1-moto"> 
          Motto / two words about it    
        </div>
      </div>
      
      <Carousel itemsLimit={5}/>
      
      <div className="discount-section">
        <div className='inner-text'>
          <h2>10% discount</h2>
          <p>Some convincing text about your products.</p>
          <Form />
        </div>
        
      </div>
      
      <section className="reasons-section">
        BulletList
      </section>
      
      <section className="FAQ">
      </section>

    </div>
  );
  } 
  export default Home;