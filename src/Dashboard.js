import Carousel from "react-bootstrap/Carousel";

export function Dashboard() {
  return (
    <div className="home">
      <div className="title">
        <h1> Student Teacher Management App</h1>
      </div>
      <div className="slides">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://img.freepik.com/free-vector/teacher-teaching-students-classroom-scene_1308-67531.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nob29sJTIwbWFuYWdlbWVudHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://pbs.twimg.com/media/EHEdQw8UUAA3soF.png"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
