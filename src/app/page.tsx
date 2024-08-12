import React from "react";
import Image from "next/image";
import logo from "../assets/images/contact_logo.png";

const Home = () => {
  return (
    <div>
      <section id="home" className="pt-5">
        <div className="d-block">
          <div className="box-1">
            <h1>GOOD CLEANER</h1>
          </div>
          <div className="box-2">
            <p>
              Good Cleaner là một trong những doanh nghiệp trong lĩnh vực vệ
              sinh công nghiệp cung cấp các dịch vụ vệ sinh xây dựng, sau xây
              dựng, vệ sinh nhà cửa, các dịch vụ tạp vụ,…
            </p>
            <p>
              Trong suốt thời gian từ khi hoạt động đến nay, Good Cleaner vẫn
              luôn giữ vững châm ngôn UY TÍN – CHUYÊN NGHIỆP – TẬN TÂM – GIÁ TỐT
              nhằm mang lại cho khách hàng sự hài lòng nhất, thỏa mãn tối đa nhu
              cầu của khách hàng.
            </p>
            <p>
              Good Cleaner luôn luôn và không ngừng phát triển cải thiện quy
              trình máy móc thiết bị nhằm nâng cao chất lượng dịch vụ mang đến
              những trải nghiệm tốt nhất cho quý khách hàng. Chúng tôi tự tin là
              một trong những công ty vệ sinh công nghiệp uy tín chuyên nghiệp
              top đầu tại Miền Tây.
            </p>
          </div>
        </div>
      </section>
      <section id="services" className="pt-5">
        <div className="d-block2 services-container">
          <div id="box3" className="box-1">
            <h1>DỊCH VỤ CỦA CHÚNG TÔI</h1>
          </div>
          <div id="boxs" className="box-2 grid-container">
            <div className="grid-item"><p>TRÔNG TRẺ TẠI NHÀ</p></div>
            <div className="grid-item"><p>VỆ SINH MÁY LẠNH</p></div>
            <div className="grid-item"><p>GIÚP VIỆC NHÀ THEO GIỜ</p></div>
            <div className="grid-item"><p>CHĂM SÓC NGƯỜI BỆNH</p></div>
            <div className="grid-item"><p>CHĂM SÓC NGƯỜI CAO TUỔI</p></div>
            <div className="grid-item"><p>TỔNG VỆ SINH</p></div>
            <div className="grid-item"><p>VỆ SINH SOFA, RÈM, NỆM</p></div>
            <div className="grid-item"><p>ĐI CHỢ</p></div>
            <div className="grid-item"><p>PHUN KHỬ KHUẨN</p></div>
          </div>
        </div>
      </section>
      <section id="contact" className="pt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>THÔNG TIN LIÊN HỆ ______</h2>
              <div className="logo-container">
                <Image src={logo} alt="Logo" width={150} height={50} />
              </div>
              <p>
                ĐỊA CHỈ: 121, ĐƯỜNG HAI BÀ TRƯNG,
                <br />
                QUẬN NINH KIỀU, THÀNH PHỐ CẦN THƠ
              </p>
              <p>ĐIỆN THOẠI: 0927.2222.33 - 0325.999.666</p>
              <p>EMAIL: GOODCLEANER@GMAIL.COM</p>
              <p>WEBSITE: GCFORYOURHOUSE.COM</p>
            </div>
            <div className="col-md-6 contact2">
              <h2>DỊCH VỤ ______</h2>
              <ul>
                <li>TRÔNG TRẺ TẠI NHÀ</li>
                <li>VỆ SINH MÁY LẠNH</li>
                <li>GIÚP VIỆC NHÀ THEO GIỜ</li>
                <li>CHĂM SÓC NGƯỜI BỆNH</li>
                <li>CHĂM SÓC NGƯỜI CAO TUỔI</li>
                <li>TỔNG VỆ SINH</li>
                <li>VỆ SINH SOFA, RÈM, NỆM</li>
                <li>ĐI CHỢ</li>
                <li>PHUN KHỬ KHUẨN</li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="custom-hr" />
      </section>
    </div>
  );
};

export default Home;