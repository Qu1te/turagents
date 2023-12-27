import React ,{useState}from "react";
import {Link} from "react-router-dom"
import data from "../server/data";
const Content = () => {

	const [moreOpen,setMoreOpen] = useState(false)

	const showMoreItems = () => {
		setMoreOpen(prev => prev + moreOpen);
	 };

	 const [noOfElement,setNoOfElement] = useState(3);
	 const slice = data.cardData.slice(0,noOfElement)
	 const LoadMore = () =>{
		setNoOfElement(noOfElement + noOfElement)
	 }


	return(
	<main>
		<div className="Content">
			<div className="Content__conteiner">
				{slice.map((item,index)=>{
					return(
						<div key={index}
						className={`Content__product ${index >= noOfElement - 2 && "hidden"}`}>
							<div className="product">
								<img src={item.img} alt="" />
								<div className="card-body">
									<h5 className="card-title">{item.title}</h5>
									<p className="card-price">{item.price}</p>
									<button><Link to="/Maldiv">Подробнее</Link></button>
								</div>

							</div>
						</div>
					)
				})}
			</div>
		</div>
		<div className="Button-More-container">
			<div onClick={()=> LoadMore()} className="Content__button">
					<button>Показать еще</button>
			</div>
		</div>
	</main>
	)
}

export default Content;