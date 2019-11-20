import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'
import thumb07 from '../assets/images/thumbs/07.jpg'
import thumb08 from '../assets/images/thumbs/08.jpg'
import thumb09 from '../assets/images/thumbs/09.jpg'
import thumb10 from '../assets/images/thumbs/10.jpg'
import thumb11 from '../assets/images/thumbs/11.jpg'
import thumb12 from '../assets/images/thumbs/12.jpg'
import thumb13 from '../assets/images/thumbs/13.jpg'
import thumb14 from '../assets/images/thumbs/14.jpg'
import thumb15 from '../assets/images/thumbs/15.jpg'
import thumb16 from '../assets/images/thumbs/16.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'
import full07 from '../assets/images/fulls/07.jpg'
import full08 from '../assets/images/fulls/08.jpg'
import full09 from '../assets/images/fulls/09.jpg'
import full10 from '../assets/images/fulls/10.jpg'
import full11 from '../assets/images/fulls/11.jpg'
import full12 from '../assets/images/fulls/12.jpg'
import full13 from '../assets/images/fulls/13.jpg'
import full14 from '../assets/images/fulls/14.jpg'
import full15 from '../assets/images/fulls/15.jpg'
import full16 from '../assets/images/fulls/16.jpg'




const DEFAULT_IMAGES = [
  {
    id: '1',
    source: full01,
    thumbnail: thumb01,
    caption: 'Save A Life',
    description:
      'This site is about providing a platform for living kidney donors and potential recipients to be matched by blood type and connect using Socket.io (Chat room), Full Stack ReactJS, React-Redux,NodeJS, PostgreSQL, Express, Twilio, Stripe, Javascript, AJAX, Styled-Components, CSS, HTML',
  },
  {
    id: '2',
    source: full02,
    // thumbnail: thumb02,
    // caption: 'Create A Profile',
    // description:
    //   'Create a profile Donor or Donee and be matched by blood type .',
  },
  {
    id: '3',
    source: full03,
    // thumbnail: thumb03,
    // caption: 'Chat Room S.A.L.',
    // description: 'Enter a chat room with other donors or donees.',
  },
  {
    id: '4',
    source: full04,
    // thumbnail: thumb04,
    // caption: 'Donate',
    // description: 'Using stripe technology make a donation.',
  },
  {
    id: '5',
    source: full05,
    // thumbnail: thumb05,
    // caption: 'Photo 5',
    // description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '6',
    source: full06,
    // thumbnail: thumb06,
    // caption: 'Photo 6',
    // description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
]

const TRUCK_IMAGES = [
  {
    id: '7',
    source: full07,
    thumbnail: thumb07,
    caption: 'What the truck?',
    description:
      'This site informs you of location of food trucks in your area, and allows you to follow a truck and be alerted via text (location,date,time) if they create an event or join one. Full Stack ReactJS, React-Redux, NodeJS, Express, PostgreSQL, Twilio, Google Geocode & Google Map API, AJAX,Javascript, SAAS, HTML, Mobile Responsive',
  },
  {
    id: '8',
    source: full08,
    // thumbnail: thumb02,
    // caption: '',
    // description:
    //   'Create a profile Donor or Donee and be matched by blood type .',
  },
  {
    id: '9',
    source: full09,
    // thumbnail: thumb03,
    // caption: 'Chat Room S.A.L.',
    // description: 'Enter a chat room with other donors or donees.',
  },
  {
    id: '10',
    source: full10,
    // thumbnail: thumb04,
    // caption: 'Donate',
    // description: 'Using stripe technology make a donation.',
  },
  {
    id: '11',
    source: full11,
    // thumbnail: thumb05,
    // caption: 'Photo 5',
    // description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '12',
    source: full12,
    // thumbnail: thumb06,
    // caption: 'Photo 6',
    // description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '13',
    source: full13,
    // thumbnail: thumb06,
    // caption: 'Photo 6',
    // description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '14',
    source: full14,
    // thumbnail: thumb06,
    // caption: 'Photo 6',
    // description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '15',
    source: full15,
    // thumbnail: thumb06,
    // caption: 'Photo 6',
    // description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  }, 
  {
    id: '16',
    source: full16,
    // thumbnail: thumb06,
    // caption: 'Photo 6',
    // description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  }
]

class HomeIndex extends React.Component {
  render() {
    const siteTitle = 'Gatsby Starter - Strata'
    const siteDescription = 'Site description'

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <div id="main">
          <section id="one">
            <header className="major">
              <h2>
                Web Developer Social Entrepeneur Extrovert
                <br />
                Lover of Life
              </h2>
            </header>
            <p>
              I'm a huge Harry Potter fan (Who isn't right?) and yes I have read
              each book in the series. I'm a true extrovert and enjoy working
              with people in all areas from web development, business, social
              activism , and recently started coding and it's opened my eyes to
              endless posssibilities of creating a positive impact on a larger
              scale. <br />
              Not for the light hearted tell you that. I've build a few
              applications that required me to push myself and learn new
              technologies such as Twilio, socket.io, and Stripe. I'm truly
              excited to see where this developing skill set will take me and
              how I can help others through this medium.
            </p>
            <ul className="actions">
              <li>
                <a href="#" className="button">
                  
                </a>
              </li>
            </ul>
          </section>

          <section id="two">
            <h2>Projects</h2>

            <Gallery
              images={DEFAULT_IMAGES.map(
                ({ id, source, thumbnail, caption, description }) => ({
                  source,
                  thumbnail,
                  caption,
                  description,
                })
              )}
              
            />

            <Gallery
              images={TRUCK_IMAGES.map(
                ({ id, source, thumbnail, caption, description }) => ({
                  source,
                  thumbnail,
                  caption,
                  description,
                })
              )}
            />
            
            
            <ul className="actions">
              <li>
                <a href="#" className="button">
                  Smaller Projects
                </a>
              </li>
            </ul>
          </section>

          <section id="three">
            <h2>Let's Connect</h2>
            <h3>Would love to hear from you</h3>
            <div className="row">
              <div className="8u 12u$(small)">
                <form method="post" action="#">
                  <div className="row uniform 50%">
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                      />
                    </div>
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="12u">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Message"
                        rows="4"
                      ></textarea>
                    </div>
                  </div>
                </form>
                <ul className="actions">
                  <li>
                    <input type="submit" value="Send Message" />
                  </li>
                </ul>
              </div>
              <div className="4u 12u$(small)">
                <ul className="labeled-icons">
                  <li>
                    <h3 className="icon fa-envelope-o">
                      <span className="label">Email</span>
                    </h3>
                    <a href="#">E.Fonseca19@outlook.com</a>
                  </li>
                  <li>
                    <h3 className="icon fa-envelope-o">
                      <span className="label">LinkedIn</span>
                    </h3>
                    <a href="#">https://www.linkedin.com/in/ericefonseca/</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
