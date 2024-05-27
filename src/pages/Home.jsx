import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="container">
      <div className="row">
        <h1 className="text-white fw-bold p-5">Welcome to Our House of Professionals</h1>
      </div>
        <div className="row gy-5">
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <div class="card profile-card-1">
              <h1 className="text-color">Add Catagory</h1>
              <img
                src="/src/assets/bg-img.jpg"
                alt="profile-sample1"
                class="background"
              />
              <div class="card-content">
                <p className="text-secondary">
                  {" "}
                  If you want to create a query catagory then click on it
                </p>
                <div class="icon-block">
                  <Link to="/catagory" class="animated-button12">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                   <div class="text-size-sm">Catagory</div> 
                 </Link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <div class="card profile-card-1">
              <h1 className="text-color">Add Sub Catagory</h1>
              <img
                src="/src/assets/bg-img.jpg"
                alt="profile-sample1"
                class="background"
              />
              <div class="card-content">
                <p className="text-secondary">
                  {" "}
                  If you want to create a Sub Catagory then click on it
                </p>
                <div class="icon-block">
                  <Link to="/catagory" class="animated-button12">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                 <div className="text-size-sm">S-Catagory</div>   
                 </Link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <div class="card profile-card-1">
              <h1 className="text-color">Check Status</h1>
              <img
                src="/src/assets/bg-img.jpg"
                alt="profile-sample1"
                class="background"
              />
              <div class="card-content">
                <p className="text-secondary">
                  {" "}
                  If you want to add Student then click on it
                </p>
                <div class="icon-block">
                  <Link to="/catagory" class="animated-button12">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div class="text-size-sm">Status</div>
                 </Link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <div class="card profile-card-1">
              <h1 className="text-color">Register From</h1>
              <img
                src="/src/assets/bg-img.jpg"
                alt="profile-sample1"
                class="background"
              />
              <div class="card-content">
                <p className="text-secondary">
                  {" "}
                  If you want to check a Status then click on it
                </p>
                <div class="icon-block">
                  <Link to="/registeration" class="animated-button12">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div class="text-size-sm">Registeration</div>
                 </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
