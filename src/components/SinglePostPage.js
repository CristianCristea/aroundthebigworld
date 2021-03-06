import React                from 'react';
import PropTypes            from 'prop-types';
import { Grid, Row, Col }   from 'react-bootstrap';
import Navigation           from '../components/Navigation';
import SmallHeader          from '../components/SmallHeader';
import SocialIconsNavbar    from '../components/SocialIconsNavbar';
import HeadingSecondary     from '../components/HeadingSecondary';
import Footer               from '../components/Footer';
import PageNotFound         from '../components/PageNotFound';

const SinglePostPage = ({posts, destinations, getCurrentPost, capitalizeWord, imageUrl, year, match}) => {
  // return the post that matches the URL param :name
  let currentPost = getCurrentPost(posts, match.params.name);

  // return the post page or 404 page
  let comp;
  currentPost
    ? comp =
        (<div>
          <Navigation destinations={destinations} capitalizeWord={capitalizeWord} />
          <SmallHeader imageUrl={currentPost.acf.header_image.url} positionY={50}></SmallHeader>
          <section className="article">
            <Grid>
              <Row>
                <Col xs={10} md={8} xsOffset={1} mdOffset={2}>
                  <HeadingSecondary title={currentPost.title.rendered} color="#333"/>
                  <p className="text" dangerouslySetInnerHTML={{__html: currentPost.content.rendered}}></p>
                </Col>
              </Row>
            </Grid>
          </section>
          <SocialIconsNavbar socialLinks={{facebook: 'http://facebook.com', instagram: 'http://instagram.com', mail: 'contact@aroundthebigworld.com'}} />
          <Footer year={year} />
        </div>
      )
      : comp = <PageNotFound title="Page Not Found"
                             imageUrl={imageUrl}
                             destinations={destinations}
                             capitalizeWord={capitalizeWord}
                             year={year} />;

  return comp;
}

export default SinglePostPage;

SinglePostPage.PropTypes = {
  posts:          PropTypes.object.isRequired,
  destinations:   PropTypes.array.isRequired,
  getCurrentPost: PropTypes.func.isRequired,
  year:           PropTypes.number.isRequired,
}
