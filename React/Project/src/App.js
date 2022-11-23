import iconclose from './icon-close.svg';
import newyorker from './new_yorker.jpeg';
import pietro0 from './pietro-0-10.svg';
import pietro1 from './pietro1-10.svg';
import qrcode from './qr-code.svg'; 
function App() {
  return ( <div>
<header>
      <div className="floor">
        <h3>Poziom 1</h3>
      </div>
      <div className="black-box" />
    </header>
    <main>
      <div className="search">
        <div className="floors">
          <p className="label">Poziom</p>
          <div className="list">
            <button className="item" data-switch-floor={1}>1</button>
            <button className="item current" data-switch-floor={2}>0</button>
          </div>
        </div>
        <div className="main-search">
          <div className="map">
            <div className="map-box active-floor-2" id="sketchContainer" style={{height: '694px', transform: 'none', transformOrigin: '50% 50% 0px', cursor: 'move'}}>
              <div id="floor0" className="floor-position-1">
                <img src={pietro1} className="pietro1"  alt="pietro1" />
              </div>
              <div id="floor1" className="floor-position-2">
                <img src={pietro0} className="pietro0" alt="pietro0" />
              </div>
            </div>
            <div data-store-logo className="shop-logo">
              <img src={newyorker} className="newyorker" alt="newyorker" />
            </div>
          </div>
          <div className="shops-list">
            <div className="container-stores">
              <form data-search-store action>
                <div className="main-search-box">
                  <input type="text" name id placeholder="Wpisz nazwę sklepu" />
                </div>
              </form>
              <ul data-list-stores className="mCustomScrollbar _mCS_1">
                <div id="mCSB_1" className="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside" style={{maxHeight: 'none'}} tabIndex={0}>
                  <div id="mCSB_1_container" className="mCSB_container" style={{position: 'relative', top: 0, left: 0}} dir="ltr">
                    <li className="title">a-z-9</li>
                    <li><button data-open-store={8}>4F</button></li>
                    <li><button data-open-store={11}>50Style</button></li>
                    <li className="title">a</li>
                    <li><button data-open-store={13}>A.Blikle</button></li>
                    <li><button data-open-store={213}>Allegro</button></li>
                    <li><button data-open-store={17}>Apart</button></li>
                    <li><button data-open-store={131}>AQUAEL ZOO</button></li>
                    <li><button data-open-store={217}>Arcade</button></li>
                    <li><button data-open-store={27}>Arianos Kebab</button></li>
                    <li className="title">b</li>
                    <li><button data-open-store={9}>Bacówka</button></li>
                    <li><button data-open-store={211}>Bafra Kebab</button></li>
                    <li><button data-open-store={12}>Betito</button></li>
                    <li><button data-open-store={209}>Beza krówka</button></li>
                    <li><button data-open-store={193}>Bierhalle</button></li>
                    <li><button data-open-store={192}>Bijou Brigitte</button></li>
                    <li><button data-open-store={161}>BOBOQ</button></li>
                    <li><button data-open-store={191}>Bumbusie</button></li>
                    <li><button data-open-store={16}>Burger King</button></li>
                    <li><button data-open-store={20}>Bytom</button></li>
                    <li className="title">c</li>
                    <li><button data-open-store={24}>Calzedonia</button></li>
                    <li><button data-open-store={30}>Camille Albane</button></li>
                    <li><button data-open-store={34}>Carrefour</button></li>
                    <li><button data-open-store={115}>CARRY Piętro 0</button></li>
                    <li><button data-open-store={202}>CARRY Piętro 1</button></li>
                    <li><button data-open-store={38}>CCC</button></li>
                    <li><button data-open-store={187}>CHACZAPURI</button></li>
                    <li><button data-open-store={186}>Cholewiński</button></li>
                    <li><button data-open-store={184}>Ciasta Domowe R. Gajewski</button></li>
                    <li><button data-open-store={15}>Cinema City</button></li>
                    <li><button data-open-store={18}>City Wash</button></li>
                    <li><button data-open-store={183}>Coccodrillo&nbsp;</button></li>
                    <li><button data-open-store={181}>CoWork Cafe</button></li>
                    <li><button data-open-store={19}>Cropp</button></li>
                    <li><button data-open-store={180}>Cukiernia Sowa</button></li>
                    <li><button data-open-store={179}>Czas na Herbatę</button></li>
                    <li className="title">d</li>
                    <li><button data-open-store={178}>Dealz</button></li>
                    <li><button data-open-store={119}>Deichmann</button></li>
                    <li><button data-open-store={177}>DIVERSE</button></li>
                    <li><button data-open-store={176}>Douglas</button></li>
                    <li><button data-open-store={174}>Dreams &amp; Gifts</button></li>
                    <li><button data-open-store={173}>DUKA</button></li>
                    <li className="title">e</li>
                    <li><button data-open-store={162}>Egurrola Dance Studio</button></li>
                    <li><button data-open-store={172}>Elite Sport Food</button></li>
                    <li><button data-open-store={117}>empik</button></li>
                    <li><button data-open-store={163}>Enel Med</button></li>
                    <li><button data-open-store={171}>enel-med sklep medyczny</button></li>
                    <li><button data-open-store={170}>eobuwie.pl</button></li>
                    <li><button data-open-store={169}>Etam</button></li>
                    <li><button data-open-store={76}>Excellent Office</button></li>
                    <li className="title">f</li>
                    <li><button data-open-store={168}>Fikołki</button></li>
                    <li><button data-open-store={167}>Flying Tiger Copenhagen</button></li>
                    <li><button data-open-store={166}>FONMIX</button></li>
                    <li className="title">g</li>
                    <li><button data-open-store={138}>Galeria Milano</button></li>
                    <li><button data-open-store={165}>Gatta</button></li>
                    <li><button data-open-store={98}>Green Caffe Nero</button></li>
                    <li><button data-open-store={159}>Greenpoint</button></li>
                    <li><button data-open-store={210}>Grill%Beer</button></li>
                    <li><button data-open-store={198}>Grycan</button></li>
                    <li><button data-open-store={219}>Gudi Home</button></li>
                    <li><button data-open-store={100}>GUESS</button></li>
                    <li className="title">h</li>
                    <li><button data-open-store={137}>H&amp;M Piętro 0</button></li>
                    <li><button data-open-store={204}>H&amp;M Piętro 1</button></li>
                    <li><button data-open-store={156}>Hair Styling Team</button></li>
                    <li><button data-open-store={126}>HalfPrice Piętro 0</button></li>
                    <li><button data-open-store={201}>HalfPrice Piętro 1</button></li>
                    <li><button data-open-store={74}>Hebe</button></li>
                    <li><button data-open-store={22}>home&amp;you</button></li>
                    <li><button data-open-store={129}>Homla</button></li>
                    <li><button data-open-store={199}>House</button></li>
                    <li className="title">i</li>
                    <li><button data-open-store={160}>ING Bank Śląski</button></li>
                    <li><button data-open-store={158}>INGLOT</button></li>
                    <li><button data-open-store={212}>InPost</button></li>
                    <li><button data-open-store={25}>Intersport</button></li>
                    <li><button data-open-store={157}>Intimissimi</button></li>
                    <li><button data-open-store={79}>Iqos</button></li>
                    <li><button data-open-store={144}>iSpot</button></li>
                    <li><button data-open-store={155}>ITAKA</button></li>
                    <li className="title">j</li>
                    <li><button data-open-store={147}>Jankes</button></li>
                    <li><button data-open-store={154}>JUNIOR</button></li>
                    <li className="title">k</li>
                    <li><button data-open-store={149}>Kantor Exchange Group</button></li>
                    <li><button data-open-store={153}>KAPPAHL</button></li>
                    <li><button data-open-store={142}>Karl Lagerfeld</button></li>
                    <li><button data-open-store={111}>KFC</button></li>
                    <li><button data-open-store={152}>KODANO Optyk</button></li>
                    <li><button data-open-store={150}>KRAY-GREY</button></li>
                    <li><button data-open-store={120}>KUBENZ</button></li>
                    <li className="title">l</li>
                    <li><button data-open-store={146}>LANĈERTO</button></li>
                    <li><button data-open-store={221}>Lee Cooper</button></li>
                    <li><button data-open-store={214}>Lodolandia</button></li>
                    <li><button data-open-store={86}>Lotto</button></li>
                    <li><button data-open-store={143}>Lynx Optique</button></li>
                    <li className="title">m</li>
                    <li><button data-open-store={124}>M&amp;M Gold</button></li>
                    <li><button data-open-store={50}>Magia d'italia</button></li>
                    <li><button data-open-store={48}>MANGO</button></li>
                    <li><button data-open-store={141}>Martes Sport</button></li>
                    <li><button data-open-store={26}>mBank</button></li>
                    <li><button data-open-store={71}>McDonald's</button></li>
                    <li><button data-open-store={140}>Media Expert</button></li>
                    <li><button data-open-store={139}>Medicine</button></li>
                    <li><button data-open-store={107}>Millenium Bank</button></li>
                    <li><button data-open-store={136}>MOHITO</button></li>
                    <li><button data-open-store={135}>Monnari</button></li>
                    <li><button data-open-store={51}>My Shop</button></li>
                    <li className="title">n</li>
                    <li><button data-open-store={133}>NeoNail</button></li>
                    <li><button data-open-store={28}>New Balance</button></li>
                    <li><button data-open-store={29}>New Yorker</button></li>
                    <li><button data-open-store={132}>NEWBIE</button></li>
                    <li className="title">o</li>
                    <li><button data-open-store={130}>OKAIDI</button></li>
                    <li><button data-open-store={128}>Olimp</button></li>
                    <li><button data-open-store={127}>Olimp Store</button></li>
                    <li><button data-open-store={123}>ONLY</button></li>
                    <li><button data-open-store={53}>Orange</button></li>
                    <li className="title">p</li>
                    <li><button data-open-store={122}>Pako Lorente</button></li>
                    <li><button data-open-store={43}>PANDORA</button></li>
                    <li><button data-open-store={55}>Paris Optique</button></li>
                    <li><button data-open-store={57}>Pasmanteria Szpileczka</button></li>
                    <li><button data-open-store={121}>PEPCO</button></li>
                    <li><button data-open-store={104}>Pizza Hut</button></li>
                    <li><button data-open-store={97}>Play</button></li>
                    <li><button data-open-store={220}>Pocket store</button></li>
                    <li><button data-open-store={69}>Poczta Polska</button></li>
                    <li><button data-open-store={118}>Pralnia EBS</button></li>
                    <li><button data-open-store={116}>PUCCINI</button></li>
                    <li><button data-open-store={114}>Puma</button></li>
                    <li className="title">q</li>
                    <li><button data-open-store={45}>QUIOSQUE</button></li>
                    <li className="title">r</li>
                    <li><button data-open-store={113}>Rainbow</button></li>
                    <li><button data-open-store={112}>Recman</button></li>
                    <li><button data-open-store={92}>Reserved Piętro 0</button></li>
                    <li><button data-open-store={200}>Reserved Piętro 1</button></li>
                    <li><button data-open-store={72}>Rossmann</button></li>
                    <li><button data-open-store={66}>RTV Euro AGD</button></li>
                    <li><button data-open-store={110}>Ryłko</button></li>
                    <li className="title">s</li>
                    <li><button data-open-store={101}>Saffiano</button></li>
                    <li><button data-open-store={68}>Salad Story</button></li>
                    <li><button data-open-store={106}>Samsung Brand Store</button></li>
                    <li><button data-open-store={10}>Santander Bank Polska</button></li>
                    <li><button data-open-store={109}>Sephora</button></li>
                    <li><button data-open-store={105}>Shizen</button></li>
                    <li><button data-open-store={103}>Sinsay Piętro 0</button></li>
                    <li><button data-open-store={203}>Sinsay Piętro 1</button></li>
                    <li><button data-open-store={61}>Sizeer</button></li>
                    <li><button data-open-store={60}>Smoke</button></li>
                    <li><button data-open-store={89}>SMYK</button></li>
                    <li><button data-open-store={96}>Sony Centre</button></li>
                    <li><button data-open-store={58}>Starbucks</button></li>
                    <li><button data-open-store={95}>SUBWAY</button></li>
                    <li><button data-open-store={93}>Super-Pharm</button></li>
                    <li className="title">Ś</li>
                    <li><button data-open-store={32}>Świat Książki</button></li>
                    <li className="title">s</li>
                    <li><button data-open-store={91}>SWISS</button></li>
                    <li className="title">t</li>
                    <li><button data-open-store={64}>T-Mobile</button></li>
                    <li><button data-open-store={90}>TATUUM</button></li>
                    <li><button data-open-store={218}>Tchibo</button></li>
                    <li><button data-open-store={88}>Tea&amp;Tea</button></li>
                    <li><button data-open-store={208}>Telakces.com Piętro 0</button></li>
                    <li><button data-open-store={185}>Telakces.com Piętro 1</button></li>
                    <li><button data-open-store={87}>Tescoma</button></li>
                    <li><button data-open-store={85}>Thai Wok</button></li>
                    <li><button data-open-store={205}>The Beer Store</button></li>
                    <li><button data-open-store={65}>The North Face</button></li>
                    <li><button data-open-store={83}>Time for Wax&nbsp;</button></li>
                    <li><button data-open-store={81}>TIMETREND</button></li>
                    <li><button data-open-store={82}>TK Maxx</button></li>
                    <li><button data-open-store={80}>TOUS</button></li>
                    <li><button data-open-store={78}>Triumph</button></li>
                    <li><button data-open-store={77}>TUI</button></li>
                    <li className="title">u</li>
                    <li><button data-open-store={75}>Unisono</button></li>
                    <li className="title">v</li>
                    <li><button data-open-store={36}>Vanila</button></li>
                    <li><button data-open-store={73}>VENEZIA</button></li>
                    <li><button data-open-store={59}>Vision Express</button></li>
                    <li><button data-open-store={33}>Vissavi</button></li>
                    <li><button data-open-store={70}>VISTULA</button></li>
                    <li><button data-open-store={67}>vuse inspiration store</button></li>
                    <li className="title">w</li>
                    <li><button data-open-store={37}>W.KRUK</button></li>
                    <li><button data-open-store={63}>Wakacje.pl</button></li>
                    <li><button data-open-store={62}>Winestory</button></li>
                    <li><button data-open-store={56}>WITTCHEN</button></li>
                    <li><button data-open-store={42}>Wojas</button></li>
                    <li><button data-open-store={49}>Wólczanka</button></li>
                    <li><button data-open-store={47}>Wrangler</button></li>
                    <li><button data-open-store={46}>Wyjątkowy Prezent</button></li>
                    <li className="title">x</li>
                    <li><button data-open-store={41}>X-kom</button></li>
                    <li className="title">y</li>
                    <li><button data-open-store={39}>YES</button></li>
                    <li><button data-open-store={44}>Yves Rocher</button></li>
                    <li className="title">Ż</li>
                    <li><button data-open-store={31}>Żabka</button></li>
                    <li className="title">z</li>
                    <li><button data-open-store={40}>Zdrofit</button></li>
                    <li><button data-open-store={35}>ZIAJA</button></li>
                  </div>
                  <div id="mCSB_1_scrollbar_vertical" className="mCSB_scrollTools mCSB_1_scrollbar mCS-light mCSB_scrollTools_vertical" style={{display: 'block'}}>
                    <div className="mCSB_draggerContainer">
                      <div id="mCSB_1_dragger_vertical" className="mCSB_dragger" style={{position: 'absolute', minHeight: '175px', display: 'block', height: '52px', maxHeight: '715px', top: '0px'}}>
                        <div className="mCSB_dragger_bar" style={{lineHeight: '175px'}} />
                      </div>
                      <div className="mCSB_draggerRail" />
                    </div>
                  </div>
                </div>
              </ul>
            </div>
            <div className="shop-details" data-shop-details>
              <div className="top">
                <h3 className="title">New Yorker</h3>
                <p className="subtitle">moda</p>
                <div className="desc">
                  <p>New Yorker należy do liderów europejskiej branży odzieżowej w segmencie Young
                    Fashion. Posiada ponad 1000 lokalizacji w 40 krajach na świecie, w których oferuje
                    swoim klientom najnowsze trendy w modzie.</p>
                  <p>Kolekcje tworzą marki własne FSBN, FB SISTER (odzież sportowa i streetwear) AMISU i
                    SMOG (styl klasyczny i odzież wieczorowa) jak również CENSORED (bielizna i stroje
                    kąpielowe), oraz marka ACCESSOIRES pełną wyróżniających się dodatków.</p>
                  <p>Z New Yorker żaden trend Cię nie ominie. Zgodnie z mottem „Dress for the moment“
                    znajdziesz tu perfekcyjny outfit na każdą okazje.</p>
                </div>
                <button className="close" data-store-close>
                  <img src={iconclose} className="iconclose" alt="iconclose" />
                </button>
              </div>
              <div className="bottom">
                <div className="qr-code">
                  <img src={qrcode} className="qrcode" alt="qrcode" />
                </div>
                <div className="buttons">
                  <a href className="button">Wyznacz trasę</a>
                </div>
              </div>
            </div>
          </div>
          <div className="categories">
            <p className="title">Pokaż według kategorii</p>
            <ul className="list">
              <li><button>AGD &amp; RTV</button></li>
              <li><button>Artykuły spożywcze</button></li>
              <li className="current"><button>Moda</button></li>
              <li><button>Biżuteria</button></li>
              <li><button>Prasa &amp; Multimedia</button></li>
              <li><button>Obuwie &amp; torby</button></li>
              <li><button>Restauracje i kawiarnie</button></li>
              <li><button>Rozrywka</button></li>
              <li><button>Sport i hobby</button></li>
              <li><button>Dzieci</button></li>
              <li><button>Usługi</button></li>
              <li><button>Wnętrza i wyposażenie</button></li>
              <li><button>Zdrowie u uroda</button></li>
              <li><button>Inne</button></li>
            </ul>
          </div>
        </div>
      </div>
    </main>
    <div id="keyboard" className="hidden keyboard"><ul className="jkeyboard"><li className="jline"><ul><li className="jkey letter">q</li><li className="jkey letter">w</li><li className="jkey letter">e</li><li className="jkey letter">r</li><li className="jkey letter">t</li><li className="jkey letter">y</li><li className="jkey letter">u</li><li className="jkey letter">i</li><li className="jkey letter">o</li><li className="jkey letter">p</li></ul></li><li className="jline"><ul><li className="jkey letter">a</li><li className="jkey letter">s</li><li className="jkey letter">d</li><li className="jkey letter">f</li><li className="jkey letter">g</li><li className="jkey letter">h</li><li className="jkey letter">j</li><li className="jkey letter">k</li><li className="jkey letter">l</li></ul></li><li className="jline"><ul><li className="jkey shift">&nbsp;</li><li className="jkey letter">z</li><li className="jkey letter">x</li><li className="jkey letter">c</li><li className="jkey letter">v</li><li className="jkey letter">b</li><li className="jkey letter">n</li><li className="jkey letter">m</li><li className="jkey backspace">&nbsp;</li></ul></li><li className="jline"><ul><li className="jkey numeric_switch">123</li><li className="jkey layout_switch">&nbsp;</li><li className="jkey space">&nbsp;</li><li className="jkey return">Enter</li></ul></li></ul><button data-close-keyboard className="close" /><button data-close-keyboard className="close" /></div>
  </div>
  
);
}
 
export default App;
