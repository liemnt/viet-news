import React from "react";
import StyledHeader from "./Header";
import LeftBox from "./LeftBox";
import SubHead from "./SubHead";
import SubHeadLink from "./SubHeadLink";
import Link from "next/link";

const headerList = [
  {
    name: "Thời sự",
    slug: "thoi-su"
  },
  {
    name: "Thế giới",
    slug: "the-gioi"
  },
  {
    name: "Chính trị",
    slug: "chinh-tri"
  },
  {
    name: "Tài chính - kinh doanh",
    slug: "tai-chinh-kinh-doanh"
  },
  {
    name: "Đời sống",
    slug: "doi-song"
  },
  {
    name: "Văn hoá",
    slug: "van-hoa"
  },
  {
    name: "Giáo dục",
    slug: "giao-duc"
  },
  {
    name: "Thể thao",
    slug: "the-thao"
  },
  {
    name: "Sức khoẻ",
    slug: "suc-khoe"
  },
  {
    name: "Công nghệ",
    slug: "cong-nghe"
  }
];
const Header = () => {
  return (
    <StyledHeader>
      <div className="headerobjectswrapper">
        <LeftBox>
          <span style={{ fontStyle: "italic" }}>
            Dự báo thời tiết trong 24 giờ tới
          </span>
          <br />
          <span>Sức gió: 7km/h; Nhiệt độ: 32°C; Độ ẩm: 82%</span>
        </LeftBox>
        <Link href={"/"}>
          <header style={{cursor: 'pointer'}}>Viet News</header>
        </Link>
      </div>

      <SubHead>
        {headerList.map(item => {
          return (
            <Link as={`/${item.slug}`} href={`/list?name=${item.slug}`}>
              <SubHeadLink>{item.name}</SubHeadLink>
            </Link>
          );
        })}
      </SubHead>
    </StyledHeader>
  );
};

export default Header;
