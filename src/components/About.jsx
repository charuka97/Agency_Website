import React from "react";
import AboutImg from "../assets/aboutImg.png";
const About = () => {
  return (
    <div>
      {/* about text */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id="about">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <img src={AboutImg} alt="" />
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutralDGray font-semibold mb-4 md:w-4/5">
              The unseen of spending three years at Pixelgrade
            </h2>
            <p className="md:w-3/4 text-sm text-neutralGray mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </p>
            <button className="btn-primary">Learn more</button>
          </div>
        </div>
      </div>

      {/* company status */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg:neutralSilver py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-4xl text-neutralDGray font-semibold mb-4 md:w-2/3">
              Helping a local <br />
              <span className="text-brandPrimary">
                Business reinvent itself
              </span>
            </h2>
            <p>We reached here with our hard work dedication</p>
          </div>

          {/* status */}
          <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12S">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src="/src/assets/statusIcons/Icon1.png" alt="" />
                <div>
                  <h1 className="text-2xl text-neutralDGray font-semibold">
                    2,245,341
                  </h1>
                  <p>Members</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src="/src/assets/statusIcons/Icon2.png" alt="" />
                <div>
                  <h1 className="text-2xl text-neutralDGray font-semibold">
                    828,867
                  </h1>
                  <p>Event Bookings</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src="/src/assets/statusIcons/Icon3.png" alt="" />
                <div>
                  <h1 className="text-2xl text-neutralDGray font-semibold">
                    46,328
                  </h1>
                  <p>Clubs</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src="/src/assets/statusIcons/Icon1.png" alt="" />
                <div>
                  <h1 className="text-2xl text-neutralDGray font-semibold">
                    1,926,436
                  </h1>
                  <p>Payments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
