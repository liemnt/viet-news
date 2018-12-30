import React from "react";
import Head from "../styledComponent/Article/Head";
import StyledArticle from "../styledComponent/Article/Article";
import Headline from "../styledComponent/Article/Headline";
import Figure from "../styledComponent/Article/Figure";
import FigureCaption from "../styledComponent/Article/FigureCaption";
import Media from "../styledComponent/Article/Media";

const Article = () => {
  return (
    <StyledArticle>
      <Head>
        <Headline className="hl3">Thượng đỉnh Mỹ - Triều</Headline>
        <p>
          <Headline className="hl4">Thứ Năm, ngày 14/6/2018 - 05:20</Headline>
        </p>
      </Head>
      Điểm sáng nhất mà Tổng thống Mỹ Donald Trump và Chủ tịch Triều Tiên Kim
      Jong-un đạt được từ Thượng đỉnh Singapore hôm 12-6 vừa qua chính là thỏa
      thuận khung, giống như tuyên bố chung tại Bàn Môn Điếm giữa Triều Tiên và
      Hàn Quốc.
      <Figure>
        <Media
          src="http://image.plo.vn/w653/Uploaded/2018/cqjwqcdwp/2018_06_13/16-un-trump_ildj.jpg"
          alt=""
        />
        <FigureCaption className="figcaption">
          Cú bắt tay lịch sử giữa nhà lãnh đạo Triều Tiên Kim Jong-un (trái) và
          Tổng thống Mỹ Donald Trump.Ảnh: AP
        </FigureCaption>
      </Figure>
    </StyledArticle>
  );
};

export default Article;
