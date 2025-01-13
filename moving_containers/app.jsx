import { useEffect } from 'react';
import './style.css'

const App = () => {
  useEffect(() => {

    const container = document.querySelector(".Container")
    const container1 = document.querySelector(".Container_Body")
    const cards = document.querySelectorAll('.Card');
    function RoatateCard() {
      let angle = 0;
      cards.forEach((card, index) => {
        if (card.classList.contains("away")) {
          card.style.transform = `translateY(-120vh) rotate(-48deg)`
        } else {
          card.style.transform = `rotate(${angle}deg)`;
          angle += 10; // Increment angle for each card
          card.style.zIndex = cards.length - index; // Stack order
        }
      });
    }


    document.addEventListener("scroll", () => {
      let distance = window.innerHeight / 2;
      let topPos = container.getBoundingClientRect().top;
      let index = -1 * (topPos / distance);
      index = Math.floor(index)
      for (let i = 0; i < cards.length; i++) {
        if (i <= index) {
          cards[i].classList.add("away")
        } else {
          cards[i].classList.remove("away")
        }
      }
      RoatateCard()
    })


    RoatateCard()
  }, []);


  useEffect(() => {
  }, [])

  return (
    <div className="Container">
      <div className='Container_Body'>
        <div className='Left_Body'>
          <div className='Left_heading'>
            Our Features
          </div>
          <p>rem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a
            type specimen book. </p>
          <div>
            <h5 className='btn'>Show More Details</h5>
          </div>
        </div>
        <div className='Right_Body'>
          <div className='Card BLUE'>
            <div className='Card_title'>
              Simplified
            </div>
            <div className='Card_Heading'>
              Complex task Are now Simplified
            </div>
          </div>
          <div className='Card PINK'>
            <div className='Card_title'>
              Productivity
            </div>
            <div className='Card_Heading'>
              Complex productivity is now Simplified
            </div>
          </div>
          <div className='Card VOILET'>
            <div className='Card_title'>
              Productivity
            </div>
            <div className='Card_Heading'>
              Complex productivity is now Simplified
            </div>
          </div>
          <div className='Card RED'>
            <div className='Card_title'>
              Productivity
            </div>
            <div className='Card_Heading'>
              Complex productivity is now Simplified
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default App;
