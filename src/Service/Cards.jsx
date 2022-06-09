import React from 'react';

const Cards = (props) => {
  return (
    <>
           <div>
              <ul>
                      <li>
                          <div className="img-card iCard-style3">
                              <div className="card-content">
                                  <div className="card-image">
                              
                                      <img src={props.imgSrc} alt={props.title}/>
                                  </div>
                                  
                                  <div className="card-text">
                                      <p>
                                   
                                          {props.title}
                                      </p>
                                  </div>
                                  
                              </div>
                              
                              <div className="card-link">
                                  <a href={props.site}>
                                      <span>Go To Link</span>
                                  </a>
                              </div>

                          </div>                    
                      </li>

              </ul>
            </div>
    </>
  )
}

export default Cards;