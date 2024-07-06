import PropTypes from "prop-types";
import clsx from "clsx";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { Pie } from "react-chartjs-2";
import 'chart.js/auto';
import Chatbot from "./Chatbot";

const ProductDescriptionTab = ({ spaceBottomClass, productFullDesc }) => {
  const data = {
    labels: ['Positive Review %', 'Negative Review %'],
    datasets: [
      {
        label: 'Reviews',
        data: [72, 28], 
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
          'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className={clsx("description-review-area", spaceBottomClass)}>
      <div className="container">
        <div className="description-review-wrapper">
          <Tab.Container defaultActiveKey="productDescription">
            <Nav variant="pills" className="description-review-topbar">
              <Nav.Item>
                <Nav.Link eventKey="additionalInfo">Additional Information</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="productDescription">Description</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="productReviews">Reviews(2)</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content className="description-review-bottom">
              <Tab.Pane eventKey="additionalInfo">
                <div className="product-anotherinfo-wrapper">
                  <ul>
                    <li><span>Weight</span> 400 g</li>
                    <li><span>Dimensions</span> 10 x 10 x 15 cm</li>
                    <li><span>Materials</span> 60% cotton, 40% polyester</li>
                    <li><span>Other Info</span> American heirloom jean shorts pug seitan letterpress</li>
                  </ul>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="productDescription">
                {productFullDesc}
              </Tab.Pane>
              <Tab.Pane eventKey="productReviews">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="review-wrapper">
                      <div className="single-review">
                        {/* <div className="review-img">
                          <img
                            src={process.env.PUBLIC_URL + "/assets/img/testimonial/1.jpg"}
                            alt=""
                          />
                        </div> */}
                    <div className="ratting-form-wrapper pl-50">
                      <h3>Add a Review</h3>
                      <div className="ratting-form">
                        <form action="#">
                          <div className="star-box">
                            <span>Your rating:</span>
                            <div className="ratting-star">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                            </div>
                          </div>
                          <div className="row">
                          
                           
                            <div className="col-md-12">
                              <div className="rating-form-style form-submit">
                                <textarea name="Your Review" placeholder="Message" defaultValue={""} />
                                <input type="submit" defaultValue="Submit" />
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                   {/* line with break */}
                    <br />
                    <hr style={{border: '1px solid #f9f9f9'}}></hr>
                    <br />

                  
                          <div className="review-top-wrap">
                            <div className="review-left">
                              <div className="review-name">
                                <h4>White Lewis</h4>
                              </div>
                              <div className="review-rating">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                              </div>
                            </div>
                            <div className="review-left">
                              <button>Reply</button>
                            </div>
                          </div>
                          <div className="review-bottom">
                            <p>
                              Vestibulum ante ipsum primis aucibus orci luctustrices posuere cubilia Curae Suspendisse
                              viverra ed viverra. Mauris ullarper euismod vehicula. Phasellus quam nisi, congue id nulla.
                            </p>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                
                  <div className="col-lg-6">
                    <div
                      style={{
                        backgroundColor: '#f9f9f9',
                        padding: '20px',
                        borderRadius: '10px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        textAlign: 'center'
                      }}
                    >
                      <div className="overall-rating" style={{ marginBottom: '20px' }}>
                        <h4>Overall Rating</h4>
                        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#f39c12' }}>4.5</div>
                        <div>
                          <i className="fa fa-star" style={{ color: '#f39c12', fontSize: '1.2rem' }} />
                          <i className="fa fa-star" style={{ color: '#f39c12', fontSize: '1.2rem' }} />
                          <i className="fa fa-star" style={{ color: '#f39c12', fontSize: '1.2rem' }} />
                          <i className="fa fa-star" style={{ color: '#f39c12', fontSize: '1.2rem' }} />
                          <i className="fa fa-star-half-o" style={{ color: '#f39c12', fontSize: '1.2rem' }} />
                        </div>
                      </div>
                      <h3>Rating Summary</h3>
                      <div style={{ maxWidth: '200px', margin: '0 auto' }}>
                        <Pie data={data} />
                      </div>
                      <div style={{ marginTop: '20px', fontStyle: 'italic', color: '#555' }}>
                        <h4>AI Summary</h4>
                        <p>
                          "Customers love the product's quality and design.
                          Many have mentioned the excellent customer service
                          and fast shipping. A few noted that the sizing can
                          be a bit small, so consider ordering a size up."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <Chatbot />
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    </div>
  );
};

ProductDescriptionTab.propTypes = {
  spaceBottomClass: PropTypes.string,
  productFullDesc: PropTypes.string
};

export default ProductDescriptionTab;
