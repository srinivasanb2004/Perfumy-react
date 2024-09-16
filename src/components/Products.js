//Importing images
import p1 from "../assets/images/p1.jpeg"
import p2 from "../assets/images/p2.jpeg"
import p3 from "../assets/images/p3.jpeg"

function Products() {

    return (
  
      <div class="product">
  
        <div className="box">
          <img src={p1} width="220" height="220" alt="perfume"></img>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi culpa quis tenetur reiciendis, modi ratione.</p>
        </div>
  
        <div className="box">
          <img src={p2} width="220" height="220" alt="perfume"></img>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi culpa quis tenetur reiciendis, modi ratione.</p>
        </div>
  
        <div className="box">
          <img src={p3} width="220" height="220" alt="perfume"></img>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi culpa quis tenetur reiciendis, modi ratione.</p>
        </div>
      </div>
  
    )
  }

  export default Products
  