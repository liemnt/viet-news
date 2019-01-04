import fetch from "isomorphic-unfetch";
import { BASE_URL } from "./const";
import { API_PATH } from "./path";
import queryString from "query-string";
import _ from "lodash";

export const getAllArticleByTimelineId = async timelineId => {
  const res = await fetch(
    `${BASE_URL}${API_PATH.ARTICLES_BY_TIMELINE_ID}${timelineId}`
  );
  const resJson = await res.json();
  return resJson;
};

export const getArticleBySlug = async slug => {
  const res = await fetch(`${BASE_URL}${API_PATH.ARTICLE_BY_SLUG}${slug}`);
  const resJson = await res.json();
  return resJson;
};

export const getArticleById = async id => {
  const res = await fetch(`${BASE_URL}${API_PATH.ARTICLE_BY_ID}${id}`);
  const resJson = await res.json();
  return resJson;
};

export const getLatestArticles = async page => {
  const params = {
    isPaginator: "True",
    orderBy: "-published_at",
    page,
    timelineId: null
  };
  const paramsString = queryString.stringify(params);
  const res = await fetch(
    `${BASE_URL}${API_PATH.ARTICLE_SEARCH}?${paramsString}`
  );
  const resJson = await res.json();
  return resJson;
};

const data = {
  data: [
    {
      id: 1746,
      title: "Tổng biên tập báo Tuổi Trẻ làm Phó bí thư Quận ủy Tân Phú",
      slug:
        "tong-bien-tap-bao-tuoi-tre-lam-pho-bi-thu-quan-uy-tan-phu-1544607331-222486",
      thumbnail:
        "https://news-system-asset.s3.amazonaws.com/media/article/thumbnail/157abc564c4077594f9bde4370016d06ea0ec2ee.jpg",
      article_body:
        '\n<p>Ông Tăng Hữu Phong năm nay 44 tuổi, có trình độ thạc sĩ sử học, cử nhân chính trị, cao cấp lý luận chính trị. Ông Phong từng là Phó bí thư Thành đoàn TP.HCM, từ tháng 1.2008 công tác tại báo <em>Tuổi Trẻ</em> với chức vụ Phó tổng biên tập, rồi Tổng biên tập từ tháng 4.2015.<br>\n</p>\n<p>Trước đó, ngày 20.12, Thành đoàn TP.HCM quyết định phân công ông Lê Thế Chữ làm Phó tổng biên tập phụ trách báo trong thời gian thực hiện quy trình bổ nhiệm tổng biên tập mới. Ông Chữ từng làm Tổng biên tập báo <em>Khăn Quàng Đỏ </em>trước khi làm Phó tổng biên tập báo <em>Tuổi Trẻ</em>.</p>\n<div><article class="story clearfix"><figure><a class="thumb" target="_blank" href="/chinh-tri-xa-hoi/cuu-tong-bien-tap-bao-tuoi-tre-lam-pho-chu-tich-hdnd-tphcm-717696.html" rel=""><img data-src="https://image.thanhnien.vn/160x107/uploaded/trunghieu/2016_06_28/ong_hai_1_slke.jpg" alt="Tổng biên tập báo Tuổi Trẻ làm Phó bí thư Quận ủy Tân Phú - ảnh 1" caption="Tổng biên tập báo Tuổi Trẻ làm Phó bí thư Quận ủy Tân Phú - ảnh 1" style="height: auto;" class="loaded" src="https://image.thanhnien.vn/160x107/uploaded/trunghieu/2016_06_28/ong_hai_1_slke.jpg" data-was-processed="true"></a></figure>\n<header>\n<h4 class="label">tin liên quan</h4>\n<a class="title" href="/chinh-tri-xa-hoi/cuu-tong-bien-tap-bao-tuoi-tre-lam-pho-chu-tich-hdnd-tphcm-717696.html" title="Cựu Tổng biên tập Báo Tuổi Trẻ làm Phó chủ tịch HĐND TP.HCM" rel="" target="_blank">Cựu Tổng biên tập Báo Tuổi Trẻ làm Phó chủ tịch HĐND TP.HCM</a>\n<div class="summary">Sáng 28.6,&nbsp;HĐND TP.HCM khoá 9, kỳ họp thứ nhất đã bầu các chức danh Chủ tịch, Phó chủ tịch, Trưởng ban, Phó trưởng ban của HĐND TP.HCM.</div>\n</header>\n</article>\n</div>\n\n',
      backstory:
        "Sáng 22.12, tại trụ sở Quận ủy Tân Phú, Phó bí thư  Thành ủy TP.HCM Tất Thành Cang trao quyết định của Ban Thường vụ Thành ủy điều động ông Tăng Hữu Phong làm Phó bí thư thường trực Quận ủy Tân Phú.",
      description:
        "Sáng 28.6, HĐND TP.HCM khoá 9, kỳ họp thứ nhất đã bầu các chức danh Chủ tịch, Phó chủ tịch, Trưởng ban, Phó trưởng ban của HĐND TP.HCM.\n",
      word_count: 0,
      author: "T.Hiếu",
      dateline: "",
      current_version: null,
      approved: true,
      published: true,
      publish_timer: "2018-12-12T09:35:31.226204Z",
      published_at: "2016-12-22T18:55:00Z",
      crawled_base_url: "https://thanhnien.vn/",
      crawled_site_name: "thanhnien.vn",
      crawled_url:
        "https://thanhnien.vn/thoi-su/tong-bien-tap-bao-tuoi-tre-lam-pho-bi-thu-quan-uy-tan-phu-776492.html",
      crawled_at: "2018-12-12T09:35:31.226204Z",
      is_selenium_updated: true,
      is_checked: false,
      created_at: "2018-12-12T09:35:31.232587Z",
      modified_at: "2018-12-29T17:32:33.709505Z",
      category_id: 1,
      timeline_id: 2,
      user_id: 1,
      tags: [4795, 4796, 4797, 2921, 4798, 1223]
    },
    {
      id: 1735,
      title: "TP.HCM sẽ bầu Chủ tịch mới?",
      slug: "tphcm-se-bau-chu-tich-moi-1544607330-29793",
      thumbnail:
        "https://news-system-asset.s3.amazonaws.com/media/article/thumbnail/8841b836ad4a8a6c9087409037ecd0229314589c.jpg",
      article_body:
        '\n<div>Thông tin trên được ông Nguyễn Thanh Triều, Chánh Văn phòng Đoàn đại biểu Quốc hội và HĐND TP.HCM xác nhận với phóng viên<em> Thanh Niên </em>vào chiều nay 7.12.</div>\n<div>Phóng viên<em> Thanh Niên</em>&nbsp;đặt câu hỏi về việc kỳ họp lần thứ 20 HĐND TP.HCM khóa 8 có bầu mới Chủ tịch UBND TP.HCM như Hà Nội vừa thực hiện hay không? Ông Nguyễn Thanh Triều chỉ xác nhận là sẽ bầu thường trực UBND TP.HCM (theo quy định có Chủ tịch, Phó chủ tịch và các ủy viên ủy ban). Ông Nguyễn Thanh Triều không khẳng định cụ thể nhưng cũng không bác bỏ là có hay không việc bầu Chủ tịch UBND TP.HCM tại kỳ họp này. </div>\n<div>Trước đó, trao đổi với báo chí, ông Nguyễn Thanh Triều cho biết, tại kỳ họp thứ 20 HĐND TPHCM khóa 8 nhiệm kỳ 2011 - 2016 (từ ngày 8 đến ngày 11.12) sẽ tiến hành bầu nhân sự thay thế.</div>\n<div>Theo đó, thông tin chính thức khẳng định dự kiến sẽ bầu chức danh các: Phó chủ tịch UBND TPHCM và 3 ủy viên UBND TP.HCM đối với Giám đốc Sở Kế hoạch - Đầu tư (thay ông Thái Văn Rê), Giám đốc Sở Tài chính (thay bà Đào Thị Hương Lan) và Chánh văn phòng UBND TP.HCM (thay ông Võ Văn Luận nghỉ hưu theo chế độ).</div>\n<div>\n<table align="right" border="0" cellspacing="0" cellpadding="0" class="quote quote--yellow" style="height: auto;">\n    <tbody>\n        <tr>\n            <td style="width: 5px;"> </td>\n            <td>\n            <table align="right" style="width: 250px; height: auto;" border="0" cellspacing="0" cellpadding="0">\n                <tbody>\n                    <tr>\n                        <td align="left" valign="middle" style="height: 8px; background-color: #f3b204;"></td>\n                    </tr>\n                    <tr>\n                        <td style="text-align: justify; padding: 5px; background-color: #fae6ab;"><span style="font-size: 13px; color: #8b0000;">\n                        <div><strong style="color: #000080;">Bốn Phó bí thư Thành ủy TPHCM khóa 10:</strong></div>\n                        <div>\n                        <div style="color: #000080; nomargin-bottom: 15px; text-align: justify; background-color: #e3edf7;">1. Võ Văn Thưởng (Phó bí thư thường trực)<br style="color: #000000;">\n                        2. Tất Thành Cang<br style="color: #000000;">\n                        3. Nguyễn Thành Phong<br style="color: #000000;">\n                        4. Nguyễn Thị Quyết Tâm</div>\n                        </div>\n                        </span></td>\n                    </tr>\n                    <tr>\n                        <td align="left" valign="middle" style="height: 5px; background-color: #f3b204;"></td>\n                    </tr>\n                </tbody>\n            </table>\n            </td>\n        </tr>\n    </tbody>\n</table>\n</div>\n<div>Trong tháng 10.2015, đại hội đại biểu Đảng bộ TP.HCM khóa 10, nhiệm kỳ 2015 - 2020 đã bầu danh sách Ban Chấp hành với 69 ủy viên. Trong 69 ủy viên này đã bầu ra 15 Ủy viên Ban thường vụ Thành ủy, trong đó có 4 phó bí thư: ông Võ Văn Thưởng (thường trực), bà Nguyễn Thị Quyết Tâm (Chủ tịch HĐND thành phố), ông Nguyễn Thành Phong (tái cử) và ông Tất Thành Cang (Phó chủ tịch UBND TP.HCM).</div>\n<div>Ông Nguyễn Hữu Tín, ông Hứa Ngọc Thuận không tiếp tục xuất hiện trong danh sách Ban Chấp hành, Ban thường vụ Thành ủy khóa 10 vì không đủ tuổi cơ cấu theo quy định (trong khóa 9 thì các ông đều được bầu). </div>\n<div>Ông Lê Hoàng Quân cũng không tiếp tục xuất hiện trong danh sách Ban Chấp hành, Ban thường vụ Thành ủy khóa 10.</div>\n<div>Theo một nguồn tin từ UBND TP.HCM và HĐND TP.HCM, kỳ họp lần thứ 20 sẽ bầu người mới thay thế Phó chủ tịch UBND thành phố không đủ điều kiện về tuổi tác để tham gia cấp ủy; đồng thời, kiện toàn nhân sự cho chính quyền khóa mới sau đại hội đảng của thành phố. </div>\n<div>Ông Lê Hoàng Quân trước đó làm Chủ tịch UBND TP.HCM nhiệm kỳ 7 (2006 - 2011). Như vậy, ông Quân đã làm 2 nhiệm kỳ Chủ tịch UBND TP.HCM. Theo quy định của trung ương, sẽ không tiếp tục nắm giữ trọng trách này trong nhiệm kỳ mới (2016 - 2021). Những người đủ điều kiện được giới thiệu, được bầu sẽ thay thế ông Quân.</div>\n<div>Theo nguyên tắc, chủ tịch đương nhiệm sẽ giới thiệu nhân sự đủ điều kiện theo quy định của Đảng cho HĐND thành phố bầu. Thủ tướng sẽ phê chuẩn nhân sự mới từ việc bầu cử này.  </div>\n<div>Cho đến chiều 7.12, các nhân sự được giới thiệu để bầu thường trực UBND TP.HCM vẫn chưa được công bố. </div>\n<div>Khác với TP.HCM, trước kỳ họp HĐND Hà Nội vào đầu tháng 12.2015, thông tin giới thiệu nhân sự mới nắm giữ cương vị Chủ tịch UBND TP.Hà Nội, đương chức Chủ tịch UBND TP.Hà Nội xin thôi chức vụ, đều được công khai và thông tin rộng rãi trên báo chí. </div>\n<div>Đảng bộ TP.HCM khóa 10 hiện đang khuyết chức danh Bí thư Thành ủy. Bí thư Thành ủy (khóa 9) Lê Thanh Hải được Bộ Chính trị giao nhiệm vụ chỉ đạo Đảng bộ TP.HCM. Dự kiến sau đại hội đại biểu toàn quốc lần thứ 12 của Đảng mới kiện toàn nhân sự chức danh quan trọng này.</div>\n\n',
      backstory:
        "Kỳ họp lần thứ 20 HĐND TP.HCM khóa 8 diễn ra vào ngày mai 8.12 sẽ tiến hành bầu thường trực UBND TP.HCM với nhiều chức danh quan trọng.",
      description:
        "Thông tin trên được ông Nguyễn Thanh Triều, Chánh Văn phòng Đoàn đại biểu Quốc hội và HĐND TP.HCM xác nhận với phóng viênvào chiều nay 7.12.\r\nPhóng viên đặt câu hỏi về việc kỳ họp lần thứ 20 HĐND TP.HCM khóa 8 có bầu mới Chủ tịch UBND TP.HCM như Hà Nội vừa thực hiện hay không? Ông Nguyễn Thanh Triều chỉ xác nhận là sẽ bầu thường trực UBND TP.HCM (theo quy định có Chủ tịch, Phó chủ tịch và các ủy viên ủy ban). Ông Nguyễn Thanh Triều không khẳng định cụ thể nhưng cũng không bác bỏ là có hay không việc bầu Chủ tịch UBND TP.HCM tại kỳ họp này. \r\nTrước đó, trao đổi với báo chí, ông Nguyễn Thanh Triều cho biết, tại kỳ họp thứ 20 HĐND TPHCM khóa 8 nhiệm kỳ 2011 - 2016 (từ ngày 8 đến ngày 11.12) sẽ tiến hành bầu nhân sự thay thế.\r\nTheo đó, thông tin chính thức khẳng định dự kiến sẽ bầu chức danh các: Phó chủ tịch UBND TPHCM và 3 ủy viên UBND TP.HCM đối với Giám đốc Sở Kế hoạch - Đầu tư (thay ông Thái Văn Rê), Giám đốc Sở Tài chính (thay bà Đào Thị Hương Lan) và Chánh văn phòng UBND TP.HCM (thay ông Võ Văn Luận nghỉ hưu theo chế độ).\r\n\r\n\r\n                        1. Võ Văn Thưởng (Phó bí thư thường trực)\r\n                        2. Tất Thành Cang\r\n                        3. Nguyễn Thành Phong\r\n                        4. Nguyễn Thị Quyết Tâm\r\n                        \r\n\r\nTrong tháng 10.2015, đại hội đại biểu Đảng bộ TP.HCM khóa 10, nhiệm kỳ 2015 - 2020 đã bầu danh sách Ban Chấp hành với 69 ủy viên. Trong 69 ủy viên này đã bầu ra 15 Ủy viên Ban thường vụ Thành ủy, trong đó có 4 phó bí thư: ông Võ Văn Thưởng (thường trực), bà Nguyễn Thị Quyết Tâm (Chủ tịch HĐND thành phố), ông Nguyễn Thành Phong (tái cử) và ông Tất Thành Cang (Phó chủ tịch UBND TP.HCM).\r\nÔng Nguyễn Hữu Tín, ông Hứa Ngọc Thuận không tiếp tục xuất hiện trong danh sách Ban Chấp hành, Ban thường vụ Thành ủy khóa 10 vì không đủ tuổi cơ cấu theo quy định (trong khóa 9 thì các ông đều được bầu). \r\nÔng Lê Hoàng Quân cũng không tiếp tục xuất hiện trong danh sách Ban Chấp hành, Ban thường vụ Thành ủy khóa 10.\r\nTheo một nguồn tin từ UBND TP.HCM và HĐND TP.HCM, kỳ họp lần thứ 20 sẽ bầu người mới thay thế Phó chủ tịch UBND thành phố không đủ điều kiện về tuổi tác để tham gia cấp ủy; đồng thời, kiện toàn nhân sự cho chính quyền khóa mới sau đại hội đảng của thành phố. \r\nÔng Lê Hoàng Quân trước đó làm Chủ tịch UBND TP.HCM nhiệm kỳ 7 (2006 - 2011). Như vậy, ông Quân đã làm 2 nhiệm kỳ Chủ tịch UBND TP.HCM. Theo quy định của trung ương, sẽ không tiếp tục nắm giữ trọng trách này trong nhiệm kỳ mới (2016 - 2021). Những người đủ điều kiện được giới thiệu, được bầu sẽ thay thế ông Quân.\r\nTheo nguyên tắc, chủ tịch đương nhiệm sẽ giới thiệu nhân sự đủ điều kiện theo quy định của Đảng cho HĐND thành phố bầu. Thủ tướng sẽ phê chuẩn nhân sự mới từ việc bầu cử này.  \r\nCho đến chiều 7.12, các nhân sự được giới thiệu để bầu thường trực UBND TP.HCM vẫn chưa được công bố. \n\n\n\r\nKhác với TP.HCM, trước kỳ họp HĐND Hà Nội vào đầu tháng 12.2015, thông tin giới thiệu nhân sự mới nắm giữ cương vị Chủ tịch UBND TP.Hà Nội, đương chức Chủ tịch UBND TP.Hà Nội xin thôi chức vụ, đều được công khai và thông tin rộng rãi trên báo chí. \r\nĐảng bộ TP.HCM khóa 10 hiện đang khuyết chức danh Bí thư Thành ủy. Bí thư Thành ủy (khóa 9) Lê Thanh Hải được Bộ Chính trị giao nhiệm vụ chỉ đạo Đảng bộ TP.HCM. Dự kiến sau đại hội đại biểu toàn quốc lần thứ 12 của Đảng mới kiện toàn nhân sự chức danh quan trọng này.\n",
      word_count: 0,
      author: "Tân Phú",
      dateline: "",
      current_version: null,
      approved: true,
      published: true,
      publish_timer: "2018-12-12T09:35:30.302301Z",
      published_at: "2015-12-07T23:42:00Z",
      crawled_base_url: "https://thanhnien.vn/",
      crawled_site_name: "thanhnien.vn",
      crawled_url:
        "https://thanhnien.vn/thoi-su/tphcm-se-bau-chu-tich-moi-643363.html",
      crawled_at: "2018-12-12T09:35:30.302301Z",
      is_selenium_updated: true,
      is_checked: false,
      created_at: "2018-12-12T09:35:30.310695Z",
      modified_at: "2018-12-29T17:32:33.884335Z",
      category_id: 1,
      timeline_id: 2,
      user_id: 1,
      tags: [4761, 4546, 4599, 2345, 4584, 9, 4547]
    },
    {
      id: 1742,
      title: "Ông Nguyễn Thành Phong được giới thiệu làm Chủ tịch UBND TP.HCM",
      slug:
        "ong-nguyen-thanh-phong-uoc-gioi-thieu-lam-chu-tich-ubnd-tphcm-1544607330-97493",
      thumbnail:
        "https://news-system-asset.s3.amazonaws.com/media/article/thumbnail/9bd0f228ca50b1e0e555688a19bbf05469a90e82.jpg",
      article_body:
        "\n<div> Tại phiên khai mạc sáng nay 8.12, bà Nguyễn Thị Quyết Tâm, Chủ tịch HĐND thành phố khẳng định chương trình nghị sự của kỳ họp sẽ bầu chủ tịch, 2 phó chủ tịch và 5 uỷ viên UBND thành phố.</div>\n<div>Theo Thông tin từ kỳ họp lần thứ 20 HĐND TP.HCM khóa 8, Đối với chức danh chủ tịch, ông Nguyễn Thành Phong sẽ được giới thiệu để HĐND thành phố bầu, thay ông Lê Hoàng Quân đã làm 2 nhiệm kỳ từ 2006 đến nay.</div>\n<div>Ông Nguyễn Thành Phong sinh ngày 18.7.1962, tại xã Tam Phước, huyện Châu Thành, tỉnh Bến Tre. Năm 1995, ông được bầu làm Chủ tịch đầu tiên của Hội Sinh viên Việt Nam TP.HCM. Năm 1996 ông được bầu làm Phó bí thư Thành Đoàn TP.HCM.</div>\n<div>Năm 1997, ông được bầu làm đại biểu Quốc hội khóa 10. Tháng 9.1999, ông được bầu giữ chức Bí thư Thành Đoàn TP.HCM. Năm 2002, tại Đại hội đại biểu toàn quốc lần thứ 8, ông được bầu làm Bí thư Trung ương Đoàn Thanh niên Cộng sản Hồ Chí Minh. Năm 2005, ông giữ chức Bí thư thường trực Trung ương Đoàn Thanh niên Cộng sản Hồ Chí Minh.</div>\n<div>Đầu năm 2007, ông được điều động về làm Thành ủy viên Thành ủy TP.HCM, Bí thư Quận ủy Q.2. Năm 2009, ông được điều động về tham gia Ban Chấp hành, Ban Thường vụ Tỉnh ủy tỉnh Bến Tre, giữ chức Phó bí thư Tỉnh ủy Bến Tre.</div>\n<div>Năm 2010, ông được bầu làm Bí thư Tỉnh ủy Bến Tre. Năm 2013, ông được bầu giữ chức Chủ tịch HĐND tỉnh Bến Tre. Tháng 3.2015, ông được Trung ương điều động trở lại TP.HCM giữ cương vị Phó bí thư Thành ủy nhiệm kỳ 2010 - 2015.</div>\n<div>Tại đại hội đại biểu Đảng bộ TP.HCM khóa 10, nhiệm kỳ 2015 - 2020 tổ chức vào giữa tháng 10.2015, ông Nguyễn Thành Phong tái cử Phó bí thư Thành ủy TP.HCM. </div>\n<div>Theo nguyên tắc, chủ tịch đương nhiệm sẽ giới thiệu nhân sự đủ điều kiện theo quy định của Đảng cho HĐND thành phố bầu. Thủ tướng sẽ phê chuẩn nhân sự mới từ việc bầu cử này.  </div>\n<div>Cũng tại kỳ họp này, ông Tất Thành Cang sẽ được miễn nhiệm chức Phó chủ tịch UBND TP.HCM để chính thức chuyển sang Thành ủy TP.HCM với cương vị Phó bí thư mà ông được bầu tại đại hội đại biểu Đảng bộ TP.HCM khóa 10. </div>\n<div>Các Phó chủ tịch UBND TP.HCM, ủy viên ủy ban vừa nghỉ hưu hoặc không tham gia cấp ủy khóa mới, cũng sẽ được bầu nhân sự mới để kiện toàn bộ máy chính quyền thành phố. </div>\n<div>Đảng bộ TP.HCM khóa 10 hiện đang khuyết chức danh Bí thư Thành ủy. Bí thư Thành ủy (khóa 9) là Ủy viên Bộ Chính trị Lê Thanh Hải được Bộ Chính trị giao nhiệm vụ chỉ đạo Đảng bộ TP.HCM. Dự kiến sau đại hội đại biểu toàn quốc lần thứ 12 của Đảng mới kiện toàn nhân sự chức danh quan trọng này.</div>\n<div>Trong 69 ủy viên Ban Chấp hành Đảng bộ TP.HCM khóa 10 đã bầu ra 15 Ủy viên Ban thường vụ Thành ủy, trong đó có 4 Phó bí thư: ông Võ Văn Thưởng (thường trực, 45 tuổi), bà Nguyễn Thị Quyết Tâm (Chủ tịch HĐND thành phố, 57 tuổi), ông Tất Thành Cang (Phó chủ tịch UBND TP.HCM, 44 tuổi) và ông Nguyễn Thành Phong.</div>\n\n",
      backstory:
        "Từng là Chủ tịch đầu tiên của Hội Sinh viên Việt Nam TP.HCM, ông Nguyễn Thành Phong (53 tuổi) được giới thiệu để HĐND TP.HCM bầu làm tân Chủ tịch UBND TP.HCM.",
      description:
        "Tại phiên khai mạc sáng nay 8.12, bà Nguyễn Thị Quyết Tâm, Chủ tịch HĐND thành phố khẳng định chương trình nghị sự của kỳ họp sẽ bầu chủ tịch, 2 phó chủ tịch và 5 uỷ viên UBND thành phố.\r\nTheo Thông tin từ kỳ họp lần thứ 20 HĐND TP.HCM khóa 8, Đối với chức danh chủ tịch, ông Nguyễn Thành Phong sẽ được giới thiệu để HĐND thành phố bầu, thay ông Lê Hoàng Quân đã làm 2 nhiệm kỳ từ 2006 đến nay.\r\nÔng Nguyễn Thành Phong sinh ngày 18.7.1962, tại xã Tam Phước, huyện Châu Thành, tỉnh Bến Tre. Năm 1995, ông được bầu làm Chủ tịch đầu tiên của Hội Sinh viên Việt Nam TP.HCM. Năm 1996 ông được bầu làm Phó bí thư Thành Đoàn TP.HCM.\r\nNăm 1997, ông được bầu làm đại biểu Quốc hội khóa 10. Tháng 9.1999, ông được bầu giữ chức Bí thư Thành Đoàn TP.HCM. Năm 2002, tại Đại hội đại biểu toàn quốc lần thứ 8, ông được bầu làm Bí thư Trung ương Đoàn Thanh niên Cộng sản Hồ Chí Minh. Năm 2005, ông giữ chức Bí thư thường trực Trung ương Đoàn Thanh niên Cộng sản Hồ Chí Minh.\r\nĐầu năm 2007, ông được điều động về làm Thành ủy viên Thành ủy TP.HCM, Bí thư Quận ủy Q.2. Năm 2009, ông được điều động về tham gia Ban Chấp hành, Ban Thường vụ Tỉnh ủy tỉnh Bến Tre, giữ chức Phó bí thư Tỉnh ủy Bến Tre.\r\nNăm 2010, ông được bầu làm Bí thư Tỉnh ủy Bến Tre. Năm 2013, ông được bầu giữ chức Chủ tịch HĐND tỉnh Bến Tre. Tháng 3.2015, ông được Trung ương điều động trở lại TP.HCM giữ cương vị Phó bí thư Thành ủy nhiệm kỳ 2010 - 2015.\r\nTại đại hội đại biểu Đảng bộ TP.HCM khóa 10, nhiệm kỳ 2015 - 2020 tổ chức vào giữa tháng 10.2015, ông Nguyễn Thành Phong tái cử Phó bí thư Thành ủy TP.HCM. \r\nTheo nguyên tắc, chủ tịch đương nhiệm sẽ giới thiệu nhân sự đủ điều kiện theo quy định của Đảng cho HĐND thành phố bầu. Thủ tướng sẽ phê chuẩn nhân sự mới từ việc bầu cử này.  \r\nCũng tại kỳ họp này, ông Tất Thành Cang sẽ được miễn nhiệm chức Phó chủ tịch UBND TP.HCM để chính thức chuyển sang Thành ủy TP.HCM với cương vị Phó bí thư mà ông được bầu tại đại hội đại biểu Đảng bộ TP.HCM khóa 10. \r\nCác Phó chủ tịch UBND TP.HCM, ủy viên ủy ban vừa nghỉ hưu hoặc không tham gia cấp ủy khóa mới, cũng sẽ được bầu nhân sự mới để kiện toàn bộ máy chính quyền thành phố. \n\n\n\r\nĐảng bộ TP.HCM khóa 10 hiện đang khuyết chức danh Bí thư Thành ủy. Bí thư Thành ủy (khóa 9) là Ủy viên Bộ Chính trị Lê Thanh Hải được Bộ Chính trị giao nhiệm vụ chỉ đạo Đảng bộ TP.HCM. Dự kiến sau đại hội đại biểu toàn quốc lần thứ 12 của Đảng mới kiện toàn nhân sự chức danh quan trọng này.\r\nTrong 69 ủy viên Ban Chấp hành Đảng bộ TP.HCM khóa 10 đã bầu ra 15 Ủy viên Ban thường vụ Thành ủy, trong đó có 4 Phó bí thư: ông Võ Văn Thưởng (thường trực, 45 tuổi), bà Nguyễn Thị Quyết Tâm (Chủ tịch HĐND thành phố, 57 tuổi), ông Tất Thành Cang (Phó chủ tịch UBND TP.HCM, 44 tuổi) và ông Nguyễn Thành Phong.\n",
      word_count: 0,
      author: "Tân Phú",
      dateline: "",
      current_version: null,
      approved: true,
      published: true,
      publish_timer: "2018-12-12T09:35:30.979246Z",
      published_at: "2015-12-08T16:30:00Z",
      crawled_base_url: "https://thanhnien.vn/",
      crawled_site_name: "thanhnien.vn",
      crawled_url:
        "https://thanhnien.vn/thoi-su/ong-nguyen-thanh-phong-duoc-gioi-thieu-lam-chu-tich-ubnd-tphcm-643634.html",
      crawled_at: "2018-12-12T09:35:30.979246Z",
      is_selenium_updated: true,
      is_checked: false,
      created_at: "2018-12-12T09:35:30.990332Z",
      modified_at: "2018-12-29T17:32:33.913381Z",
      category_id: 1,
      timeline_id: 2,
      user_id: 1,
      tags: [4584, 4786, 2345, 4599, 4749, 4547]
    },
    {
      id: 1796,
      title:
        "Ông Tất Thành Cang: Mua thiết bị phòng chống lụt bão không nên rập khuôn",
      slug:
        "ong-tat-thanh-cang-mua-thiet-bi-phong-chong-lut-bao-khong-nen-rap-khuon-1544607338-039745",
      thumbnail:
        "https://news-system-asset.s3.amazonaws.com/media/article/thumbnail/28e0dfbc6a1d18238775a557c9cde6dfa54f12ab.jpg",
      article_body:
        '\n<p>Chiều 20.11, Phó bí thư Thành ủy TP.HCM Tất Thành Cang đi kiểm tra tình hình khắc phục thiệt hại do ảnh hưởng bão số 14 ở Q.Thủ Đức.\n</p>\n<p>Sau khi nghe lãnh đạo UBND Q.Thủ Đức báo cáo tình hình thiệt hại ở quận, ông Cang yêu cầu quận báo kế hoạch mua sắm để phục vụ phòng chống lụt bão.&nbsp;</p>\n<p>Sau yêu cầu của Phó bí thư Thành ủy, ông Nguyễn Nam Hải, Trưởng phòng Quản lý đô thị quận cho hay đến nay quận đã đấu thầu xong và mua sắm những vật tư như thang, cưa, ủng… với tổng trị giá 900 triệu đồng.</p>\n<p>Nghe số liệu báo cáo quá chung chung, ông Cang yêu cầu chi tiết số lượng, công suất của từng loại thiết bị.</p>\n<p>Ông Hải cho hay ở quận có 13 cái với công suất "khoảng" 1,5 kW. </p>\n<div><table class="imagefull" style="height: auto;" align="center">\n    <tbody>\n        <tr>\n            <td>\n            <div style="text-align:center;color: #595959;"><div class="pswp-content__wrapimage"><div class="pswp-content__image"><figure itemprop="associatedMedia" data-index="1"><img alt="Ông Tất Thành Cang: Mua thiết bị phòng chống lụt bão không nên rập khuôn - ảnh 1" data-src="https://image.thanhnien.vn/480/uploaded/trunghieu/2017_11_20/img_0084_vrus.jpg" caption="Ông Tất Thành Cang: Mua thiết bị phòng chống lụt bão không nên rập khuôn - ảnh 1" style="height: auto;" class="loaded" src="https://image.thanhnien.vn/480/uploaded/trunghieu/2017_11_20/img_0084_vrus.jpg" data-was-processed="true"></figure><span>Nhà một người dân bị tốc mái Trung Hiếu</span></div></div>\n            <div class="pswp-content__caption"><i class="icon-camera"></i><div class="imgcaption">Nhà một người dân bị tốc mái <div class="source">Trung Hiếu</div></div></div>\n            </div>\n            </td>\n        </tr>\n    </tbody>\n</table></div>\n<p>Nghe đến đây ông Cang nói: “Trong chiến đấu thì không có nói khoảng mà phải nói chính xác".</p>\n<p>Ông Cang cũng lưu khi đấu thầu mua sắm thiết bị phòng chống bão lụt hay phòng cháy chữa cháy không nên mua rập khuôn mà phải mua phù hợp với điều kiện của từng quận.</p>\n<p>Theo báo cáo nhanh của UBND Q.Thủ Đức, cơn mưa lớn cùng với gió lốc gây ngã đổ cây xanh, hư hỏng nhà dân. Cụ thể có 231 nhà ở và 118 phỏng trọ bị tốc mái, 9 trụ điện bị ngã, 134 cây xanh bị ngã đổ... </p>\n<p>Đáng chú ý, do ảnh hưởng bão, 10 trưởng học ở quận bị tốc la phông; cây xanh trong trường bị đổ và hư hại nhiều thiết bị dạy học. Hiện quận đang dốc sức để khắc phục hậu quả sau bão.</p>\n\n',
      backstory:
        "Ông Tất Thành Cang cho hay việc mua thiết bị phòng chống lụt bão, cứu nạn, cứu hộ không nên rập khuôn mà phải tùy đặc điểm tình hình của từng quận.",
      description: "Nhà một người dân bị tốc mái Trung Hiếu\n",
      word_count: 0,
      author: "Trung Hiếu\n\n\n\nhieu.dinhquan@gmail.com",
      dateline: "",
      current_version: null,
      approved: true,
      published: true,
      publish_timer: "2018-12-12T09:35:38.044172Z",
      published_at: "2017-11-21T03:15:00Z",
      crawled_base_url: "https://thanhnien.vn/",
      crawled_site_name: "thanhnien.vn",
      crawled_url:
        "https://thanhnien.vn/thoi-su/ong-tat-thanh-cang-mua-thiet-bi-phong-chong-lut-bao-khong-nen-rap-khuon-901999.html",
      crawled_at: "2018-12-12T09:35:38.044172Z",
      is_selenium_updated: true,
      is_checked: false,
      created_at: "2018-12-12T09:35:38.051294Z",
      modified_at: "2018-12-29T17:32:34.287509Z",
      category_id: 1,
      timeline_id: 2,
      user_id: 1,
      tags: [4834, 4835, 4836, 4837, 4546, 4572]
    },
    {
      id: 1808,
      title:
        "Viện trưởng Viện KSND tối cao nói về việc xử lý ông Tất Thành Cang",
      slug:
        "vien-truong-vien-ksnd-toi-cao-noi-ve-viec-xu-ly-ong-tat-thanh-cang-1544607339-031402",
      thumbnail:
        "https://news-system-asset.s3.amazonaws.com/media/article/thumbnail/3172a3f3e9df727413e6dd198ce5723817f3f785.jpg",
      article_body:
        '\n<div>Sáng 26.11, Đoàn đại biểu Quốc hội TP.HCM (đơn vị bầu cử số 4) tiếp xúc cử tri ở Q.5.</div>\n<div>Tổ bầu cử này có ông Lê Minh Trí, Viện trưởng Viện KSND tối cao; ông Huỳnh Thành Đạt, Giám đốc Đại học Quốc gia TP.HCM; ông Phạm Phú Quốc, Phó viện trưởng Viện Nghiên cứu phát triển TP.HCM.</div>\n<div>Tại cuộc tiếp xúc, cử tri đặt nhiều vấn đề quan tâm trong đó nhấn mạnh tới công tác phòng chống tham nhũng của Đảng và nhà nước, việc xử lý cán bộ vi phạm.<br>\n</div>\n<p><strong>Xử lý cán bộ cấp cao cần phải có quy trình, đúng quy định</strong></p>\n<p>Ông Lê Minh Trí cho hay khi xử lý cán bộ có chức vụ cao cần phải có quy trình, đúng quy định. Ví dụ, muốn khởi tố đại biểu Quốc hội thì phải xin ý kiến Quốc hội, xin ý kiến Ủy ban Thường vụ Quốc hội nếu không diễn ra trong kỳ họp Quốc hội.</p>\n<p>“Đại biểu Quốc hội có ba quyền bất khả xâm phạm: Một là khởi tố, hai là bắt tạm giam và ba là khám xét nơi ở, nhà riêng thì phải xin phép chứ không phải muốn là đụng vào được vì luật đã quy định”, ông Trí nói.</p>\n<p>Theo ông Trí, có những cán bộ qua thanh tra, kiểm tra, điều tra có “hành vi a, b, c thế này” nhưng phải chờ các cấp có thẩm quyền kết luận mới có giá trị pháp lý. Giống như khi tòa tuyên án thì người bị tuyên án mới có tội.</p>\n<p>“Tôi sẽ tiếp thu ý kiến của cử tri để báo cáo làm sao những quy trình này gọn hơn, hợp lý hơn”, ông Trí nói.</p>\n<p>Về câu hỏi liên quan đến việc <a href="/thoi-su/ong-tat-thanh-cang-sai-pham-rat-nghiem-trong-phai-ky-luat-1023880.html" target="_blank" rel="">xử lý ông Tất Thành Cang</a>, Phó bí thư thường trực Thành ủy TP.HCM, mà cử tri nêu ra, ông Trí cho hay vấn đề này phải chờ đợi Ban chấp hành T.Ư Đảng xem xét kỷ luật ông Cang.</p>\n<p>“Sắp tới Ban chấp hành T.Ư Đảng họp bỏ phiếu thì mới biết ông Cang có bị kỷ luật hay không, hoặc kỷ luật bằng hình thức nào, tức là phân cấp theo việc quản lý cán bộ.</p>\n<p><b>Tiếp tục điều tra, khởi tố các vụ án tham nhũng lớn</b><br>\n</p>\n<p>Liên quan về việc xử lý cán bộ vi phạm, ông Trí cho hay "dù đau cũng phải làm", làm để dân tin, dân đồng thuận với Đảng, với Nhà nước, đưa đất nước tiếp tục phát triển ổn định và đi lên.<br>\n</p>\n<p>Ông Trí cho hay việc chống tham nhũng, xử lý cán bộ vi phạm là cuộc đấu tranh gay go, phức tạp.</p>\n<p>“Một là những đối tượng này có chức, có quyền, hai là có quan hệ, ba là có trình độ để tẩu tán. Cho nên đây là cuộc đấu tranh gay go và dù là nỗi đau nhưng cũng phải làm đến nơi, đến chốn để cho dân tin, làm trong sạch bộ máy để môi trường đầu tư tốt lên hỗ trợ doanh nghiệp”, ông Trí khẳng định.</p>\n<p>Theo ông Trí, thời gian tới sẽ còn điều tra, tiếp tục khởi tố những cán bộ gây ra sai phạm.</p>\n\n\n',
      backstory:
        "Viện trưởng Viện KSND tối cao Lê Minh Trí đề cập đến việc xử lý vi phạm của ông Tất Thành Cang tại cuộc tiếp xúc cử tri ở Q.5 (TP.HCM).",
      description:
        "Sáng 26.11, Đoàn đại biểu Quốc hội TP.HCM (đơn vị bầu cử số 4) tiếp xúc cử tri ở Q.5.\r\nTổ bầu cử này có ông Lê Minh Trí, Viện trưởng Viện KSND tối cao; ông Huỳnh Thành Đạt, Giám đốc Đại học Quốc gia TP.HCM; ông Phạm Phú Quốc, Phó viện trưởng Viện Nghiên cứu phát triển TP.HCM.\r\nTại cuộc tiếp xúc, cử tri đặt nhiều vấn đề quan tâm trong đó nhấn mạnh tới công tác phòng chống tham nhũng của Đảng và nhà nước, việc xử lý cán bộ vi phạm.\n",
      word_count: 0,
      author: "Trung Hiếu\n\n\n\nhieu.dinhquan@gmail.com",
      dateline: "",
      current_version: null,
      approved: true,
      published: true,
      publish_timer: "2018-12-12T09:35:39.035545Z",
      published_at: "2018-11-26T18:34:00Z",
      crawled_base_url: "https://thanhnien.vn/",
      crawled_site_name: "thanhnien.vn",
      crawled_url:
        "https://thanhnien.vn/thoi-su/vien-truong-vien-ksnd-toi-cao-noi-ve-viec-xu-ly-ong-tat-thanh-cang-1027184.html",
      crawled_at: "2018-12-12T09:35:39.035545Z",
      is_selenium_updated: true,
      is_checked: false,
      created_at: "2018-12-12T09:35:39.043654Z",
      modified_at: "2018-12-29T17:32:34.313589Z",
      category_id: 1,
      timeline_id: 2,
      user_id: 1,
      tags: [4857, 4546, 4858, 4567, 4859]
    },
    {
      id: 1743,
      title:
        "Bí thư Quận ủy Q.2 giữ chức Chủ nhiệm Ủy ban kiểm tra Thành ủy TP.HCM",
      slug:
        "bi-thu-quan-uy-q2-giu-chuc-chu-nhiem-uy-ban-kiem-tra-thanh-uy-tphcm-1544607331-032884",
      thumbnail:
        "https://news-system-asset.s3.amazonaws.com/media/article/thumbnail/93e347ebc79efdaca8d5ad3ae9157a13950321fa.jpg",
      article_body:
        '\n<p class="Nidung" style="margin-bottom: 6pt;">Trước đó, ông Cang cũng trao quyết định của Ban thường vụ Thành ủy TP điều động ông Hiếu đến nhận nhiệm vụ tại UBKT Thành ủy TP.<br>\n</p>\n<p class="Nidung" style="margin-bottom: 6pt;">Ông Nguyễn Văn Hiếu (SN 1976), quê quán tại H.Tuy Phước (Bình Định). </p>\n<p class="Nidung" style="margin-bottom: 6pt;">Trước khi làm Bí thư Quận ủy Q.2, ông Hiếu có thời gian dài hoạt động trong lĩnh vực đoàn và từng giữ vị trí Bí thư Thành đoàn TP.HCM. Ông Hiếu còn là một trong hai ủy viên dự khuyết trẻ nhất của Ban Chấp hành T.Ư Đảng khóa 12.</p>\n<div class="Nidung" style="nomargin-bottom: 6pt;">\n<table style="width: 500px; height: auto;" bordercolor="#3068f8" cellspacing="0" cellpadding="0" rules="none" align="center" border="2px" class="quote--full quote quote--cyan">\n    <tbody>\n        <tr>\n            <td style="background-color: #e3edf7; padding:5px; text-align:justify" align="left">\n            <div style="font-size: 13px; color: #000080;"><strong>Điều động nhân sự mới</strong></div>\n            <div style="font-size: 13px; color: #000080;">Trong sáng 25.7, Thành ủy, HĐND, UBND TP cũng trao quyết định điều động một số nhân sự. Theo đó, ông Triệu Đỗ Hồng Phước, nguyên Phó chủ tịch UBND H.Cần Giờ làm Chánh văn phòng HĐND TP; ông Lê Văn Đức, Chánh văn phòng&nbsp;&nbsp;UBKT Thành ủy TP nhận nhiệm vụ tại HĐND TP;&nbsp;ông Nguyễn Hoài Nam, nguyên Phó giám đốc Sở Quy hoạch - Kiến trúc TP và ông Phạm Minh Trí, Trưởng ban Đổi mới quản lý doanh nghiệp TP nghỉ hưu theo chế độ bắt đầu từ ngày 1.8.</div>\n            </td>\n        </tr>\n    </tbody>\n</table>\n<br>\n</div>\n\n\n\n',
      backstory:
        "Sáng 25.7, Phó bí thư thường trực Thành ủy TP.HCM Tất Thành Cang trao quyết định phân công ông Nguyễn Văn Hiếu, Bí thư Quận ủy Q.2 giữ chức  Chủ nhiệm Ủy ban Kiểm tra (UBKT) Thành ủy TP nhiệm kỳ 2015 – 2020.",
      description:
        "Trong sáng 25.7, Thành ủy, HĐND, UBND TP cũng trao quyết định điều động một số nhân sự. Theo đó, ông Triệu Đỗ Hồng Phước, nguyên Phó chủ tịch UBND H.Cần Giờ làm Chánh văn phòng HĐND TP; ông Lê Văn Đức, Chánh văn phòng  UBKT Thành ủy TP nhận nhiệm vụ tại HĐND TP; ông Nguyễn Hoài Nam, nguyên Phó giám đốc Sở Quy hoạch - Kiến trúc TP và ông Phạm Minh Trí, Trưởng ban Đổi mới quản lý doanh nghiệp TP nghỉ hưu theo chế độ bắt đầu từ ngày 1.8.\n",
      word_count: 0,
      author: "Trung Hiếu\n\n\n\nhieu.dinhquan@gmail.com",
      dateline: "",
      current_version: null,
      approved: true,
      published: true,
      publish_timer: "2018-12-12T09:35:31.036891Z",
      published_at: "2016-07-25T23:06:33Z",
      crawled_base_url: "https://thanhnien.vn/",
      crawled_site_name: "thanhnien.vn",
      crawled_url:
        "https://thanhnien.vn/thoi-su/bi-thu-quan-uy-q2-giu-chuc-chu-nhiem-uy-ban-kiem-tra-thanh-uy-tphcm-726783.html",
      crawled_at: "2018-12-12T09:35:31.036891Z",
      is_selenium_updated: true,
      is_checked: false,
      created_at: "2018-12-12T09:35:31.044200Z",
      modified_at: "2018-12-29T17:32:39.038140Z",
      category_id: 1,
      timeline_id: 2,
      user_id: 1,
      tags: [4787, 4788, 4789, 4790, 4572]
    },
    {
      id: 1814,
      title:
        "Ủy ban Kiểm tra T.Ư: Sai phạm của ông Tất Thành Cang là rất nghiêm trọng",
      slug:
        "uy-ban-kiem-tra-tu-sai-pham-cua-ong-tat-thanh-cang-la-rat-nghiem-trong-1544607339-458518",
      thumbnail:
        "https://news-system-asset.s3.amazonaws.com/media/article/thumbnail/58f1ba80afb1c8c732ea98ffc0a4e1fb1d4eeac9.jpg",
      article_body:
        "\n<div>Theo thông cáo kỳ họp thứ 31 của Ủy ban Kiểm tra T.Ư, từ ngày 12 - 14.11, tại Hà Nội, Ủy ban Kiểm tra T.Ư đã họp kỳ 31.</div>\n<div>\n<div>Tại kỳ họp này, Ủy ban Kiểm tra T.Ư đã xem xét, kết luận việc kiểm tra khi có dấu hiệu vi phạm đối với ông Tất Thành Cang, Ủy viên T.Ư Đảng, Phó bí thư thường trực Thành uỷ thành phố Hồ Chí Minh.</div>\n<div>Theo đó, Ủy ban Kiểm tra T.Ư đánh giá, ông Tất Thành Cang đã vi phạm nguyên tắc tập trung dân chủ và quy chế làm việc, vi phạm thẩm quyền, nguyên tắc, quy trình xử lý công việc, vi phạm quy định của Thành ủy về quản lý, sử dụng tài sản tại các doanh nghiệp thuộc sở hữu Đảng bộ Thành phố và các quy định pháp luật trong việc quyết định chủ trương hợp tác kinh doanh, chuyển nhượng dự án, chuyển nhượng quyền sử dụng đất của các doanh nghiệp thuộc Thành ủy, chấp thuận chủ trương để người đại diện phần vốn của Thành ủy biểu quyết phát hành cổ phần cho cổ đông chiến lược tại doanh nghiệp; thiếu trách nhiệm, buông lỏng lãnh đạo, chỉ đạo, thiếu kiểm tra, giám sát, để lĩnh vực được phân công phụ trách có nhiều vi phạm pháp luật, gây thiệt hại lớn cho ngân sách Đảng bộ Thành phố.</div>\n<div>Trong thời gian giữ cương vị Thành ủy viên, Ủy viên UBND Thành phố, Giám đốc Sở Giao thông vận tải Thành phố Hồ Chí Minh, ông Tất Thành Cang đã vi phạm quy định pháp luật về đất đai và quản lý đầu tư xây dựng trong việc ký quyết định phê duyệt dự án và ký tắt hợp đồng dự án đầu tư xây dựng 4 tuyến đường chính trong Khu đô thị mới Thủ Thiêm.</div>\n<div>Những vi phạm của ông Tất Thành Cang là rất nghiêm trọng, gây bức xúc trong xã hội, làm ảnh hưởng lớn đến uy tín của Thành ủy, đến mức phải xem xét, thi hành kỷ luật.</div>\n</div>\n\n",
      backstory:
        "kết luận, những sai phạm của ông Tất Thành Cang, Phó bí thư thường trực Thành ủy thành phố Hồ Chí Minh, là rất nghiêm trọng.",
      description:
        "Theo thông cáo kỳ họp thứ 31 của Ủy ban Kiểm tra T.Ư, từ ngày 12 - 14.11, tại Hà Nội, Ủy ban Kiểm tra T.Ư đã họp kỳ 31.\r\n\r\nTại kỳ họp này, Ủy ban Kiểm tra T.Ư đã xem xét, kết luận việc kiểm tra khi có dấu hiệu vi phạm đối với ông Tất Thành Cang, Ủy viên T.Ư Đảng, Phó bí thư thường trực Thành uỷ thành phố Hồ Chí Minh.\r\nTheo đó, Ủy ban Kiểm tra T.Ư đánh giá, ông Tất Thành Cang đã vi phạm nguyên tắc tập trung dân chủ và quy chế làm việc, vi phạm thẩm quyền, nguyên tắc, quy trình xử lý công việc, vi phạm quy định của Thành ủy về quản lý, sử dụng tài sản tại các doanh nghiệp thuộc sở hữu Đảng bộ Thành phố và các quy định pháp luật trong việc quyết định chủ trương hợp tác kinh doanh, chuyển nhượng dự án, chuyển nhượng quyền sử dụng đất của các doanh nghiệp thuộc Thành ủy, chấp thuận chủ trương để người đại diện phần vốn của Thành ủy biểu quyết phát hành cổ phần cho cổ đông chiến lược tại doanh nghiệp; thiếu trách nhiệm, buông lỏng lãnh đạo, chỉ đạo, thiếu kiểm tra, giám sát, để lĩnh vực được phân công phụ trách có nhiều vi phạm pháp luật, gây thiệt hại lớn cho ngân sách Đảng bộ Thành phố.\r\nTrong thời gian giữ cương vị Thành ủy viên, Ủy viên UBND Thành phố, Giám đốc Sở Giao thông vận tải Thành phố Hồ Chí Minh, ông Tất Thành Cang đã vi phạm quy định pháp luật về đất đai và quản lý đầu tư xây dựng trong việc ký quyết định phê duyệt dự án và ký tắt hợp đồng dự án đầu tư xây dựng 4 tuyến đường chính trong Khu đô thị mới Thủ Thiêm.\r\nNhững vi phạm của ông Tất Thành Cang là rất nghiêm trọng, gây bức xúc trong xã hội, làm ảnh hưởng lớn đến uy tín của Thành ủy, đến mức phải xem xét, thi hành kỷ luật.\n",
      word_count: 0,
      author: "Lê Hiệp",
      dateline: "",
      current_version: null,
      approved: true,
      published: true,
      publish_timer: "2018-12-12T09:35:39.462461Z",
      published_at: "2018-11-15T23:08:00Z",
      crawled_base_url: "https://thanhnien.vn/",
      crawled_site_name: "thanhnien.vn",
      crawled_url:
        "https://thanhnien.vn/thoi-su/uy-ban-kiem-tra-tu-sai-pham-cua-ong-tat-thanh-cang-la-rat-nghiem-trong-1023678.html",
      crawled_at: "2018-12-12T09:35:39.462461Z",
      is_selenium_updated: true,
      is_checked: false,
      created_at: "2018-12-12T09:35:39.469750Z",
      modified_at: "2018-12-29T17:32:39.248517Z",
      category_id: 1,
      timeline_id: 2,
      user_id: 1,
      tags: [4546, 4608, 4840, 4861, 4661]
    },
    {
      id: 1582,
      title: "TP.HCM quyết liệt xử lý các cơ sở có nguy cơ gây cháy nổ",
      slug:
        "tphcm-quyet-liet-xu-ly-cac-co-so-co-nguy-co-gay-chay-no-1544607315-222894",
      thumbnail:
        "https://news-system-asset.s3.amazonaws.com/media/article/thumbnail/8ad3abc27c12013d4bf45320f25861eac29864b9.jpg",
      article_body:
        '\n<div><span style="font-weight: bold; color: #595959;">Ngày 5.9, Văn phòng UBND TP.HCM cho biết Phó chủ tịch UBND TP Tất Thành Cang đã chủ trì cuộc họp Thường trực Ban Chỉ đạo xử lý cơ sở gây ô nhiễm môi trường, không phù hợp quy hoạch và có </span><a href="/chinh-tri-xa-hoi/buoc-di-doi-co-so-nguy-hiem-chay-no-nam-trong-khu-dan-cu-583000.html" target="_blank" style="font-weight: bold;" rel="">nguy cơ cháy, nổ</a><span style="font-weight: bold; color: #595959;"> nằm trong khu dân cư trên địa bàn.</span></div>\n<div>\n<table class="imagefull" align="center" style="height: auto;">\n    <tbody>\n        <tr>\n            <td>\n            <div style="text-align: center; color: #595959;"><div class="pswp-content__wrapimage"><div class="pswp-content__image"><figure itemprop="associatedMedia" data-index="1"><img alt="Việc di dời chợ hóa chất Kim Biên đến nay vẫn chưa được tiến hành - Ảnh: Diệp Đức Minh" data-src="https://image.thanhnien.vn/665/uploaded/congthang/2015_09_06/chay-no_tixz.jpg" caption="TP.HCM quyết liệt xử lý các cơ sở có nguy cơ gây cháy nổ - ảnh 1" style="height: auto;" class="loaded" src="https://image.thanhnien.vn/665/uploaded/congthang/2015_09_06/chay-no_tixz.jpg" data-was-processed="true"></figure><span>Việc di dời chợ hóa chất Kim Biên đến nay vẫn chưa được tiến hành - Ảnh: Diệp Đức Minh</span></div></div>Việc di dời chợ hóa chất Kim Biên đến nay vẫn chưa được tiến hành - Ảnh: Diệp Đức Minh</div>\n            </td>\n        </tr>\n    </tbody>\n</table>\n</div>\n<div>Đối với kế hoạch xử lý cơ sở có nguy cơ cháy, nổ nằm trong khu dân cư (giai đoạn 2015 - 2018), ông Cang giao Cảnh sát PCCC TP chủ trì, phối hợp UBND các quận, huyện, các sở ngành xây dựng kế hoạch kiểm tra, khảo sát, bao gồm các cơ sở sản xuất, kinh doanh, dịch vụ, cơ quan, công sở, trường học, bệnh viện, nhà xưởng, kho hàng. Kế hoạch kiểm tra, khảo sát có thể chia làm 3 nhóm (theo khu vực, địa bàn hoặc theo ngành nghề…); ghi rõ thời gian, tiến độ thực hiện; danh mục các cơ sở thực hiện kiểm tra và khu vực làm thí điểm; phân công nhiệm vụ cho các đơn vị và báo cáo UBND TP kết quả thực hiện vào trung tuần tháng 9.2015.</div>\n<div>Theo tìm hiểu của PV <em>Thanh Niên</em>, từ năm 2009, Ban Thường vụ Thành ủy TP.HCM đã ban hành Chỉ thị về tăng cường lãnh đạo công tác PCCC và cứu hộ - cứu nạn trên địa bàn TP; trong đó yêu cầu UBND TP chỉ đạo UBND các quận, huyện chủ trì kiểm tra, rà soát, di dời các cơ sở sản xuất nằm trong khu vực dân cư có nguy cơ, nguy hiểm về cháy nổ. Sau khi có chỉ thị, UBND TP ban hành kế hoạch triển khai thực hiện nhưng 6 năm qua vẫn chưa có chuyển biến.</div>\n<div>UBND TP cho rằng UBND các quận, huyện chưa thực sự quan tâm đến công tác di dời cơ sở nguy hiểm cháy nổ ra khỏi khu dân cư... Tuy nhiên, khi trao đổi với PV, một số lãnh đạo quận, huyện trên địa bàn TP lại cho rằng mặc dù có chủ trương di dời nhưng không thể thực hiện được vì TP chưa ban hành tiêu chí, chính sách, cơ chế hỗ trợ và điều kiện thực hiện. </div>\n<div>Đại tá Lê Tấn Bửu, Giám đốc Cảnh sát PCCC TP, cho biết trên địa bàn TP hiện có khoảng gần 20.000 cơ sở kinh doanh, dịch vụ, sản xuất trong khu dân cư dễ phát sinh cháy nổ, trong đó có khoảng 5.300 cơ sở có nguy cơ cháy nổ cao tập trung các ngành nghề: gia công, hàn cắt kim loại; sản xuất, buôn bán nhựa, da, giày; cơ sở nệm, mút, xốp, bông gòn, may mặc, dệt, kinh doanh vải…</div>\n<div>\n<table style="width: 500px; height: auto;" bordercolor="#3068f8" cellspacing="0" cellpadding="0" rules="none" align="center" border="2px" class="quote--full quote quote--cyan">\n    <tbody>\n        <tr>\n            <td style="padding: 5px; text-align: justify; background-color: #e3edf7;" align="left">\n            <div style="font-size: 13px; color: #000080;"><strong>Phải tổng lực di dời sớm</strong></div>\n            <div style="font-size: 13px; color: #000080;">\n            <div>Từ năm 2014 đến nay đã xảy ra 118 vụ cháy tại những cơ sở nằm trong khu dân cư, trong đó có 34 vụ cháy xảy ra tại các cơ sở nguy hiểm về cháy nổ. Riêng về nổ xảy ra 2 vụ do bố trí lắp đặt, sử dụng các loại bình gas, nồi hơi, bình nén khí không đảm bảo an toàn PCCC; việc sử dụng, tồn chứa các loại vật liệu, hàng hóa, phân bón, hóa chất nguy hiểm...</div>\n            </div>\n            </td>\n        </tr>\n    </tbody>\n</table>\n</div>\n\n',
      backstory:
        "Ngày 5.9, Văn phòng UBND TP.HCM cho biết Phó chủ tịch UBND TP Tất Thành Cang đã chủ trì cuộc họp Thường trực Ban Chỉ đạo xử lý cơ sở gây ô nhiễm môi trường, không phù hợp quy hoạch và có  nằm trong khu dân cư trên địa bàn.",
      description:
        "Việc di dời chợ hóa chất Kim Biên đến nay vẫn chưa được tiến hành - Ảnh: Diệp Đức Minh\r\n\r\nĐối với kế hoạch xử lý cơ sở có nguy cơ cháy, nổ nằm trong khu dân cư (giai đoạn 2015 - 2018), ông Cang giao Cảnh sát PCCC TP chủ trì, phối hợp UBND các quận, huyện, các sở ngành xây dựng kế hoạch kiểm tra, khảo sát, bao gồm các cơ sở sản xuất, kinh doanh, dịch vụ, cơ quan, công sở, trường học, bệnh viện, nhà xưởng, kho hàng. Kế hoạch kiểm tra, khảo sát có thể chia làm 3 nhóm (theo khu vực, địa bàn hoặc theo ngành nghề…); ghi rõ thời gian, tiến độ thực hiện; danh mục các cơ sở thực hiện kiểm tra và khu vực làm thí điểm; phân công nhiệm vụ cho các đơn vị và báo cáo UBND TP kết quả thực hiện vào trung tuần tháng 9.2015.\r\nTheo tìm hiểu của PV , từ năm 2009, Ban Thường vụ Thành ủy TP.HCM đã ban hành Chỉ thị về tăng cường lãnh đạo công tác PCCC và cứu hộ - cứu nạn trên địa bàn TP; trong đó yêu cầu UBND TP chỉ đạo UBND các quận, huyện chủ trì kiểm tra, rà soát, di dời các cơ sở sản xuất nằm trong khu vực dân cư có nguy cơ, nguy hiểm về cháy nổ. Sau khi có chỉ thị, UBND TP ban hành kế hoạch triển khai thực hiện nhưng 6 năm qua vẫn chưa có chuyển biến.\r\nUBND TP cho rằng UBND các quận, huyện chưa thực sự quan tâm đến công tác di dời cơ sở nguy hiểm cháy nổ ra khỏi khu dân cư... Tuy nhiên, khi trao đổi với PV, một số lãnh đạo quận, huyện trên địa bàn TP lại cho rằng mặc dù có chủ trương di dời nhưng không thể thực hiện được vì TP chưa ban hành tiêu chí, chính sách, cơ chế hỗ trợ và điều kiện thực hiện. \n\n\n\r\nĐại tá Lê Tấn Bửu, Giám đốc Cảnh sát PCCC TP, cho biết trên địa bàn TP hiện có khoảng gần 20.000 cơ sở kinh doanh, dịch vụ, sản xuất trong khu dân cư dễ phát sinh cháy nổ, trong đó có khoảng 5.300 cơ sở có nguy cơ cháy nổ cao tập trung các ngành nghề: gia công, hàn cắt kim loại; sản xuất, buôn bán nhựa, da, giày; cơ sở nệm, mút, xốp, bông gòn, may mặc, dệt, kinh doanh vải…\r\n\r\n\r\n            Từ năm 2014 đến nay đã xảy ra 118 vụ cháy tại những cơ sở nằm trong khu dân cư, trong đó có 34 vụ cháy xảy ra tại các cơ sở nguy hiểm về cháy nổ. Riêng về nổ xảy ra 2 vụ do bố trí lắp đặt, sử dụng các loại bình gas, nồi hơi, bình nén khí không đảm bảo an toàn PCCC; việc sử dụng, tồn chứa các loại vật liệu, hàng hóa, phân bón, hóa chất nguy hiểm...\n",
      word_count: 0,
      author: "Tân Phú - Công Nguyên",
      dateline: "",
      current_version: null,
      approved: true,
      published: true,
      publish_timer: "2018-12-12T09:35:15.235703Z",
      published_at: "2015-09-07T13:10:00Z",
      crawled_base_url: "https://thanhnien.vn/",
      crawled_site_name: "thanhnien.vn",
      crawled_url:
        "https://thanhnien.vn/thoi-su/tphcm-quyet-liet-xu-ly-cac-co-so-co-nguy-co-gay-chay-no-605252.html",
      crawled_at: "2018-12-12T09:35:15.235703Z",
      is_selenium_updated: true,
      is_checked: false,
      created_at: "2018-12-12T09:35:15.261680Z",
      modified_at: "2018-12-29T17:32:40.142755Z",
      category_id: 1,
      timeline_id: 2,
      user_id: 1,
      tags: [4543, 4544, 45, 4545, 9, 4546, 4547, 4548]
    },
    {
      id: 1737,
      title: "TP.HCM mỗi năm có hơn 725.000 thanh niên được tư vấn nghề nghiệp",
      slug:
        "tphcm-moi-nam-co-hon-725000-thanh-nien-uoc-tu-van-nghe-nghiep-1544607330-465937",
      thumbnail:
        "https://news-system-asset.s3.amazonaws.com/media/article/thumbnail/5c20ce4f9d9367c7e5f60d9c96aa30232300733a.jpg",
      article_body:
        "\n<div> Buổi làm việc này nhằm kiểm tra việc thực hiện pháp luật, chính sách và công tác thanh niên tại TP.HCM.</div>\n<div>Theo báo cáo của UBND TP.HCM, mỗi năm thành phố có hơn 725.000 thanh niên được tư vấn nghề nghiệp và việc làm, đạt 72,39% (trong đó có khoảng 191.000 thanh niên có việc làm ổn định); xét duyệt hơn 1.880 dự án vay vốn từ các nguồn quỹ với tổng số tiền hơn 116 tỉ đồng, góp phần giải quyết việc làm cho hơn 10.000 lao động.</div>\n<div>Phát biểu tại buổi làm việc, Phó bí thư Thành ủy, Phó chủ tịch UBND TP.HCM Tất Thành Cang cho rằng: “TP.HCM luôn tạo điều kiện để phát huy thanh niên trong học tập, lao động và việc làm, đồng thời tạo điều kiện thuận lợi để thanh niên có cơ hội phát triển”. </div>\n<div>Tuy nhiên, ông Cang cũng nhìn nhận: “Khi triển khai các nôi dung, chương trình đi vào thực hiện vẫn còn những hạn chế nhất định. Tôi đề nghị các ban, ngành phải xem thanh niên là đối tượng đặc thù và cần có những biện pháp đi sâu sát hơn. Mặt khác, chúng ta vẫn chưa tập hợp được và chưa giáo dục được thanh niên qua mạng internet. Đó là một mặt trận chưa mạnh và nếu bỏ sót thì đó sẽ là một sự yếu kém”.</div>\n<div>Kết luận buổi làm việc, thượng tướng Phương Minh Hòa đánh giá cao kết quả thực hiện công tác thanh niên của TP.HCM trong thời gian qua. Ông Hòa đề nghị các sở, ngành của thành phố cần quan tâm, lắng nghe nhu cầu, nguyện vọng và phát hiện khả năng của thanh niên; chọn việc phù hợp để tập hợp, khơi dậy và tạo môi trường phát huy khả năng sáng tạo, cống hiến của thanh niên. Song song đó cần tăng cường công tác đào tạo, quy hoạch để nâng cao tay nghề, phát triển trình độ khoa học công nghệ cao cho nguồn nhân lực trẻ nhằm với đáp ứng yêu cầu phát triển kinh tế, văn hóa, xã hội của thành phố trong tình hình mới. </div>\n<div>Thượng tướng Phương Minh Hòa cũng lưu ý: “Trong chiến lược phát triển thanh niên từ nay tới năm 2020, TP.HCM cần chú trọng nắm bắt tâm tư, nguyện vọng của thanh niên và kịp thời có sự điều chỉnh phù hợp, tạo điều kiện thuận lợi cho thanh niên phát triển với tình hình thực tế. Đặc biệt, tạo điều kiện thuận lợi cho thanh niên công nhân trong các khu công nghiệp, nhất là giải quyết về vấn đề nhà ở và các thiết chế văn hóa”.&nbsp;</div>\n\n",
      backstory:
        "Chiều 3.12, Đoàn công tác của Ủy ban Quốc gia về thanh niên VN do thượng tướng Phương Minh Hòa - Ủy viên T.Ư Đảng, Phó chủ nhiệm Tổng cục chính trị QĐND VN, Ủy viên Ủy ban Quốc gia về Thanh niên VN làm trưởng đoàn đã có buổi làm việc với UBND TP.HCM.",
      description:
        "Buổi làm việc này nhằm kiểm tra việc thực hiện pháp luật, chính sách và công tác thanh niên tại TP.HCM.\r\nTheo báo cáo của UBND TP.HCM, mỗi năm thành phố có hơn 725.000 thanh niên được tư vấn nghề nghiệp và việc làm, đạt 72,39% (trong đó có khoảng 191.000 thanh niên có việc làm ổn định); xét duyệt hơn 1.880 dự án vay vốn từ các nguồn quỹ với tổng số tiền hơn 116 tỉ đồng, góp phần giải quyết việc làm cho hơn 10.000 lao động.\r\nPhát biểu tại buổi làm việc, Phó bí thư Thành ủy, Phó chủ tịch UBND TP.HCM Tất Thành Cang cho rằng: “TP.HCM luôn tạo điều kiện để phát huy thanh niên trong học tập, lao động và việc làm, đồng thời tạo điều kiện thuận lợi để thanh niên có cơ hội phát triển”. \r\nTuy nhiên, ông Cang cũng nhìn nhận: “Khi triển khai các nôi dung, chương trình đi vào thực hiện vẫn còn những hạn chế nhất định. Tôi đề nghị các ban, ngành phải xem thanh niên là đối tượng đặc thù và cần có những biện pháp đi sâu sát hơn. Mặt khác, chúng ta vẫn chưa tập hợp được và chưa giáo dục được thanh niên qua mạng internet. Đó là một mặt trận chưa mạnh và nếu bỏ sót thì đó sẽ là một sự yếu kém”.\n\n\n\r\nKết luận buổi làm việc, thượng tướng Phương Minh Hòa đánh giá cao kết quả thực hiện công tác thanh niên của TP.HCM trong thời gian qua. Ông Hòa đề nghị các sở, ngành của thành phố cần quan tâm, lắng nghe nhu cầu, nguyện vọng và phát hiện khả năng của thanh niên; chọn việc phù hợp để tập hợp, khơi dậy và tạo môi trường phát huy khả năng sáng tạo, cống hiến của thanh niên. Song song đó cần tăng cường công tác đào tạo, quy hoạch để nâng cao tay nghề, phát triển trình độ khoa học công nghệ cao cho nguồn nhân lực trẻ nhằm với đáp ứng yêu cầu phát triển kinh tế, văn hóa, xã hội của thành phố trong tình hình mới. \r\nThượng tướng Phương Minh Hòa cũng lưu ý: “Trong chiến lược phát triển thanh niên từ nay tới năm 2020, TP.HCM cần chú trọng nắm bắt tâm tư, nguyện vọng của thanh niên và kịp thời có sự điều chỉnh phù hợp, tạo điều kiện thuận lợi cho thanh niên phát triển với tình hình thực tế. Đặc biệt, tạo điều kiện thuận lợi cho thanh niên công nhân trong các khu công nghiệp, nhất là giải quyết về vấn đề nhà ở và các thiết chế văn hóa”.\n",
      word_count: 0,
      author: "Lê Thanh",
      dateline: "",
      current_version: null,
      approved: true,
      published: true,
      publish_timer: "2018-12-12T09:35:30.469557Z",
      published_at: "2015-12-04T15:00:00Z",
      crawled_base_url: "https://thanhnien.vn/",
      crawled_site_name: "thanhnien.vn",
      crawled_url:
        "https://thanhnien.vn/gioi-tre/tphcm-moi-nam-co-hon-725000-thanh-nien-duoc-tu-van-nghe-nghiep-642021.html",
      crawled_at: "2018-12-12T09:35:30.469557Z",
      is_selenium_updated: true,
      is_checked: false,
      created_at: "2018-12-12T09:35:30.477118Z",
      modified_at: "2018-12-29T17:32:40.717021Z",
      category_id: 5,
      timeline_id: 2,
      user_id: 1,
      tags: [387, 654, 262, 1381, 4546, 4765, 4766]
    },
    {
      id: 1739,
      title:
        "Ông Tất Thành Cang: Việc của người dân, doanh nghiệp 10 năm chưa xong",
      slug:
        "ong-tat-thanh-cang-viec-cua-nguoi-dan-doanh-nghiep-10-nam-chua-xong-1544607330-598062",
      thumbnail:
        "https://news-system-asset.s3.amazonaws.com/media/article/thumbnail/7496bc1e75dd8fc12eafb5e98bf551d85d4e6efc.jpg",
      article_body:
        '\n<div>Ông Tất Thành Cang, Phó bí thư Thành ủy, Phó chủ tịch UBND TP.HCM đã thẳng thắn nhìn nhận như vậy tại hội nghị báo cáo kết quả đại hội Đảng bộ TP.HCM lần thứ 10, nhiệm kỳ 2015 - 2020 do Ủy ban MTTQ Việt Nam TP.HCM tổ chức sáng nay, 29.10.</div>\n<div><strong>Sở ngành chuyển động rất chậm</strong></div>\n<div>Đề cập cụ thể đến nhiệm vụ tăng cường hiệu lực, hiệu quả quản lý nhà nước, ông Cang nhìn nhận thời gian qua có một số sở ngành chuyển động rất chậm, chậm đến mức mà Thường trực UBND thành phố sốt ruột, phải kiểm điểm trách nhiệm để xử lý. </div>\n<div>Ông Cang nêu ra một trong những bất cập trong việc cải cách hành chính, đó là có tình trạng chậm trễ giải quyết hồ sơ của người dân, doanh nghiệp; cán bộ, công chức yêu cầu bổ sung hồ sơ nhiều lần; hồ sơ đến ngày trả kết quả thì lại trả hồ sơ yêu cầu làm lại…</div>\n<div>Ông Cang thừa nhận một bất cập khác, mà theo ông là “vẫn còn tồn tại ở thành phố mình”, là có những việc trên nói dưới không nghe, cấp dưới chấp hành chỉ đạo của cấp trên không đầy đủ, dẫn đến thiếu trách nhiệm với dân, thiếu trách nhiệm với doanh nghiệp, dẫn đến tình trạng ở một số lĩnh vực đến nay vẫn còn tồn tại, hạn chế. </div>\n<div>“Có những việc của người dân, của doanh nghiệp mà 10 năm không xong vì nguyên do chính là đùn đẩy trách nhiệm; quận, huyện đẩy lên sở ngành, sở ngành lại đẩy lòng vòng. Trong chỉ đạo điều hành, thường trực ủy ban cũng nóng ruột, bức xúc lắm, bức xúc cho người dân, bức xúc cho doanh nghiệp…”, ông Cang nói.</div>\n<div>Ông Cang cho rằng những hạn chế, tồn tại cần phải sớm được khắc phục triệt để; cán bộ, công chức phải nâng cao ý thức tận tụy phục vụ người dân để phấn đấu vào top 5 về hiệu quả quản trị của nền hành chính công cấp tỉnh.</div>\n<div>Theo ông Cang, TP.HCM đóng góp hơn 20% GDP, 30% thu ngân sách của cả nước. Những năm tới nhiệm vụ thu ngân sách của thành phố hơn 250.000 tỉ đồng mỗi năm, do đó tinh thần cốt lõi là yêu cầu cán bộ, công chức phải tiếp tục không ngừng nỗ lực, cố gắng, luôn đề cao, thể hiện trách nhiệm, tận tâm trước công việc, trước dân.</div>\n<div>\n<div style="color: #000000; nomargin: 0px 0px 15px;">Theo ông Cang, nhiệm vụ trọng tâm trong 5 năm tới là xây dựng Đảng bộ TP.HCM thật trong sạch, vững mạnh; tăng cường hiệu lực, hiệu quả quản lý nhà nước; không ngừng đổi mới, năng động, sáng tạo, giữ vững ổn định chính trị - xã hội; nâng cao chất lượng tăng trưởng và năng lực cạnh tranh của kinh tế TP...&nbsp;</div>\n<div style="color: #000000; nomargin: 0px 0px 15px;">Trong nhiệm kỳ 2015 - 2020 sẽ đẩy mạnh thực hiện, nâng cao chất lượng, hiệu quả 6 chương trình đột phá trong nhiệm kỳ 2010 - 2015, có bổ sung nhiệm vụ, giải pháp trong từng chương trình; xây dựng thêm chương trình về chỉnh trang và phát triển đô thị.</div>\n<div style="color: #000000; nomargin: 0px 0px 15px;">Theo đó, xây dựng kế hoạch và bổ sung chính sách thu hút các nguồn lực chỉnh trang đô thị hiện hữu, trong đó tập trung hoàn thành việc di dời, tái bố trí toàn bộ nhà ở trên và ven kênh rạch, nâng cấp các khu phố có nhiều nhà lụp xụp, xây dựng mới các chung cư xuống cấp gắn với chỉnh trang đô thị, tạo thêm quỹ đất dành cho giao thông và công trình công cộng. </div>\n<div style="color: #000000; nomargin: 0px 0px 15px;">Đồng thời quy hoạch, xây dựng, phát triển các đô thị vệ tinh đồng bộ, văn minh, hiện đại; qua đó, tổ chức lại cuộc sống của dân cư, cải thiện điều kiện sống, tăng mức độ tiếp cận của nhân dân với các dịch vụ công; tăng diện tích mảng xanh và cây xanh...</div>\n</div>\n\n',
      backstory:
        "(TNO) “Có những việc của người dân, của doanh nghiệp mà 10 năm không xong vì nguyên do chính là đùn đẩy trách nhiệm; quận, huyện đẩy lên sở ngành, sở ngành lại đẩy lòng vòng. Trong chỉ đạo điều hành, thường trực ủy ban cũng nóng ruột, bức xúc lắm…”",
      description:
        "Ông Tất Thành Cang, Phó bí thư Thành ủy, Phó chủ tịch UBND TP.HCM đã thẳng thắn nhìn nhận như vậy tại hội nghị báo cáo kết quả đại hội Đảng bộ TP.HCM lần thứ 10, nhiệm kỳ 2015 - 2020 do Ủy ban MTTQ Việt Nam TP.HCM tổ chức sáng nay, 29.10.\r\n\r\nĐề cập cụ thể đến nhiệm vụ tăng cường hiệu lực, hiệu quả quản lý nhà nước, ông Cang nhìn nhận thời gian qua có một số sở ngành chuyển động rất chậm, chậm đến mức mà Thường trực UBND thành phố sốt ruột, phải kiểm điểm trách nhiệm để xử lý. \r\nÔng Cang nêu ra một trong những bất cập trong việc cải cách hành chính, đó là có tình trạng chậm trễ giải quyết hồ sơ của người dân, doanh nghiệp; cán bộ, công chức yêu cầu bổ sung hồ sơ nhiều lần; hồ sơ đến ngày trả kết quả thì lại trả hồ sơ yêu cầu làm lại…\r\nÔng Cang thừa nhận một bất cập khác, mà theo ông là “vẫn còn tồn tại ở thành phố mình”, là có những việc trên nói dưới không nghe, cấp dưới chấp hành chỉ đạo của cấp trên không đầy đủ, dẫn đến thiếu trách nhiệm với dân, thiếu trách nhiệm với doanh nghiệp, dẫn đến tình trạng ở một số lĩnh vực đến nay vẫn còn tồn tại, hạn chế. \r\n“Có những việc của người dân, của doanh nghiệp mà 10 năm không xong vì nguyên do chính là đùn đẩy trách nhiệm; quận, huyện đẩy lên sở ngành, sở ngành lại đẩy lòng vòng. Trong chỉ đạo điều hành, thường trực ủy ban cũng nóng ruột, bức xúc lắm, bức xúc cho người dân, bức xúc cho doanh nghiệp…”, ông Cang nói.\r\nÔng Cang cho rằng những hạn chế, tồn tại cần phải sớm được khắc phục triệt để; cán bộ, công chức phải nâng cao ý thức tận tụy phục vụ người dân để phấn đấu vào top 5 về hiệu quả quản trị của nền hành chính công cấp tỉnh.\n\n\n\r\nTheo ông Cang, TP.HCM đóng góp hơn 20% GDP, 30% thu ngân sách của cả nước. Những năm tới nhiệm vụ thu ngân sách của thành phố hơn 250.000 tỉ đồng mỗi năm, do đó tinh thần cốt lõi là yêu cầu cán bộ, công chức phải tiếp tục không ngừng nỗ lực, cố gắng, luôn đề cao, thể hiện trách nhiệm, tận tâm trước công việc, trước dân.\r\n\r\nTheo ông Cang, nhiệm vụ trọng tâm trong 5 năm tới là xây dựng Đảng bộ TP.HCM thật trong sạch, vững mạnh; tăng cường hiệu lực, hiệu quả quản lý nhà nước; không ngừng đổi mới, năng động, sáng tạo, giữ vững ổn định chính trị - xã hội; nâng cao chất lượng tăng trưởng và năng lực cạnh tranh của kinh tế TP... \r\nTrong nhiệm kỳ 2015 - 2020 sẽ đẩy mạnh thực hiện, nâng cao chất lượng, hiệu quả 6 chương trình đột phá trong nhiệm kỳ 2010 - 2015, có bổ sung nhiệm vụ, giải pháp trong từng chương trình; xây dựng thêm chương trình về chỉnh trang và phát triển đô thị.\r\nTheo đó, xây dựng kế hoạch và bổ sung chính sách thu hút các nguồn lực chỉnh trang đô thị hiện hữu, trong đó tập trung hoàn thành việc di dời, tái bố trí toàn bộ nhà ở trên và ven kênh rạch, nâng cấp các khu phố có nhiều nhà lụp xụp, xây dựng mới các chung cư xuống cấp gắn với chỉnh trang đô thị, tạo thêm quỹ đất dành cho giao thông và công trình công cộng. \r\nĐồng thời quy hoạch, xây dựng, phát triển các đô thị vệ tinh đồng bộ, văn minh, hiện đại; qua đó, tổ chức lại cuộc sống của dân cư, cải thiện điều kiện sống, tăng mức độ tiếp cận của nhân dân với các dịch vụ công; tăng diện tích mảng xanh và cây xanh...\n",
      word_count: 0,
      author: "Tân Phú",
      dateline: "",
      current_version: null,
      approved: true,
      published: true,
      publish_timer: "2018-12-12T09:35:30.602103Z",
      published_at: "2015-10-29T20:30:00Z",
      crawled_base_url: "https://thanhnien.vn/",
      crawled_site_name: "thanhnien.vn",
      crawled_url:
        "https://thanhnien.vn/thoi-su/ong-tat-thanh-cang-viec-cua-nguoi-dan-doanh-nghiep-10-nam-chua-xong-627200.html",
      crawled_at: "2018-12-12T09:35:30.602103Z",
      is_selenium_updated: true,
      is_checked: false,
      created_at: "2018-12-12T09:35:30.610957Z",
      modified_at: "2018-12-29T17:32:40.720165Z",
      category_id: 1,
      timeline_id: 2,
      user_id: 1,
      tags: [4771, 4772, 120, 4773, 2861, 4774, 9, 4775, 4776, 4547]
    },
  ],
  errors: null
};

export const getCategoryArticles = async (categoryId, page) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ errors: null, data: _.shuffle(data.data) });
    }, 1000);
  });
};
