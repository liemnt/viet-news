import React from "react";
import StyledTimelineBlock from "./TimelineBlock";
import TimelineContent from "./TimelineContent";
import TimelineImage from "./TimelineImage";
import Date from "./Date";
import ReadMore from "./ReadMore";
import moment from 'moment';
import Link from 'next/link'

const TimelineBlock = ({data}) => {
  return (
    <StyledTimelineBlock>
      <TimelineImage>
        <img
          src={data.thumbnail || 'https://via.placeholder.com/500x500'}
          alt="Picture"
        />
      </TimelineImage>
      <TimelineContent>
        <h2>{data.title}</h2>
        <p>
          {data.backstory}
        </p>
          <Link as={`/news/${data.slug}`} href={`/post?slug=${data.slug}`}>
              <ReadMore>Read more</ReadMore>
          </Link>
        <Date>{moment(data.published_at).format('DD-MM-YYYY')}</Date>
      </TimelineContent>
    </StyledTimelineBlock>
  );
};

export default TimelineBlock;
