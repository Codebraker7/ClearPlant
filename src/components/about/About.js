import React from 'react';
import { Link } from 'react-router-dom';
import Contact from '../layout/Contact'

const About = () => {
  return (
    <div className="about">
      <h1>What We Do</h1>
      <h2>Sub Heading</h2>
      <img
        src="https://img.freepik.com/free-photo/solar-panels-roof-solar-cell_335224-1324.jpg?w=2000"
        alt=""
      />
      <div className="mid-panel">
        <h1>About Us</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
          iure repudiandae, molestiae modi, ipsum expedita optio distinctio fuga
          reprehenderit assumenda vel in possimus et quae doloremque ea. Iusto
          natus commodi labore odio facere veritatis, architecto eligendi, eum
          dolore, quasi in? Beatae deserunt architecto libero velit dolorem
          dolorum eligendi repudiandae perferendis, alias maiores, delectus a
          dignissimos est neque quia aut id dolores odit vel nihil iure
          accusantium blanditiis enim eaque. Quos officiis in quas et quasi
          consectetur, tempore aperiam ipsam facere similique eius corporis
          doloremque laborum officia. Vero ducimus nostrum eligendi cum quas
          veritatis error ipsa? Voluptatem pariatur cumque exercitationem
          recusandae perspiciatis excepturi sit facere, odit accusantium dolor
          quae nobis praesentium unde itaque optio veniam ullam iusto. Molestias
          maiores veniam suscipit vel animi repellendus a laboriosam
          perspiciatis voluptas at itaque deleniti voluptatibus, cum sed
          quisquam ab mollitia. Sunt corporis at tempora officia esse, suscipit
          cum repudiandae cupiditate asperiores soluta natus provident velit?
          Excepturi eligendi nulla minus veniam est esse quidem, tempora
          repudiandae sequi aspernatur quas labore similique soluta accusamus
          eius, iure praesentium debitis quo! Mollitia impedit quo, officiis
          tempore dolorum recusandae unde, placeat hic eligendi atque quia minus
          animi! Quisquam, harum. Reprehenderit reiciendis harum sed temporibus
          consectetur odit adipisci optio fugiat?
        </p>
        <Link to="/mission" className='mission-link'>Our Mission</Link>
      </div>
      <div>
        <h1>Footer</h1>
      </div>
      <Contact />
    </div>
  );
};

export default About;
