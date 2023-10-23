import './fronted.css';

export default function Navs(props){

    return(
       
        <>
           
          <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
                <a className="navbar-brand" href="#">NKII</a>
              </div>
              <div id="navbar" className="collapse navbar-collapse">
                <ul className="nav navbar-nav navbar-right">
                  <li className="active"><a href="#">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#portfolio">Portfolio</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
              {/*/.nav-collapse */}
            </div>
          </nav>
          {/* Header */}
          <header className="banner">
            <div className="container">
              <div className="col-lg-12">
                <img className="img-responsive center-block" src="https://api-assets.clashofclans.com/badges/200/m44uEqux13r-GkmdXdko2y7fil8p0S57uwKJJbHVZnc.png"/>
                <div className="intro-text">
                  <span className="naslov text-center">NKII - Najjaci Klan Idje Ikad</span>
                  <p className="tekst text-center">24/7 WAR! Dakle, klan za rat. Najjači klan iđe ikad. <br />1000+ trofeja za ulaz, 4+ level trupe se doniraju. <br /> Ako ih nemaš, obratiće ti se stević.</p>
                </div>
              </div>
         
              <div className="row"> {" "}
                <div className="col-lg-8 col-lg-offset-2 text-center">
                  <a href="#link" className="btn btn-lg btn-outline"><i className="fa fa-shield" /> ClashOfClans</a>
                  <a href="#link" className="btn btn-lg btn-outline"><i className="fa fa-fire fa-fw" /> Code Camp</a>
                  <a href="#link" className="btn btn-lg btn-outline"><i className="fa fa-facebook" /> Facebook</a>
                </div>
              </div>
           </div>
           {/* /.container */}
          </header>
          {/* About */}
          <section id="about">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h2>About</h2>
                  <hr className="star-primary" />
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6">
                  <img src="http://cdn.supercell.com/supercell.com/151120111628/all/themes/supercell/img/bg_clashofclans_character.png" className="img-responsive" alt=""/>
                </div>
        
                <div className="col-lg-6">
                  <p><strong>NKII</strong><br /><small>stands for "Najjaci klan idje ikad", founded 2015.</small><br /></p>
                  <div className="progress">
                    <div className="progress-bar progress-bar-success" style={{ width: "55%" }}><span className="sr-only">55% Complete (success)</span>55%achieved</div>
                    <div className="progress-bar progress-bar-info"style={{ width: "45%" }}><span className="sr-only">45% Complete (warning)</span>45% to go</div>
                </div>
                <p>
                  <strong>Clash of Clans</strong> is a superb game, freemium or
                  otherwise, with more nuance than most give it credit for. That's why
                  it's passed the test of time since its launch and still has an
                  active community devotedly constructing elaborate fortresses in the
                  hope of becoming invincible.
                </p>
                <p>
                  Clash of Clans is thus a simple game, but that’s more of a strength
                  than a weakness. It’s simple enough to provide quick, painless
                  matches on an iPhone in an idle moment, and there are enough
                  different units to choose from in the battle mode to make playing
                  against other players endlessly rewarding.
                </p>
                <p>
                  Best of all, the option to fight against NPC goblins gives Clash of
                  Clans a small edge over similar strategy games that rely almost
                  entirely on player-versus-player combat.
                </p>
              </div>
            </div>
           </div>
           {/* /.container */}
          </section>
          {/* Portfolio */}
          <section id="portfolio">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h2>Portfolio</h2>
                  <hr className="star-primary" />
                </div>
              </div>
              <div className="row">
                <div className="col-xs-6 col-md-3">
                  <a href="#" className="thumbnail"><img src="http://fakeimg.pl/270x190/?text=NKII%20portfolio%201&font=lato" alt="Portfolio 1"/></a>
                </div>
                <div className="col-xs-6 col-md-3">
                  <a href="#" className="thumbnail"><img src="http://fakeimg.pl/270x190/?text=NKII%20portfolio%202&font=lato" alt="Portfolio 2"/></a>
                </div>
                <div className="col-xs-6 col-md-3">
                  <a href="#" className="thumbnail"><img src="http://fakeimg.pl/270x190/?text=NKII%20portfolio%203&font=lato" alt="Portfolio 3"/></a>
                </div>
                <div className="col-xs-6 col-md-3">
                  <a href="#" className="thumbnail"><img src="http://fakeimg.pl/270x190/?text=NKII%20portfolio%204&font=lato" alt="Portfolio 4"/></a>
                </div>
                <div className="col-xs-6 col-md-3">
          <a href="#" className="thumbnail">
            <img
              src="http://fakeimg.pl/270x190/?text=NKII%20portfolio%205&font=lato"
              alt="Portfolio 5"
            />
          </a>
        </div>
        <div className="col-xs-6 col-md-3">
          <a href="#" className="thumbnail">
            <img
              src="http://fakeimg.pl/270x190/?text=NKII%20portfolio%206&font=lato"
              alt="Portfolio 6"
            />
          </a>
        </div>
        <div className="col-xs-6 col-md-3">
          <a href="#" className="thumbnail">
            <img
              src="http://fakeimg.pl/270x190/?text=NKII%20portfolio%207&font=lato"
              alt="Portfolio 7"
            />
          </a>
        </div>
        <div className="col-xs-6 col-md-3">
          <a href="#" className="thumbnail">
            <img
              src="http://fakeimg.pl/270x190/?text=NKII%20portfolio%208&font=lato"
              alt="Portfolio 8"
            />
          </a>
        </div>
      </div>
    </div>
    {/* /.container */}
  </section>
  {/* Contact */}
  <section id="contact">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2>Contact</h2>
          <hr className="star-primary" />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <p>
            Page was created as a project "
            <strong>Zipline: Build a Personal Portfolio Webpage</strong>" for
            Free Code Camp
          </p>
          <p>
            If you need to get in touch with me,
            <br /> try email ruzicic [@] gmail [.] com
          </p>
        </div>
        <div className="col-lg-6">
          <div className="embed-responsive-item">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106060.55008181452!2d-117.95986053127125!3d33.8279951552879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd2808fb8655ad%3A0x535d20ee21ffc70f!2sClash+of+Clans+Attack+Strategy!5e0!3m2!1ssr!2srs!4v1448058178196" width={580} height={400} frameBorder={0} style={{ border: 0 }} allowFullScreen=""/>
          </div>
        </div>
      </div>
    </div>
    {/* /.container */}
  </section>
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <ul className="list-inline">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <p>
            11761 <small>Total Points</small> 31 <small>Wars Won</small> War
            Frequency: <u>Always</u>
          </p>
        </div>
      </div>
    </div>
   
  </footer>
  </>
);
}