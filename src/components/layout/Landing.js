import React from 'react';
import ClearPlantLogo from '../../Images/ClearPlantLogo.png';

const Landing = () => {
  return (
    <div className="landing">
      <div className="left-panel">
        <h1>Title</h1>
        <h2>
          "Shining a Green Light on Solar Panel Recycling: Turning Waste into
          Sustainable Solutions"
        </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
          obcaecati facere blanditiis animi illo veritatis qui porro! Voluptatum
          maiores deleniti tempore eum, quam dolorum consequuntur placeat. Atque
          inventore ad expedita architecto sequi, eligendi cumque tenetur
          temporibus, culpa laboriosam dolorum? Cupiditate est dolores officiis
          eius. Impedit, officiis blanditiis. Culpa, tempora quae voluptatem
          doloremque vitae reiciendis! Ipsum atque blanditiis, eius vel ducimus
          optio voluptatibus aspernatur dolorem aliquid cumque fuga temporibus
          nam! Accusantium officiis deleniti porro sequi, ipsam eveniet omnis ab
          distinctio, reprehenderit dolor corporis sed, adipisci eligendi
          similique praesentium nemo! Voluptatem, fugit nulla! Facilis
          doloremque necessitatibus placeat voluptates quae blanditiis autem
          animi!
        </p>
      </div>
      <img
        src="https://img.freepik.com/free-photo/solar-panels-roof-solar-cell_335224-1324.jpg?w=2000"
        alt=""
      />
      <div className="right-panel">
        <img
          className="img1"
          src="https://media.istockphoto.com/id/1328689113/photo/summer-blue-sky-and-white-cloud-white-background-beautiful-clear-cloudy-in-sunlight-calm.jpg?s=612x612&w=0&k=20&c=37qEuwdxyQSx9kuS-_Gz0WiKFX6jMXZN9aRY47mN2vI="
          alt=""
        />
        <img
          className="logo"
          src={ClearPlantLogo}
          alt=""
        />
      </div>
    </div>
  );
};

export default Landing;
