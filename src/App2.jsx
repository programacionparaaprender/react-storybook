import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import CustomButton from './components/custom-button/custom-button.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="imposter">
      {/* Protones, electrones, neutrones */}
      <div className="protones">
        <h1 className="tittle">Título</h1>
        <h2 className="subtitle">Subtitulo</h2>
        <p className="text">Texto normal</p>
        <div className="circle circle--navy"></div>
        <div className="circle circle--teal"></div>
        <div className="circle circle--yellow"></div>
        <div className="circle circle--light-teal"></div>
      </div>

      {/* Atomos */}
      <div className="atomos">
        <img
          className="responsive--image"
          src="https://dummyimage.com/300x200/dedede/adadad.jpg"
          alt="dummy image"
        />
        <button className="button button--primary">Button primary</button>
        <button className="button button--secondary" title="Button Secondary">
          Button Secondary
        </button>
      </div>

      {/* Moleculas */}
       
      <div className="moleculas">

        <div className="card">
          <div className="card__img">
            <img
              className="responsive--image"
              src="https://dummyimage.com/300x200/dedede/adadad.jpg"
              alt="dummy image"
            />
          </div>
          <div className="card__info">
            <h1 className="tittle">Título</h1>
            <h2 className="subtitle">Subtitulo</h2>
            <p className="text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore,
              temporibus.
            </p>
          </div>
          <button className="button button--primary">Button Primary</button>
        </div>

      </div>

      {/* Organismos */}
      <div className="organismos">

        <div className="cards">

          <div className="card">
            <div className="card__img">
              <img
                className="responsive--image"
                src="https://dummyimage.com/300x200/dedede/adadad.jpg"
                alt="dummy image"
              />
            </div>
            <div className="card__info">
              <h1 className="tittle">Título</h1>
              <h2 className="subtitle">Subtitulo</h2>
              <p className="text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolore, temporibus.
              </p>
            </div>
            <button className="button button--primary">Button Primary</button>
          </div>

          <div className="card">
            <div className="card__img">
              <img
                className="responsive--image"
                src="https://dummyimage.com/300x200/dedede/adadad.jpg"
                alt="dummy image"
              />
            </div>
            <div className="card__info">
              <h1 className="tittle">Título</h1>
              <h2 className="subtitle">Subtitulo</h2>
              <p className="text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolore, temporibus.
              </p>
            </div>
            <button className="button button--primary">Button Primary</button>
          </div>

          <div className="card">
            <div className="card__img">
              <img
                className="responsive--image"
                src="https://dummyimage.com/300x200/dedede/adadad.jpg"
                alt="dummy image"
              />
            </div>
            <div className="card__info">
              <h1 className="tittle">Título</h1>
              <h2 className="subtitle">Subtitulo</h2>
              <p className="text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolore, temporibus.
              </p>
            </div>
            <button className="button button--primary">Button Primary</button>
          </div>

        </div>

      </div>

      { /* Demostración usando una plantilla */ }
      <div className="organismos">

          <div className="cards">
  
            <div className="card">
              <div className="card__img">
                <img
                  className="responsive--image"
                  src="https://images.unsplash.com/photo-1484863137850-59afcfe05386?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                  alt="dummy image"
                />
              </div>
              <div className="card__info">
                <h1 className="tittle">Hosting Premium</h1>
                <h2 className="subtitle">CO$ 39.900 AHORRA 75%</h2>
                <p className="text">El paquete ideal para sitios personales</p>
              </div>
              <button className="button button--primary">Añadir al carrito</button>
            </div>
  
            <div className="card">
              <div className="card__img">
                <img
                  className="responsive--image"
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="dummy image"
                />
              </div>
              <div className="card__info">
                <h1 className="tittle">Hosting Empresarial</h1>
                <h2 className="subtitle">CO$ 54.900 AHORRA 69%</h2>
                <p className="text">Optimizado para empresas y sitios de eCommerce</p>
              </div>
              <button className="button button--primary">Añadir al carrito</button>
            </div>
  
            <div className="card">
              <div className="card__img">
                <img
                  className="responsive--image"
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="dummy image"
                />
              </div>
              <div className="card__info">
                <h1 className="tittle">Cloud <br> Startup</br></h1>
                <h2 className="subtitle">CO$ 96.900 AHORRA 59%</h2>
                <p className="text">Optimizado para webs empresariales y de eCommerce</p>
              </div>
              <button className="button button--primary">Añadir al carrito</button>
            </div>
  
          </div>
  
        </div>

</div>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <div>
          {count}
        </div>
        <div>
          <CustomButton />
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count ++
        </button>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count - 1)}
        >
          Count --
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
