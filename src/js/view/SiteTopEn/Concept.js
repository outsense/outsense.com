import { h } from "hyperapp"; // @jsx h

export default () => state => (
  <section className="conceptEn">
    <h1>Concept</h1>
    <h2>
      With stability and safety, dramatically reducing cost of building
      facilities on the Moon
    </h2>
    <div className="gif"></div>
    <p>
      Our goal is to make 3D foldable structures in space, especially on the
      Moon (including manned and unmanned facilities).
    </p>
    <p>
      The basic concept is to reduce transportation costs by reducing the
      volume.
    </p>
    <p>
      Inflatable technology has similar concept, but because of its uncertainty
      behavior and not strong structure it is not suitable for operation on the
      Moon surface.
      <br />
      Also, ISRU technology such as 3D printing is expected as promising
      solution. However, terms for preparing the manufacturing environment won't
      be short, and there is some hurdles like ensuring seling. So, operation in
      the initial phase is not realistic.
    </p>
    <p>
      Origami thechnology has a great advantage in the operation in space
      because the stability of the mathematically defined behavior and the
      structual strength by using thick and rigid material.
      <br />
      It can accelerate the construction of the facility and the preparation for
      various business on the Moon in the initial phase.
    </p>
    <div className="useimage"></div>
  </section>
);
