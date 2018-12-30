import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import CardContainer from "../styledComponent/Card/CardContainer";

class Card extends PureComponent {
  static defaultProps = {};

  static propTypes = {};

  render() {
    const { data } = this.props;
    return (
      <Link as={`/timeline/${data.id}`} href={`/list?timeline_id=${data.id}`}>
        <CardContainer>
          <section id="card1" className="card card1">
            <h1>{data.name}</h1>
            <div className="card-image">
              <img
                src={data.thumnail || "https://via.placeholder.com/500x300"}
              />
            </div>

            <p>{data.description || data.name}</p>
          </section>
          <section id="card2" className="card card2">
            <h1>Card 2</h1>
            <div className="card-image">
              <img
                src={data.thumnail || "https://via.placeholder.com/500x300"}
              />
            </div>

            <p>{data.description || data.name}</p>
          </section>
          <section id="card3" className="card card3">
            <h1>Card 1</h1>
            <div className="card-image">
              <img
                src={data.thumnail || "https://via.placeholder.com/500x300"}
              />
            </div>

            <p>{data.description || data.name}</p>
          </section>
        </CardContainer>
      </Link>
    );
  }
}

export default Card;
