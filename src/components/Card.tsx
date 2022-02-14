/** @format */

import React from "react";

type PropsTypes = {
  save: boolean;
  hover: boolean;
};

function Card({ save, hover }: PropsTypes) {
  return (
    <div
      className="card col-4 m-2 p-0"
      style={hover ? { width: "21rem" } : { transform: "scale(1.03)" }}
    >
      <div className="position-relative">
        <span className="position-absolute top-0 start-80 p-2 m-1 rounded-pill badge bg-light text-dark">
          {save ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="lightgray"
              className="bi bi-heart-fill me-2"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="red"
              className="bi bi-heart-fill me-2"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
              />
            </svg>
          )}
          Save
        </span>
        <img
          src="https://www.bing.com/images/search?view=detailV2&ccid=a3eUQRnY&id=DD3590E66BCE44DE5C64E0B7E99A95060E22B557&thid=OIP.a3eUQRnYL1tYz6o3eYCT8AHaFj&mediaurl=https%3a%2f%2fimg.agoda.net%2fhotelimages%2f187%2f187013%2f187013_Main.jpg&exph=2842&expw=3792&q=Hotel&simid=608039602644787184&FORM=IRPRST&ck=C50C57C1C9F8E15D0F426594F49AE126&selectedIndex=8&ajaxhist=0&ajaxserp=0"
          className="card-img-top"
          alt="..."
        ></img>
      </div>
      <div className="card-body">
        <h5 className="card-tital fs-2 fw-bold">Sea La Vie</h5>
        <div className="d-flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            fill="#0defd"
            className="bi bi-geo-alt-fill mt-1"
            // viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
            />
          </svg>
          <p className="text-primary text fw-bold mx-2">Alibagh, Maharasthra</p>
        </div>
        <p className="text-secondary text " style={{ fontSize: "12px" }}>
          Entire Villa | 3 Bedrooms | 6 Guests
        </p>
        <span
          className="badge rounded-pill text-dark p-2"
          style={{ backgroundColor: "lightgray" }}
        >
          Pet-Friendlt
        </span>
        <span
          className="badge rounded-pill text-dark p-2 mx-2"
          style={{ backgroundColor: "lightgray" }}
        >
          Free Cancellation
        </span>
        <div>
          <h6 style={{ display: "inline-block", padding: "4px" }}>4.5</h6>
          {[0, 1, 2, 3].map((i) => {
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="#ffdf00"
                className="bi bi-star-fill"
                viewBox="0 0 16 16"
                key={i}
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
            );
          })}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="lightgray"
            className="bi bi-star-fill"
            viewBox="0 0 16 16"
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg>
        </div>

        <div className="d-flex">
          <div>
            <h5 className="fw-bold d-flex my-0 fs-6"> &#8377; 1,48,680</h5>
            <p
              className="text-secondary text my-0"
              style={{ fontSize: "11px" }}
            >
              per night
            </p>
          </div>
          <p className="text-secondary text fw-6 mx-1 text-decoration-line-through">
            &#8377;40,400
          </p>
          <a href="/" className="btn btn-outline-primary ms-5">
            View Details
          </a>
        </div>
      </div>
    </div>
  );
}

Card.defaultProps = {
  save: true,
  hover: true,
};

export default Card;
