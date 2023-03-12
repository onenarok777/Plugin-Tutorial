import CodeBlock from "../../components/CodeBlock";

const Into = () => {
  return (
    <div>
      <div>
        <p
          style={{
            textIndent: "1.5rem",
          }}
        >
          pdfmake เป็นไลบรารีของภาษา JavaScript ที่ใช้สร้างไฟล์ PDF โดยอาศัย
          Canvas API ในการสร้างเนื้อหาของเอกสาร PDF โดยตรง
          โดยไม่ต้องพึ่งพาโปรแกรมสร้าง PDF ฝั่งเซิร์ฟเวอร์
          หรือโปรแกรมประยุกต์อื่นๆ เพื่อสร้างไฟล์ PDF ให้กับผู้ใช้งาน
          ซึ่งมีความสามารถในการสร้างเอกสาร PDF ด้วยรูปแบบต่างๆ เช่น รูปภาพ ตาราง
          แผนภูมิ ตัวอักษร และอื่นๆ
          นอกจากนี้ยังมีความสามารถในการสร้างหน้ากระดาษมากกว่าหนึ่งหน้า
          และมีการจัดรูปแบบเอกสารเช่นเดียวกับโปรแกรมสร้าง PDF อื่นๆ
          ที่ใช้งานได้ง่าย และมีความสามารถในการแสดงผลไฟล์ PDF
          บนหน้าเว็บไซต์โดยตรงด้วยการใช้งานบน Browser
          โดยไม่ต้องใช้โปรแกรมเพิ่มเติมเลยทีเดียว
        </p>
      </div>
      <div style={{ marginTop: "2rem" }}>
        {
          <CodeBlock
            title="Official Documents"
            element={
              <pre>
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    window.open("https://pdfmake.github.io/docs/0.1")
                  }
                >
                  {" "}
                  https://pdfmake.github.io/docs/0.1
                </a>
              </pre>
            }
          />
        }
      </div>
    </div>
  );
};
export default Into;
