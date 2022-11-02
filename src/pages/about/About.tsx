import AboutWrapper from "./AboutWrapper"

const About = () => {
  return (
    <AboutWrapper>
      <article className="figure">
        <figure>
          <img src="https://images.unsplash.com/photo-1597045566677-8cf032ed6634?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="sneaker" className="sneaker"/>
        </figure>
      </article>
      <article className="history">
        <h2>Our history</h2>
        <p>
          Established in New York City over fifteen years ago, Sneak Shop revolutionized sneaker 
          retail as the original consignment store for rare shoes. Carrying the rarest exclusives 
          and collectible sneakers, Sneak Shop has evolved from a one-stop sneaker destination, 
          to a cultural hub for sneaker enthusiasts and novices alike. With three brick-and-mortar 
          locations in New York City, Los Angeles and Miami, Sneak Shop remains the premier source 
          for authentic, rare sneakers.
        </p>
      </article>
    </AboutWrapper>
  )
}

export default About