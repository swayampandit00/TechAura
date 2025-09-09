import { useAuth } from "../store/auth";

export const Service = () => {
  const { services } = useAuth();

  return (
    <section className="section-services">
      <div className="container">
        <h1 className="main-heading">Services </h1>
      </div>

      <div className="container grid grid-three-cols">
        {services.map((curElem, index) => {
          const { price, description, provider, service } = curElem;

          return (
            <div className="card" key={index}>
              <div className="card-img">
                <img
                  src="/images/design.png"
                  alt="our services info"
                  width="200"
                />
              </div>

              <div className="card-details">
                <div className="grid grid-two-cols">
                  <p>{provider}</p>
                  <p>{price}</p>
                </div>
                <h2>{service}</h2>
                <p>{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
/*
[
  {
    "services":"web devlopment",
    "discription":"Creating tailor-made website and web application",
    "price":"1000-10000",
    "provider":"Tech  Solution Inc"
  },
  {
    "services":"E-commers website devlopment",
    "discription":"Buildind powerful  website and web application",
    "price":"1000-10000",
    "provider":"Tech  Solution Inc"
  },
  {
    "services":" Responsive web devlopment",
    "discription":"Creating tailor-made website and web application",
    "price":"1000-10000",
    "provider":"Tech  Solution Inc"
  },
  {
    "services":"Mobile app devlopment",
    "discription":"Creating tailor-made website and web application",
    "price":"1000-10000",
    "provider":"Tech  Solution Inc"
  },
  {
    "services":"word press devlopment",
    "discription":"Creating tailor-made website and web application",
    "price":"1000-10000",
    "provider":"Tech  Solution Inc"
  },
  {
    "services":"UI and UX services",
    "discription":"Creating tailor-made website and web application",
    "price":"1000-10000",
    "provider":"Tech  Solution Inc"
  },
]*/