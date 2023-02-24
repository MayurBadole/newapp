import React from "react";
import vg from "../Assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

function Home() {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TevhyStar</h1>
          <p>Solution to all your problem</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            When a custom control becomes disabled, remove it from the tab order
            by setting tabindex="-1". Note that disabled items within a grouped
            widget (such as menu items in a menu) should remain navigable using
            arrow keys.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who are you?</h1>
          <p>
            Setting the tabindex of the focused element to "0" ensures that if
            the user tabs away from the widget and then returns, the selected
            item within the group retains focus. Note that updating the tabindex
            to "0" requires also updating the previously selected item to
            tabindex="-1". This technique involves programmatically moving focus
            in response to key events and updating the tabindex to reflect the
            currently focused item. To do this: Bind a key down handler to each
            element in the group, and when an arrow key is used to move to
            another element: programmatically apply focus to the new element,
            update the tabindex of the focused element to "0", and update the
            tabindex of the previously focused element to "-1".
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>

            <div
              style={{
                animationDelay: "0.9s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default Home;
