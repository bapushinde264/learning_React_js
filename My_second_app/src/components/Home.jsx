import home1 from "../assets/home1.jpg";

const Home = () => {
  return (
    <div>
      <section>
        <div className="container">
          <div className="row align-items-center">

            <div className="col-md-6">
             <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, officia. Quisquam,
                voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,officia. Quisquam, voluptatibus. Lorem ipsum dolor sit 
                amet consectetur adipisicing elit. Doloribus, officia. Quisquam voluptatibus. Lorem ipsum 
                dolor sit amet consectetur adipisicing elit. Doloribus, officia. Quisquam,
                voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus, officia. Quisquam, voluptatibus. Lorem ipsum 
                dolor sit amet consectetur adipisicing elit. Doloribus, officia. Quisquam,
                
              </p>
            </div>

            <div className="col-md-6 mt-3">
              <img
                src={home1}
                className="img-fluid"
                alt="Home"
              />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
