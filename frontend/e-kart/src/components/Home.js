import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Router as BrowserRouter, Link } from "react-router-dom";
// import queryString from "query-string"

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			brand: "samsung",
			location: "chennai",
			home: [
				{
					id: 1,
					prodctName: "dcscd",
					src: "https://www.91-img.com/pictures/132944-v6-xiaomi-redmi-7-mobile-phone-large-1.jpg",
					newPrice: "2323",
					oldPrice: "2123"
				},

				{
					id: 2,
					prodctName: "dcscd",
					src: "https://www.91-img.com/pictures/132944-v6-xiaomi-redmi-7-mobile-phone-large-1.jpg",
					newPrice: "213",
					oldPrice: "213"
				},
				{
					id: 3,
					prodctName: "dcscd",
					src: "https://www.91-img.com/pictures/132944-v6-xiaomi-redmi-7-mobile-phone-large-1.jpg",
					newPrice: "2323",
					oldPrice: "3222"
				},
				{
					id: 4,
					prodctName: "dcscd",
					src: "https://www.91-img.com/pictures/132944-v6-xiaomi-redmi-7-mobile-phone-large-1.jpg",
					newPrice: "222",
					oldPrice: "2323"
				},

				{
					id: 5,
					prodctName: "dcscd",
					src: "https://www.91-img.com/pictures/132944-v6-xiaomi-redmi-7-mobile-phone-large-1.jpg",
					newPrice: "324",
					oldPrice: "2343"
				},
				{
					id: 6,
					prodctName: "dcscd",
					src: "https://www.91-img.com/pictures/132944-v6-xiaomi-redmi-7-mobile-phone-large-1.jpg",
					newPrice: "76543",
					oldPrice: "2345"
				}
			],
			cart2: [
				{
					id: "1",
					brand: "Samsung",
					src:
						"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5OI_X5RuHfK7jmTWgcRi8E_KkAdgIb0b24yLgD0ac_zIDG3RT&s"
				},
				{
					id: "2",
					brand: "Apple",
					src: "https://static.inilah.com/data/berita/foto/2502700.jpg"
				},
				{
					id: "3",
					brand: "Oppo",
					src:
						"https://media.glassdoor.com/sqll/842616/oppo-mobile-communications-squarelogo-1446728829539.png"
				},

				{
					id: "4",
					brand: "Redmi",
					src:
						"https://static.boredpanda.com/blog/wp-content/uploads/2011/10/pod0042-apple-logo-steve-jobs-silhouette.jpg"
				},
				{
					id: "5",
					brand: "LG",
					src:
						"https://static.wixstatic.com/media/5eafe4_a9933fe22431474cb5a8b559b9dee567~mv2_d_2272_1704_s_2.png/v1/fill/w_1600,h_1200,al_c,q_90/file.jpg"
				},
				{
					id: "6",
					brand: "Nokia",
					src: "https://wallpapercave.com/wp/wp4333526.jpg"
				},
				{
					id: "7",
					brand: "One Plus",
					src:
						"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9wMn2ba3i-4ycJmEdy-Tfb3ZMMyefG7cL2rkXAsRD7bRZlFpP&s"
				},
				{
					id: "8",
					brand: "Vivo",
					src: "https://seeklogo.com/images/V/vivo-logo-5388FFF9A5-seeklogo.com.jpg"
				}
			]
		};
	}
	render() {
		console.log(this.props.match.params.brand);
		return (
			<div className='container-fluid' style={{ backgroundColor: "#fffdd8" }}>
				​
				<div className='container'>
					<div className='row'>
						<div
							className='col-lg-4 col-md-12 col-sm-12 col-12 text-warning'
							style={{ width: "100px", height: "400px", backgroundColor: "#000000" }}
						>
							<br />
							<br />
							<br />
							<h1 className='text-center' style={{ textDecoration: "underline" }}>
								E-Kart
							</h1>
							<h4 className='text-center'>Great Mobile-Friendly E-Kart</h4>
							<h4 className='text-center'>Put your store in customer's hands</h4>
						</div>
						<div
							className='col-lg-8 col-md-12 col-sm-12 col-12 bg-warning'
							style={{ width: "100px", height: "400px" }}
						>
							<br />
							<br />
							<br />
							<div className='box mx-auto ml-5' style={{ width: "100%" }}>
								<img
									src='mobile4.png'
									className='  shadow-lg p-3 mb-5 ml-5 rounded'
									style={{ width: "%100" }}
								/>
								<img
									src='mobile41.png'
									className='  shadow-lg p-3 mb-5 mr-5  mx-auto rounded'
									style={{ height: "300px", width: "300px" }}
								/>
								<img
									src='mobile4.png'
									className='  shadow-lg p-3 mb-5 mr-5 mx-auto mr-3 rounded'
									style={{ width: "%100" }}
								/>
							</div>
						</div>

						<h1 className='text-center text-secondary'>Top Offers</h1>
						<div className='row'>
							{this.state.home.map(item => {
								return (
									<div className='col-lg-2 col-md-4 col-sm-6 col-6 mx-auto'>
										<br />
										<div className='card border-0 shadow p-3 mb-5 box bg-transparency'>
											<div>
												<img
													src={item.src}
													className='mx-auto text-transpency'
													style={{ width: "100%", height: "20%", backgroundColor: "#ffffe0" }}
												/>
											</div>
											<div>
												<p className='text-center'>{item.prodctName}</p>

												<div className='text-center text-success box'>
													Upto ₹{item.newPrice} off
												</div>
												<div className='text-center box'>From ₹{item.oldPrice}</div>

												<br />
												<div className='text-center design'>
													<button className='btn btn-primary'>View</button>
												</div>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
					<hr />​<h1 className=' text-secondary'>Company</h1>
					<br />
					<div className='row'>
						{this.state.cart2.map(item1 => {
							return (
								<div className='col-lg-3 col-md-6 col-sm-6 col-6' style={{ width: "100%" }}>
									{" "}
									<Link to={`/brand/${this.state.brand}/${this.state.location}`}>
										<div class='card shadow p-3 mb-5 bg-warning rounded' style={{ width: "235px" }}>
											<img
												src={item1.src}
												className='card-img-top mx-auto '
												alt='...'
												style={{ width: "200px", height: "200px" }}
											/>
										</div>
									</Link>
								</div>
							);
						})}
					</div>
					<hr />
				</div>
				<div
					className='footer text-center text-white mx-auto'
					style={{ backgroundColor: "#000000" }}
				>
					This is the footer
				</div>
			</div>
		);
	}
}
