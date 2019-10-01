import React, { Component } from "react";

export default class Landing extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <h1 className="col-lg-12 text-center" id="abt-title">
            About Macole
          </h1>
          <br></br>
          <div className="col-lg-12">
            <div className="abt">
              <p>
                I am Macole Moody. I am a fashion innovator/skincare and
                wellness entrepreneur. My inspiration to design clothes comes
                from the Athleisure brands that are sold at Equinox inside “The
                Shop”, when I began working there in 2017. At “The Shop” I was
                able to be myself and do what I love to do, which was to sell
                clothes from different brands and network.{" "}
              </p>
              <p>
                My love for fashion strengthened once I started wearing these
                brands in the store and when I worked out. I truly believe that
                once you buy a brand and wear it in different ways, you can
                explain it to your best ability and know how to sell it if
                asked.{" "}
              </p>
              <p>
                Comfy Casual X Streetwear defines Get On Brand. I wanted to make
                my own brand that represented me in a way that was comfy, casual
                and <strong>On Brand</strong>. I created this line to be worn in
                many different ways not just one. Get On Brand is a brand that
                represents me, when I want to relax or go out, to have a good
                time and still look good.
              </p>
              <p>
                My brand is for everyone that likes representation advertised on
                their clothing from all angles. I want everybody that wears my
                brand to feel confident in my clothes and to own whatever
                setting they are in. Let’s get on brand together with this new
                fall collection, shop now.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
