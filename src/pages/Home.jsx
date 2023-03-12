import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";

import { Container, Row, Col } from "react-bootstrap";
import CardPlugin from "../components/CardPlugin";

import pdfMake from "../assets/images/pdf-make-logo.png";
import xlsxLogo from "../assets/images/xlsx-logo.png";

const Home = () => {
  const listPlugin = [
    {
      id: 1,
      name: "PDFMake.js",
      img: pdfMake,
      link: "/pdfmake",
    },
    {
      id: 2,
      name: "XLSX.js",
      img: xlsxLogo,
      link: "/xlsx",
    },
  ];

  return (
    <Container>
      <div>
        <h6 style={{ fontWeight: "bold", marginTop: "2rem" }}>
          Plugin Tutorial คืออะไร?
        </h6>
      </div>
      <div>
        <p style={{ textIndent: "1.5rem" }}>
          Plugin Tutorial เป็นคำที่ใช้เรียกวิธีการสร้างปลั๊กอิน (Plugin)
          หรือส่วนเสริมสำหรับโปรแกรมหรือแอปพลิเคชันต่างๆ
          ซึ่งสามารถเพิ่มฟังก์ชันหรือความสามารถพิเศษเข้าไปในโปรแกรมหรือแอปพลิเคชันนั้นๆ
          ปลั๊กอินนั้นมีประโยชน์มากๆ
          ไม่ว่าจะเป็นในการช่วยเพิ่มความสามารถของโปรแกรม
          ลดเวลาในการทำงานหรือเพิ่มประสิทธิภาพในการใช้งาน
          และยังช่วยให้โปรแกรมหรือแอปพลิเคชันมีความสามารถในการทำงานร่วมกันกับโปรแกรมหรือแอปพลิเคชันอื่นๆ
          อีกด้วย
        </p>
      </div>
      <div>
        <h6>
          <FontAwesomeIcon icon={faList} /> List Plugin
        </h6>
      </div>
      <div style={{ marginTop: "2rem" }}>
        <Row>
          {listPlugin.map((mp, i) => (
            <Col xs={6} sm={6} md={6} lg={4} xl={2} key={i}>
              <CardPlugin data={mp} />
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};
export default Home;
