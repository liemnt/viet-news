import React, {PureComponent} from "react";
import Layout from "../components/Layout/index";
import Home from "../views/Home";
import {getAllTimelines} from "../services/api/timeline";

class Index extends PureComponent {
    static defaultProps = {

    };

    static propTypes = {};

    render() {
        return (
            <Layout>
                <Home timelines={this.props.timelines} />
            </Layout>
        );
    }
}

Index.getInitialProps = async function(context) {
    const res = await getAllTimelines();
    if (res.errors===null){
        return {
            timelines: res.data
        }
    }
    return {
        timelines:[]
    }
};

export default Index;
