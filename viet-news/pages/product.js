import React from 'react'
import {connect} from 'react-redux'
import ProductComp from '../views/App/components/product'
import Head from 'next/head'

class Product extends React.Component {
    getProduct = () =>
        (this.props.products.filter(x => x.id == this.props.id)[0])

    render = () => (
        <div>
            <Head>
                <meta name="title" content={"Peaky Blinder's " + this.getProduct().name} />
                <meta name="description" content={this.getProduct().description} />
            </Head>

            <a href="/">go back to home</a>
            <ProductComp {...(this.getProduct())}/>
        </div>
    );
}


Product.getInitialProps = async function({query: {id}}) {
    return { id };
};

const mapStateToProps = (state) =>
    ({products: state.products})

export default connect(mapStateToProps)(Product);