import styles from '../Styles/home.module.css';

function Home() {
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.welcome}>Welcome to our page</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem
          nibh, fringilla at malesuada vel, accumsan vitae tortor. Orci varius
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Pellentesque vitae nisi vel sapien egestas dapibus. Vivamus ut
          scelerisque velit. Aenean ex magna, ornare sit amet egestas et,
          scelerisque eu odio. Quisque dolor nisi, rhoncus ut tincidunt at, tempus
          eu nisi. Fusce gravida, quam sit amet imperdiet blandit, ipsum odio
          dictum arcu, sed rhoncus lacus quam et arcu. Praesent facilisis, felis
          id scelerisque lobortis, enim diam faucibus nunc, id hendrerit orci mi a
          elit. Fusce eu quam pretium, auctor lacus quis, vehicula urna.
          {' '}
          <br />
          <br />
          Vestibulum ultrices lorem ac nisi imperdiet accumsan. Vivamus interdum,
          velit id convallis volutpat, arcu enim posuere neque, sed scelerisque
          justo enim non turpis. Nunc nisl risus, volutpat quis dignissim ut,
          cursus in erat. Vivamus interdum nunc ipsum, ut elementum magna molestie
          id. Nullam in diam non nulla vulputate cursus sit amet vel erat.
          Phasellus tincidunt sapien quis lacinia malesuada. Cras convallis lectus
          dui, ut fermentum massa posuere vel. Donec turpis mi, posuere et odio
          ac, hendrerit varius purus. Nulla interdum rutrum ligula. Sed tempus
          nisl quis nibh tincidunt pharetra. Mauris ac ipsum massa. Ut non ligula
          fringilla, tristique lorem id, dictum nisi. Etiam hendrerit arcu non
          ultricies euismod. Nam commodo a mauris et lacinia. Cras justo leo,
          accumsan eget eros id, elementum scelerisque purus. Praesent vitae leo
          non justo mollis lobortis a ut libero.
        </p>
      </div>
    </>
  );
}

export default Home;
