import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import ProductCarousel from '../components/ProductCarousel'
import Meta from '../components/Meta'
import Product from '../components/Product'
import Paginate from '../components/Paginate'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { ListProducts } from '../actions/productActions'

const HomeScreen = ({ match }) => {
	const keyword = match.params.keyword
	const pageNumber = match.params.pageNumber || 1

	const dispatch = useDispatch()

	const productList = useSelector((state) => state.productList)
	const { loading, products, error, page, pages } = productList

	useEffect(() => {
		dispatch(ListProducts(keyword, pageNumber))
	}, [dispatch, keyword, pageNumber])

	return (
		<>
			<Meta />
			{!keyword ? (
				<ProductCarousel />
			) : (
				<Link to="/" className="btn btn-light">
					Go Back
				</Link>
			)}
			<h1>Latest products</h1>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">{error}</Message>
			) : (
				<>
					<Row>
						{products.map((product) => (
							<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
								<Product product={product} />
							</Col>
						))}
					</Row>

					<Paginate
						pages={pages}
						page={page}
						keyword={keyword ? keyword : ''}
					/>
				</>
			)}
		</>
	)
}

export default HomeScreen
